# Auto-Deployment Fix Checklist

## What Was Done:
✅ Removed conflicting Jekyll workflow that was interfering with your Vite deployment
✅ Your `deploy.yml` workflow is now the **only** workflow running on push to main

## What You Need to Do in GitHub:

### 1. **Configure GitHub Pages Deployment Source**
Go to: **Repository Settings** → **Pages** (left sidebar)

- **Build and deployment → Source:**
  - **Change from:** "Deploy from a branch" 
  - **Change to:** "GitHub Actions" ✅
  
This tells GitHub to use your GitHub Actions workflow (deploy.yml) instead of trying to deploy from a branch.

### 2. **Verify Workflow Permissions**
Go to: **Repository Settings** → **Actions** → **General**

- Scroll to **Workflow permissions**
- Select: ✅ "Read and write permissions"
- Check: ✅ "Allow GitHub Actions to create and approve pull requests"

### 3. **Test the Deployment**
After changing the source to "GitHub Actions":

1. Make a small change to your code
2. Push to main: `git push origin main`
3. Go to: **Actions** tab in your repository
4. Watch the "Deploy static content to Pages" workflow run
5. It should take 1-2 minutes
6. Once complete, your site will be live at: `https://yourusername.github.io/godofmischief/`

## How It Works Now:

```
git push origin main
    ↓
GitHub detects push to main
    ↓
Triggers deploy.yml workflow
    ↓
1. Checkout code
2. Set up Node.js
3. npm ci (install dependencies)
4. npm run build (builds to dist/)
5. Upload dist/ folder as GitHub Pages artifact
6. Deploy to gh-pages branch automatically
    ↓
Website updated! 🚀
```

## If It Still Doesn't Work:

Check the **Actions** tab for error messages:
- Look for red ✗ symbols next to workflow runs
- Click the failed run to see detailed logs
- Common issues:
  - Source not set to "GitHub Actions" (most common)
  - Workflow permissions not granted
  - Node.js cache issue (clear cache in Actions settings if needed)
