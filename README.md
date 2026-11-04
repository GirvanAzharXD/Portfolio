# Portfolio — Mochamad Girvan Azhar

Personal portfolio of Mochamad Girvan Azhar, Informatics graduate from Universitas Gunadarma,
focused on Data Analysis, Machine Learning, and Software Development.

## Live Demo

**[girvanazhar.vercel.app](https://girvanazhar.vercel.app/)**

## Design

Dark, refined, editorial-style design:

- Near-black background with warm off-white text and a single vermilion accent
- Instrument Serif for display headings, Inter for body text, JetBrains Mono for labels
- Left-aligned sections with numbered mono kickers and hairline dividers
- Light parallax (Framer Motion `useScroll`) on the hero and project images — no heavy 3D libraries
- No gradients, no glassmorphism, no decorative floating shapes
- GA serif monogram as the header logo and site favicon

## Features

- Fully responsive layout, mobile-first
- Smooth, restrained reveal animations (fade + small rise, once per element)
- Working contact form via EmailJS (no backend required)
- Project showcase with live demos and source code links
- Certifications list, including BNSP competency certifications
- Reduced-motion support (`prefers-reduced-motion` is respected)

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Fonts**: Instrument Serif, Inter, JetBrains Mono (Google Fonts)
- **Deployment**: Vercel

## Sections

1. **Hero** — Short introduction with CV link
2. **About** — Background, experience, and current focus
3. **Projects** — Selected work with live demos and source code
4. **Skills** — Technologies grouped by area
5. **Certifications** — Filterable list of credentials
6. **Journey** — Education and career timeline
7. **Contact** — Contact form with EmailJS integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GirvanAzharXD/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Contact Form (EmailJS)

The contact form sends email directly via EmailJS, without a backend server.

1. Create an account at [emailjs.com](https://emailjs.com) (free tier available)
2. Connect an email service (e.g. Gmail) and create a template using
   `{{from_name}}`, `{{from_email}}`, and `{{message}}`
3. Put the Service ID, Template ID, and Public Key in `src/config/emailjs.js`

## Deployment

This project is configured for **Vercel** (`vercel.json` is included):

1. Push to GitHub
2. Import the repository at [vercel.com/import](https://vercel.com/import)
3. Framework preset: Vite (auto-detected), build command `npm run build`,
   output directory `dist`
4. Deploy — every push to the default branch deploys automatically

## Project Structure

```
Portfolio/
├── public/
│   ├── favicon.ico / favicon.png  # GA serif monogram favicon
│   ├── apple-touch-icon.png
│   ├── logo.png                   # GA serif monogram (transparent, header)
│   ├── images/                    # Project and journey images
│   ├── certificates/              # Certificate files
│   ├── resume.pdf
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation with logo mark
│   │   ├── Hero.jsx               # Introduction + CV link
│   │   ├── About.jsx              # Background and skills
│   │   ├── Projects.jsx           # Selected work
│   │   ├── Skills.jsx             # Skill groups
│   │   ├── Certifications.jsx     # Credentials with category filter
│   │   ├── Journey.jsx            # Timeline
│   │   ├── Contact.jsx            # EmailJS contact form
│   │   ├── Footer.jsx
│   │   └── ui.jsx                 # Shared Reveal + SectionHeader
│   ├── config/
│   │   └── emailjs.js             # EmailJS credentials
│   ├── hooks/
│   │   └── usePerformance.js
│   ├── utils/
│   │   └── statsCalculator.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── README.md
```

## Customization

- **Bio and skills**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx` (data lives in the same file and is exported as `projectsData`)
- **Certifications**: `src/components/Certifications.jsx`
- **Contact details / EmailJS**: `src/components/Contact.jsx` and `src/config/emailjs.js`
- **Colors and fonts**: `tailwind.config.js` and `src/index.css`
- **Logo**: replace `public/logo.png` (header) and `public/favicon.*` (browser tab icon)

## Troubleshooting

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

EmailJS issues: check the credentials in `src/config/emailjs.js` and the
browser console for errors.

## Contact & Author

**Mochamad Girvan Azhar**

- Email: girvanazharr@gmail.com
- LinkedIn: [Mochamad Girvan Azhar](https://www.linkedin.com/in/girvanazhar/)
- GitHub: [@GirvanAzharXD](https://github.com/GirvanAzharXD)
- Portfolio: [girvanazhar.vercel.app](https://girvanazhar.vercel.app/)
