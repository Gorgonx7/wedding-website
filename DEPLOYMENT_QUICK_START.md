# GitHub Pages Deployment - Quick Start

## ✅ Setup Complete!

Your wedding website is now configured for automatic deployment to GitHub Pages.

## What Was Configured

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on push to `main`
   - Uses Node.js 20
   - Deploys `dist` folder to GitHub Pages

2. **Vite Configuration** (`vite.config.js`)
   - `base: '/'` configured for custom domain
   - Change to `base: '/repo-name/'` if using default GitHub Pages URL

3. **Custom Domain** (`public/CNAME`)
   - Placeholder: `your-custom-domain.com`
   - **ACTION REQUIRED**: Update with your actual domain

4. **Build Verified** ✓
   - Production build tested successfully
   - All assets copying correctly (images, CNAME, etc.)

## Next Steps

### 1. Update Custom Domain
Edit `public/CNAME` and replace with your domain:
```bash
echo "wedding.yourdomain.com" > public/CNAME
```

Or for apex domain:
```bash
echo "yourdomain.com" > public/CNAME
```

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - wedding website

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Under "Source", select: **GitHub Actions**
4. Under "Custom domain", enter your domain and click Save
5. Wait a few minutes, then check "Enforce HTTPS"

### 4. Configure DNS
See **GITHUB_PAGES_SETUP.md** for detailed DNS configuration instructions.

**For subdomain** (e.g., wedding.example.com):
- CNAME record: `wedding` → `YOUR-USERNAME.github.io`

**For apex domain** (e.g., example.com):
- 4 A records → GitHub Pages IPs (see GITHUB_PAGES_SETUP.md)

## Automatic Deployment

Once set up, every push to `main` automatically:
1. Triggers GitHub Actions workflow
2. Installs dependencies with `npm ci`
3. Builds with `npm run build`
4. Deploys to GitHub Pages
5. Your site updates in 1-2 minutes!

## Files Created

- `.github/workflows/deploy.yml` - CI/CD workflow
- `public/CNAME` - Custom domain configuration
- `GITHUB_PAGES_SETUP.md` - Detailed setup guide
- `DEPLOYMENT.md` - Updated with GitHub Pages section

## Documentation

- **Full Setup Guide**: `GITHUB_PAGES_SETUP.md`
- **Deployment Options**: `DEPLOYMENT.md`
- **Google Sheets Setup**: `GOOGLE_SHEETS_SETUP.md`
- **Project Overview**: `PROJECT_SUMMARY.md`

## Troubleshooting

See `GITHUB_PAGES_SETUP.md` → Troubleshooting section

Common issues:
- DNS propagation takes time (up to 48 hours)
- HTTPS certificate needs DNS to be configured first
- Check Actions tab for workflow status

## Testing Locally

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

---

**Ready to deploy!** Just update the CNAME file and push to GitHub.
