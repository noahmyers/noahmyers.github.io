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
| CV | `/cv.html` | Download button + links to Google Scholar and ORCID (no duplicate content) |
| Teaching | `/teaching.html` | Course info, FTX case teaser (coming soon) |
| Resources | `/resources.html` | Downloadable files for presentations |
| About | `/about.html` | Personal bio, family photo |

## Design System

### Color Palette (Ink and Clear Blue)

```css
--color-primary: #121a22;      /* Ink: headings, buttons, page-header band */
--color-secondary: #1f2a35;    /* Lighter ink */
--color-accent: #1f63b5;       /* Clear blue: labels, links, hover */
--color-accent-light: #4a86d1; /* Lighter accent for hovers */
--color-text: #333333;         /* Near black for body text */
--color-text-light: #666666;   /* Grey for secondary text */
--color-bg-alt: #f3f4f6;       /* Light grey sections */
--color-bg-dark: #0d1319;      /* Hero base, footer */
```

### Typography

- **Headings:** Archivo (Google Fonts, weights 400-700), bold with slightly tight letter-spacing
- **Body:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)

### Layout Patterns

- **Homepage:** Hero ("Noah Myers" with no credentials, one-line thesis; stage photo under a dark overlay, about 60vh) with transparent header that turns solid on scroll → Intro (photo, short bio, link row, CV button) → Three threads (Research / Speaking / Teaching, one proof point each) → In the News (dated press list, newest first) → Side project (Of Good Report) → one personal line linking to About
- **Nav:** Research · Teaching · Speaking · Resources + outlined CV button (logo links home). About is linked from the homepage and footer only.
- **News:** add new coverage as a `.press-item` at the top of the `.press-list` on index.html (source, date, headline link, one-sentence summary). The whole row is clickable.
- **Speaking:** pitch + photo → two Signature Talks → Professional Engagements list → Book a Presentation (`#booking`).
- **Other pages:** Dark page-header band → Content sections (alternating white/grey backgrounds)

## Key Images

| Image | Usage |
|-------|-------|
| `noah_speaking.jpeg` | Hero background on homepage and og:image (2000px, ~440KB) |
| `speaking_acfe_room.jpeg` | ACFE Global room photo on the speaking page |
| `noah_speaking_profile.jpeg` | Profile image on speaking page |
| `noah_square.jpeg` | Intro photo on homepage |
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
| `/slides/` | `/resources.html` (short URL for closing slides and QR codes) |

Direct file URLs still work: `/files/cv.pdf`, `/files/je_samples.xlsx`

## Social Links

These appear in the link row on the homepage and in footer CTAs:

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

## Branches and Previews

- `master` is live (GitHub Pages serves it at noahmyers.com).
- `dev` is for larger redesigns. Preview it without going live at
  https://raw.githack.com/noahmyers/noahmyers.github.io/dev/index.html
  (raw.githack serves any branch of this public repo; updates can take a few minutes).

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

### Signature Talks (speaking.html)

1. **Auditable AI: Practical, Hands-On AI for Audit and Assurance** - live three-level demo on the fictional Ridgeline case (materials on resources.html)
2. **FTX Unchecked: The Internal Control Failures Behind the Collapse** - internal controls, governance, professional skepticism

The page deliberately does not list where each talk was given. Also offered: data analytics, IT governance and controls, accounting education.

## Content Notes

- **Bio intro:** "I'm an accounting professor at Utah Valley University's Woodbury School of Business, where I teach and research at the intersection of accounting and technology."
- **Background:** Big 4 experience at Ernst & Young (IT Risk Assurance), Squire & Company (software implementation)
- **Credentials:** Ph.D. Arizona State, CPA Utah, 10+ years experience

## Migration History

- **Original:** Jekyll-based site using academicpages template (Minimal Mistakes theme fork)
- **Migrated:** January 2025 to pure static HTML/CSS/JS
- **Reason:** Eliminate Jekyll/Ruby dependency, simplify local preview, modernize design with speaker focus
