# Simple Deployment Without GitHub Pages

If you prefer not to use GitHub Pages, here are two super easy alternatives:

## Option 1: Netlify (Recommended - Easiest!)

### Method A: Drag and Drop (No Git Required)

1. **Build your site**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your `dist` folder
   - Done! Your site is live instantly

3. **Custom Domain**:
   - In Netlify dashboard → Domain settings
   - Add your custom domain
   - Follow DNS instructions (usually just a CNAME record)

**Pros:**
- ✅ No Git required
- ✅ Takes 2 minutes
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Re-deploy anytime by dragging new dist folder

### Method B: Connect to GitHub (Optional)

1. Push code to GitHub (without Pages)
2. Sign up at [netlify.com](https://netlify.com)
3. "New site from Git" → Choose your repo
4. Build settings auto-detected
5. Auto-deploys on every push

## Option 2: Vercel

### Quick Deploy

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   cd /path/to/wedding-website
   vercel
   ```

3. **Follow prompts**:
   - Login with GitHub/email
   - Confirm settings (auto-detected)
   - Get instant live URL

4. **Custom Domain**:
   ```bash
   vercel --prod
   vercel domains add your-domain.com
   ```

**Pros:**
- ✅ CLI deployment
- ✅ Fast global CDN
- ✅ Free SSL
- ✅ Great for React

## Option 3: Any Static Host

Your built site (`dist` folder) is just HTML, CSS, and JavaScript. You can host it anywhere:

### Build the site:
```bash
npm run build
```

### Upload `dist` folder to:
- **Cloudflare Pages** - Free, fast, easy
- **Firebase Hosting** - Google's hosting
- **Surge.sh** - CLI-based, super simple
- **Render** - Free static hosting
- **Your own web server** - Any Apache/Nginx server

### Example: Surge.sh (Simplest CLI)
```bash
npm install -g surge
cd dist
surge
```

## No GitHub Required!

You can use any of these without ever using GitHub:

1. Build locally: `npm run build`
2. Upload `dist` folder manually
3. Update by rebuilding and re-uploading

## What About GitHub Pages Setup?

If you want to remove the GitHub Pages configuration:

```bash
# Remove GitHub Actions workflow
rm -rf .github/

# Remove CNAME file
rm public/CNAME

# Revert vite.config.js (optional - base: '/' works everywhere)
```

Or just ignore it - it won't affect other deployment methods.

## Comparison

| Platform | Ease | Auto-Deploy | Custom Domain | SSL |
|----------|------|-------------|---------------|-----|
| Netlify Drop | ⭐⭐⭐⭐⭐ | ❌ | ✅ | ✅ |
| Netlify Git | ⭐⭐⭐⭐ | ✅ | ✅ | ✅ |
| Vercel | ⭐⭐⭐⭐ | ✅ | ✅ | ✅ |
| Surge | ⭐⭐⭐⭐⭐ | ❌ | ✅ | ✅ |
| GitHub Pages | ⭐⭐⭐ | ✅ | ✅ | ✅ |

## My Recommendation

**Use Netlify Drop** if you:
- Want the absolute easiest option
- Don't want to set up Git/CI/CD
- Just want to drag and drop

**Use Vercel** if you:
- Like CLI tools
- Want automatic deployments
- Are comfortable with terminal commands

Both are 100% free for personal projects and easier than GitHub Pages!

## Need Help?

Detailed guides for each platform are in `DEPLOYMENT.md`.
