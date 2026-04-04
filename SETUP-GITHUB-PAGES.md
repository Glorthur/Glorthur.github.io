# GitHub Pages Setup

This Quartz repo is already prepared for GitHub Pages deployment.

## Best Repo Name

Use `<your-github-username>.github.io` if you can. That is the least annoying option because your site will live at the root of the domain instead of under a repo subpath.

If that repo name is not available or you already use it, use a normal repo name such as `obsidian-notes`.

## One-Time Local Setup

Run this from the Quartz folder after you decide the repo name:

```powershell
.\scripts\configure-github-pages.ps1 -Username YOUR_GITHUB_USERNAME -Repository YOUR_REPOSITORY_NAME
```

Examples:

```powershell
.\scripts\configure-github-pages.ps1 -Username jane -Repository jane.github.io
.\scripts\configure-github-pages.ps1 -Username jane -Repository obsidian-notes
```

## Ongoing Workflow

Edit notes here:

`C:\Users\USER\Desktop\Obsidian\notes`

Then publish from the Quartz folder:

```powershell
npm run dev
```

For previewing locally.

```powershell
.\scripts\publish.ps1
```

For syncing notes into the repo, committing, pulling, and pushing with Quartz's GitHub helper.

## GitHub Website Settings

In the GitHub repository:

1. Open `Settings`.
2. Open `Pages`.
3. Under `Source`, choose `GitHub Actions`.

The workflow file is already present at `.github/workflows/deploy.yml`.
