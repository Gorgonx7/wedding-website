# Wedding Website - Google Sheets Integration Guide

## Overview
This guide will help you set up Google Sheets to receive RSVP form submissions from your wedding website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Wedding RSVPs" (or any name you prefer)
4. In the first row, add these column headers:
   - A1: Timestamp
   - B1: First Name
   - C1: Surname
   - D1: Email
   - E1: Phone Number
   - F1: Attending
   - G1: Venue Stay
   - H1: Flower Preference
   - I1: Dietary Requirements
   - J1: Additional Guests
   - K1: Song Suggestion

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    var timestamp = new Date();
    
    // Format additional guests as a string
    var additionalGuestsText = '';
    if (data.additionalGuests && data.additionalGuests.length > 0) {
      additionalGuestsText = data.additionalGuests.map(function(guest, index) {
        var guestInfo = (index + 1) + '. ' + guest.firstName + ' ' + guest.surname;
        if (guest.dietaryRequirements) {
          guestInfo += ' (Dietary: ' + guest.dietaryRequirements + ')';
        }
        if (guest.flower) {
          guestInfo += ' [Flower: ' + guest.flower + ']';
        }
        return guestInfo;
      }).join('; ');
    }
    
    var rowData = [
      timestamp,
      data.firstName || '',
      data.surname || '',
      data.email || '',
      data.phone || '',
      data.attending || '',
      data.venueStay ? 'Yes' : 'No',
      data.flower || '',
      data.dietaryRequirements || '',
      additionalGuestsText,
      data.songSuggestion || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾) and name your project (e.g., "Wedding RSVP Handler")

## Step 3: Deploy the Web App

1. Click the **Deploy** button (or go to **Deploy** > **New deployment**)
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Wedding RSVP Form Handler" (optional)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** that appears - you'll need this!

## Step 4: Update Your Website

1. Open the file `src/components/RSVPForm.jsx`
2. Find line 52 where it says:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web app URL (in quotes)
4. Save the file

Example:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

## Step 5: Test the Form

1. Make sure your dev server is running (`npm run dev`)
2. Open your browser to http://localhost:5173/
3. Fill out the RSVP form and submit
4. Check your Google Sheet - a new row should appear with the form data!

## Troubleshooting

### Form submission doesn't work
- Make sure you've deployed the script as a **Web app** (not as an API executable)
- Verify "Who has access" is set to **Anyone**
- Check that you copied the complete Web app URL (it should end with `/exec`)

### Authorization issues
- You may need to re-authorize the script if you make changes
- Make sure you're using the same Google account that owns the spreadsheet

### CORS errors
- The script uses `mode: 'no-cors'` to handle cross-origin requests
- This is normal and expected for Google Apps Script web apps

## Production Deployment

When you're ready to deploy your website:

1. Update the `GOOGLE_SCRIPT_URL` in `RSVPForm.jsx` with your production URL
2. Build your site: `npm run build`
3. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Notes

- The script automatically adds a timestamp to each submission
- The Google Sheet will show "Yes" or "No" for the venue stay preference
- Empty fields will appear as blank cells in the sheet
- You can customize the script to add data validation, send confirmation emails, etc.
