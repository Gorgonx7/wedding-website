# Deployment Guide - Wedding Website

## Quick Deployment Options

This guide covers three popular hosting options for your wedding website. All are free and easy to set up.

---

## Option 1: Netlify (Recommended)

### Why Netlify?
- Free hosting for static sites
- Automatic HTTPS
- Custom domain support
- Continuous deployment from Git
- Simple drag-and-drop option

### Steps:

#### Method A: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - wedding website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your repository
   
3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Your site is live!**
   - Netlify will provide a URL like `random-name-123.netlify.app`
   - You can customize this or add your own domain

#### Method B: Manual Deploy

1. **Build your site**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop your `dist` folder
   - Done! Your site is live

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

---

## Option 2: Vercel

### Why Vercel?
- Optimized for React apps
- Lightning-fast global CDN
- Free SSL certificates
- Easy Git integration

### Steps:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? No
   - Project name: wedding-website
   - Directory: ./ (current directory)
   - Auto-detect settings? Yes

3. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Connect to GitHub

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

---

## Option 3: GitHub Pages with GitHub Actions (Recommended for GitHub Users)

### Why GitHub Pages?
- Free hosting if you're already using GitHub
- Automatic CI/CD with GitHub Actions
- Custom domain support with free HTTPS
- No manual deployment needed

### Quick Start:

This project is pre-configured with GitHub Actions for automatic deployment!

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit
   
   Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: Select "GitHub Actions"
   - Done! The workflow will automatically deploy

3. **Configure Custom Domain** (optional but recommended):
   - Edit `public/CNAME` with your domain
   - See detailed instructions in `GITHUB_PAGES_SETUP.md`

### Full Documentation

For complete setup instructions including:
- Custom domain configuration
- DNS setup (A records and CNAME)
- Troubleshooting
- HTTPS configuration

**See: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)**

Your site deploys automatically on every push to `main`!

---

## Environment Variables

If you need to use environment variables (like for the Google Sheets URL):

### Netlify
- Go to Site settings → Build & deploy → Environment
- Add variables: `VITE_GOOGLE_SCRIPT_URL`
- Redeploy

### Vercel
- Project settings → Environment Variables
- Add: `VITE_GOOGLE_SCRIPT_URL`
- Redeploy

### In Your Code
```javascript
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'YOUR_URL_HERE';
```

---

## Custom Domain Setup

### General Steps (works for most providers):

1. **Purchase a domain** (Google Domains, Namecheap, GoDaddy, etc.)

2. **Configure DNS**:
   
   For Netlify:
   - Add these DNS records at your domain provider:
   - A Record: `@` → `75.2.60.5`
   - CNAME: `www` → `your-site.netlify.app`
   
   For Vercel:
   - A Record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

3. **Add domain to hosting platform**:
   - In Netlify/Vercel dashboard
   - Add custom domain
   - Wait for DNS propagation (can take up to 48 hours)

---

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update couple names in `Banner.jsx`
- [ ] Update venue information in `Information.jsx`
- [ ] Set up Google Sheets integration (see GOOGLE_SHEETS_SETUP.md)
- [ ] Update the Google Script URL in `RSVPForm.jsx`
- [ ] Test the form submission locally
- [ ] Replace placeholder banner image (if you have one)
- [ ] Update site title in `index.html`
- [ ] Add a favicon (replace `/public/favicon.svg`)
- [ ] Test on mobile devices
- [ ] Run `npm run build` to ensure it builds successfully

---

## Updating Your Site

### If using Git-based deployment (Netlify/Vercel):
```bash
git add .
git commit -m "Update website content"
git push
```
Your site will automatically rebuild and redeploy!

### If using manual deployment:
```bash
npm run build
# Then re-upload the dist folder
```

---

## Troubleshooting

### Build fails
- Run `npm run build` locally to see errors
- Check for syntax errors in your code
- Ensure all dependencies are in package.json

### Form submissions not working
- Double-check Google Script URL
- Verify the script is deployed with "Anyone" access
- Check browser console for errors

### Site looks broken
- Clear browser cache
- Check that all files are uploaded
- Verify base path in vite.config.js (for GitHub Pages)

---

## Support

For platform-specific help:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
