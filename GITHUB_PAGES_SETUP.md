# GitHub Pages Deployment with Custom Domain

This guide covers deploying the wedding website to GitHub Pages with a custom domain.

## Prerequisites

- GitHub repository containing the wedding website code
- Custom domain name
- Access to your domain's DNS settings

## Setup Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### 2. Configure Custom Domain

#### Update CNAME File
Edit `public/CNAME` and replace `your-custom-domain.com` with your actual domain:
```
wedding.example.com
```

Or for apex domain:
```
example.com
```

#### Commit and Push
```bash
git add public/CNAME
git commit -m "Configure custom domain

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git push
```

### 3. Configure DNS Settings

Choose one of these options based on your domain setup:

#### Option A: Subdomain (Recommended)
For `wedding.example.com`:

Add a CNAME record:
- **Type**: CNAME
- **Name**: `wedding` (or whatever subdomain you prefer)
- **Value**: `YOUR-USERNAME.github.io.`
- **TTL**: 3600 (or default)

#### Option B: Apex Domain
For `example.com`:

Add four A records:
- **Type**: A
- **Name**: `@` (or leave blank)
- **Value**: 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **TTL**: 3600 (or default)

Plus a CNAME for www:
- **Type**: CNAME
- **Name**: `www`
- **Value**: `YOUR-USERNAME.github.io.`

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Under **Custom domain**:
   - Enter your domain (e.g., `wedding.example.com`)
   - Click **Save**
5. Check **Enforce HTTPS** (may take a few minutes to become available)

### 5. Deploy

The GitHub Actions workflow will automatically deploy when you push to the `main` branch:

```bash
git push origin main
```

You can also manually trigger the workflow:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

## Verification

### Check Deployment Status
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Verify both "build" and "deploy" jobs completed successfully

### Test Your Site
1. Wait for DNS propagation (5 minutes to 48 hours, usually quick)
2. Visit your custom domain in a browser
3. Verify HTTPS is working (you should see a padlock icon)
4. Test all functionality:
   - Banner displays correctly
   - Gallery images load
   - Form submission works
   - Responsive design on mobile

## Troubleshooting

### DNS Not Resolving
- **Check DNS propagation**: Use [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
- **Verify DNS records**: Use `dig YOUR-DOMAIN.com` or `nslookup YOUR-DOMAIN.com`
- **Wait**: DNS changes can take up to 48 hours

### HTTPS Certificate Not Available
- GitHub automatically provisions Let's Encrypt certificates
- Can take up to 1 hour after DNS is properly configured
- Ensure "Enforce HTTPS" is checked in repository settings

### Workflow Fails
- **Check Node version**: Workflow uses Node 20
- **Check dependencies**: Run `npm ci` locally to verify package-lock.json
- **Check build**: Run `npm run build` locally to catch build errors
- **Check permissions**: Ensure workflow has Pages write permission

### Images Not Loading
- Verify images are in `public/` directory
- Check image paths in code (should be `/imagename.jpg`)
- Check browser console for 404 errors
- Ensure `base: '/'` in `vite.config.js` for custom domain

### Form Not Submitting
- Verify Google Apps Script Web App URL is correct
- Check CORS configuration in Apps Script
- Test form submission in browser console
- Ensure Google Sheet has correct permissions

## Updating the Site

To update your website:

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message
   
   Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
   git push
   ```
3. GitHub Actions will automatically build and deploy
4. Changes appear in 1-2 minutes

## Workflow Configuration

The deployment workflow (`.github/workflows/deploy.yml`) includes:

- **Trigger**: Automatic on push to `main` branch
- **Node Version**: 20
- **Build Command**: `npm run build`
- **Deploy Target**: `./dist` folder
- **Permissions**: Read contents, write pages, id-token

## Custom Domain vs Default GitHub Pages URL

This project is configured for a custom domain with `base: '/'` in `vite.config.js`.

If you want to use the default GitHub Pages URL instead:
1. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',
   ```
2. Delete `public/CNAME` file
3. Rebuild and deploy

## Security Notes

- ✅ HTTPS is automatically enabled
- ✅ Let's Encrypt certificate auto-renews
- ✅ npm ci ensures reproducible builds
- ⚠️ Never commit `.env` files with sensitive data
- ⚠️ Google Sheets endpoint is public (validate data server-side if needed)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Build Configuration](https://vitejs.dev/config/build-options.html)

## Support

If you encounter issues:
1. Check the **Actions** tab for workflow logs
2. Review the troubleshooting section above
3. Check GitHub Pages status: [https://www.githubstatus.com/](https://www.githubstatus.com/)
