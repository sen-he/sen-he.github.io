# Sen He - Academic Website

Personal academic website for **Sen He**, Assistant Professor in the Department of Electrical and Computer Engineering at the University of Arizona.

**Live site**: [https://sen-he.github.io/](https://sen-he.github.io/)

## Built With

- [Hugo](https://gohugo.io/) — Static site generator
- [HugoBlox Academic CV](https://hugoblox.com/) — Academic website template
- [GitHub Pages](https://pages.github.com/) — Hosting

## Local Development

```bash
# Install Hugo Extended (v0.139.0+)
# https://gohugo.io/installation/

# Clone this repo
git clone https://github.com/sen-he/sen-he.github.io.git
cd sen-he.github.io

# Install Hugo modules
hugo mod get

# Start local server
hugo server -D
```

Visit `http://localhost:1313` to preview.

## Adding Publications

1. Export your publications as a `.bib` file from Google Scholar or your reference manager.
2. Use the [Hugo Academic CLI](https://github.com/GetRD/academic-file-converter) to convert:
   ```bash
   pip install academic
   academic import --bibtex publications.bib
   ```
3. This generates individual markdown files in `content/publications/`.
4. Mark featured publications by setting `featured: true` in the front matter.

## Directory Structure

```
content/
├── _index.md              # Homepage
├── authors/_index.md       # Author listing config
├── blog/                   # News/blog posts
├── courses/                # Course materials
├── events/                 # Talks and events
├── experience.md           # CV/Experience timeline
├── projects/               # Research projects
├── publications/           # Publication entries
├── teaching/               # Teaching page
└── team/                   # Team/Students page

config/_default/
├── hugo.yaml               # Main Hugo config
├── languages.yaml          # Language settings
├── menus.yaml              # Navigation menus
├── module.yaml             # Hugo module imports
└── params.yaml             # Site parameters & theme

data/authors/
└── me.yaml                 # Author profile data

static/uploads/
├── resume.pdf              # Your CV (add this)
└── README.md

.github/workflows/
└── deploy.yaml             # GitHub Actions deployment
```

## Deployment

Push to `main` branch. GitHub Actions will automatically build and deploy to GitHub Pages.

### First-time setup:
1. Go to repo Settings → Pages → Source: select "GitHub Actions"
2. Push your changes — the workflow will handle the rest

## Customization

- **Colors**: Edit `params.yaml` → `hugoblox.theme.colors` (currently UofA Red/Navy)
- **Navigation**: Edit `menus.yaml`
- **Profile**: Edit `data/authors/me.yaml`
- **Avatar**: Place your photo at `content/authors/me/avatar.jpg` (or `assets/media/avatar.jpg`)
