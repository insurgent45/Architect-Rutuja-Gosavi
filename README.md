# Rutuja Gosavi — Architecture Portfolio

Minimalist, single-page portfolio website for an architect & landscape architect.  
Static HTML/CSS/JS — no build step required.

## 🏗️ Local Preview

1. **Using VS Code Live Server** (recommended):
   - Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
   - Right-click `index.html` → **Open with Live Server**

2. **Using Python**:
   ```bash
   cd "D:\Rutuja Porfolio"
   python -m http.server 8000
   # Open http://localhost:8000
   ```

3. **Using Node.js**:
   ```bash
   npx serve .
   ```

## 🚀 GitHub Pages Deployment

1. `git init` and commit the site:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   ```

2. Push to a GitHub repo (public, or private with Pages on a paid plan):
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

3. **Repo Settings → Pages → Source**: `main` branch, root (`/`).

4. Site goes live at `https://<username>.github.io/<repo-name>/`

5. Optional: custom domain via a `CNAME` file + DNS records.

No build step needed — every push updates the live site within ~1 minute.

## 📄 Print / PDF

Click **Download PDF** in the footer (or `Ctrl+P`) to generate a clean, paginated PDF.  
The dedicated `print.css` stylesheet:
- Forces all animations to their final visible state
- Switches to light background / dark text
- Hides nav, modals, lightbox, and download button
- Sets A4 page size with 1.5cm margins
- Prevents page-break inside project cards and timeline items

## 📁 Adding New Projects

1. Drop images into `assets/images/projects/<new-slug>/`
2. Add one object to `data/projects.js` following the existing schema
3. No HTML/CSS changes needed — the grid renders from the array

## Tech Stack

- **HTML/CSS/JS** — no framework, no bundler
- **Fonts**: Cormorant Garamond (display) + Inter (body) via Google Fonts
- **Icons**: Lucide via CDN
- **Animations**: Vanilla IntersectionObserver (no library)
