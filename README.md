# Wedding Website

A modern and minimal wedding website built with React and Vite. Features a beautiful banner, venue information, and an RSVP form that submits to Google Sheets.

## Features

- **Hero Banner**: Clean, elegant banner with couple names and wedding date
- **Venue Information**: Display venue details, address, and date
- **RSVP Form**: Collect guest responses with:
  - Name and contact information
  - Venue accommodation preferences
  - Dietary requirements
  - Song suggestions for the reception
- **Google Sheets Integration**: Form submissions automatically saved to a Google Sheet
- **Fully Responsive**: Works beautifully on mobile, tablet, and desktop

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd wedding-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:5173](http://localhost:5173)

## Setting Up Google Sheets Integration

To enable form submissions to Google Sheets, follow the detailed guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md).

Quick steps:
1. Create a Google Sheet
2. Set up a Google Apps Script
3. Deploy as a Web App
4. Update the URL in `src/components/RSVPForm.jsx`

## Customization

### Update Couple Names and Date

Edit `src/components/Banner.jsx`:
```javascript
<h1 className="couple-names">Your Names</h1>
<p className="wedding-date">Your Date</p>
```

### Update Venue Information

Edit `src/components/Information.jsx` to change venue details, add schedule, dress code, etc.

### Add a Banner Image

1. Place your image in `public/` folder
2. Update `src/components/Banner.css`:
   ```css
   .banner-image {
     background-image: url('/your-image.jpg');
     background-size: cover;
     background-position: center;
   }
   ```

### Customize Colors

Edit the CSS variables in component stylesheets or create a global theme file.

## Building for Production

Build the site:
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy.

## Deployment Options

### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Then deploy the dist folder to GitHub Pages
```

## Project Structure

```
wedding-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Banner.jsx
│   │   ├── Banner.css
│   │   ├── Information.jsx
│   │   ├── Information.css
│   │   ├── RSVPForm.jsx
│   │   └── RSVPForm.css
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── GOOGLE_SHEETS_SETUP.md
└── package.json
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Google Apps Script** - Form submission backend

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue in the repository.
