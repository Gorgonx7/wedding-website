# ⚠️ MANUAL STEP REQUIRED: Enable GitHub Pages

Your deployment is almost complete! You just need to enable GitHub Pages in your repository settings.

## Quick Setup (2 minutes)

### Step 1: Enable GitHub Pages

1. **Open your repository**: https://github.com/Gorgonx7/wedding-website
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Click **Save**

That's it! Your site will be available at:
**https://gorgonx7.github.io/wedding-website/**

### Step 2: Trigger Deployment

The workflow will run automatically on the next push, or you can trigger it manually:

```bash
gh workflow run "Deploy to GitHub Pages"
```

Or go to the **Actions** tab and click "Run workflow".

---

## What's Already Done ✅

- ✅ GitHub Actions workflow configured (`.github/workflows/deploy.yml`)
- ✅ Vite build settings configured for GitHub Pages path
- ✅ Code pushed to GitHub
- ✅ Build tested locally and works

## What Happens After You Enable Pages

1. Workflow runs automatically
2. Builds your React app
3. Deploys to GitHub Pages
4. Site goes live at: `https://gorgonx7.github.io/wedding-website/`
5. Every push to `main` automatically updates the site!

## Adding a Custom Domain (Optional)

If you want to use your own domain (e.g., `wedding.example.com`):

1. Add your domain in **Settings → Pages → Custom domain**
2. Create `public/CNAME` file with your domain
3. Update `vite.config.js` to `base: '/'`
4. Configure DNS CNAME record pointing to `gorgonx7.github.io`
5. Rebuild and push

See `GITHUB_PAGES_SETUP.md` for detailed custom domain instructions.

## Troubleshooting

**Workflow still failing?**
- Make sure you clicked "Save" after selecting "GitHub Actions" as source
- Check Actions tab for detailed error logs
- Workflow needs Pages to be enabled first

**Can't find Pages settings?**
- Repository must be public (or you need GitHub Pro for private repos)
- You must have admin access to the repository

---

## Next Steps

1. Enable Pages following Step 1 above
2. Watch the Actions tab - your site will deploy in ~1-2 minutes
3. Visit https://gorgonx7.github.io/wedding-website/
4. Share with James and Anna! 🎉

The hardest part is already done - just flip that switch in Settings → Pages!
