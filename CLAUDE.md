# Noah Myers Personal Website

## Project Overview

This is a static personal website for Noah Myers, hosted on GitHub Pages at **noahmyers.com**. The site serves as both an academic homepage and a professional speaker profile, with emphasis on corporate speaking engagements.

**Owner:** Noah M. Myers, Ph.D., CPA
**Role:** Assistant Professor of Accounting, Utah Valley University (Woodbury School of Business)
**Focus Areas:** AI in accounting, fraud prevention, data analytics, auditing, IT governance

## Site Architecture

This is a **pure static site** (HTML/CSS/JS only) - no Jekyll, no build step, no Ruby required. It was migrated from a Jekyll-based "Minimal Mistakes" academic template in January 2025.

### File Structure

```
noahmyers.github.io/
├── index.html          # Homepage - hero + sidebar profile + topics
├── speaking.html       # Speaking topics, featured talks (AI, FTX case)
├── cv.html             # Academic CV
├── teaching.html       # Teaching info + video embeds
├── resources.html      # Downloadable files
├── about.html          # Personal/family info
├── 404.html            # Error page
├── css/style.css       # Main stylesheet
├── js/main.js          # Mobile nav toggle
├── CNAME               # Custom domain (noahmyers.com)
├── images/             # All images
├── files/              # PDFs, Excel files (cv.pdf, je_samples.xlsx)
└── [redirect folders]  # /cv/, /resume/, /teaching_info/, etc.
```

### Key Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` or `/index.html` | Hero banner, sidebar with social links, speaking topics overview |
| Speaking | `/speaking.html` | Featured topics (AI, FTX), all topics grid, engagements list |
| CV | `/cv.html` | Academic credentials, publications, teaching history |
| Teaching | `/teaching.html` | Course info, embedded video lectures |
| Resources | `/resources.html` | Downloadable files for presentations |
| About | `/about.html` | Personal bio, family photo |

## Design System

### Color Palette (Muted Professional)

```css
--color-primary: #2c3e50;      /* Dark blue-grey */
--color-secondary: #34495e;    /* Slightly lighter blue-grey */
--color-accent: #5a7a94;       /* Muted steel blue */
--color-accent-light: #7a9cb8; /* Lighter accent for hovers */
--color-text: #333333;         /* Near black for body text */
--color-text-light: #666666;   /* Grey for secondary text */
--color-bg-dark: #1a252f;      /* Dark sections (hero, footer) */
```

### Typography

- **Headings:** Georgia, Times New Roman, serif
- **Body:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)

### Layout Patterns

- **Homepage:** Compact hero (45vh) → Sidebar profile with social links → Topics grid
- **Sidebar:** Left-aligned on desktop, stacks on mobile. Contains photo, name, title, and vertical social links (LinkedIn, ORCID, Google Scholar, Email, UVU Directory)
- **Other pages:** Page header → Content sections (alternating white/grey backgrounds)

## Key Images

| Image | Usage |
|-------|-------|
| `noah_speaking.jpeg` | Hero background on homepage (large, 4.3MB) |
| `noah_speaking_profile.jpeg` | Profile image on speaking page |
| `noah_square.jpeg` | Sidebar profile photo on homepage |
| `family.jpg` | About page |

## URL Redirects

These folders contain `index.html` files with meta refresh redirects to preserve old Jekyll URLs:

| Old URL | Redirects To |
|---------|--------------|
| `/cv/` | `/cv.html` |
| `/resume/` | `/cv.html` |
| `/teaching_info/` | `/teaching.html` |
| `/teach/` | `/teaching.html` |
| `/about_me/` | `/about.html` |
| `/data/` | `/resources.html` |
| `/home/` | `/` |

Direct file URLs still work: `/files/cv.pdf`, `/files/je_samples.xlsx`

## Social Links

These appear in the sidebar on the homepage and in footer CTAs:

- **Email:** noah.myers@uvu.edu
- **LinkedIn:** https://www.linkedin.com/in/noahmyers
- **Google Scholar:** https://scholar.google.com/citations?user=G-64bxcAAAAJ&hl=en
- **ORCID:** https://orcid.org/0000-0001-5652-0134
- **UVU Directory:** https://www.uvu.edu/directory/employee/?id=c2dVMzRFTUcrR0xPUXRPUlFWaTNuZz09

## Local Development

```bash
# Preview the site locally
python3 -m http.server 8000
# Then open http://localhost:8000

# Or just open index.html directly in browser
open index.html
```

## Deployment

Just push to GitHub - no build step required:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages serves the static files directly. Changes typically go live within 1-2 minutes.

## Analytics

Google Analytics 4 is configured with tracking ID: `G-0LKL01KH5P`

## Speaking Topics

### Featured Topics (with detailed sections on speaking.html)

1. **AI in Accounting & Finance** - Generative AI, workflow automation, practical demonstrations
2. **Lessons from the FTX Collapse** - Internal controls, governance, professional skepticism

### All Topics

- AI in Accounting & Finance
- Fraud Prevention & Investigation
- Data Analytics for Accountants
- Auditing & Assurance
- IT Governance & Controls
- Accounting Education

## Content Notes

- **Bio intro:** "I'm an accounting professor at Utah Valley University's Woodbury School of Business, where I teach and research at the intersection of accounting and technology."
- **Background:** Big 4 experience at Ernst & Young (IT Risk Assurance), Squire & Company (software implementation)
- **Credentials:** Ph.D. Arizona State, CPA Utah, 10+ years experience

## Migration History

- **Original:** Jekyll-based site using academicpages template (Minimal Mistakes theme fork)
- **Migrated:** January 2025 to pure static HTML/CSS/JS
- **Reason:** Eliminate Jekyll/Ruby dependency, simplify local preview, modernize design with speaker focus
