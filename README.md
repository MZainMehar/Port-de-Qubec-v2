# Port de Québec — Interactive Kiosk

Next.js kiosk application for Port de Québec (1080×1920 portrait, touch-enabled).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your media assets
# See public/ASSETS_GUIDE.md for all required files

# 3. Add your fonts
# See public/fonts/README.md

# 4. Run development server
npm run dev
# → http://localhost:3000

# 5. Build for production
npm run build
npm start
```

---

## Project Structure

```
port-quebec-kiosk/
├── public/
│   ├── fonts/              ← BlenderPro + Cambon font files
│   ├── images/
│   │   └── thumbs/         ← Menu thumbnail images
│   ├── videos/             ← .mp4 video files
│   ├── pdfs/               ← PDF documents
│   └── ASSETS_GUIDE.md     ← Full asset checklist
│
├── src/
│   ├── app/
│   │   ├── globals.css     ← Fonts, design tokens, all global styles
│   │   ├── layout.js       ← Root layout
│   │   └── page.js         ← Entry point
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Artboard.js         ← Scales 1080×1920 to viewport
│   │   ├── ui/
│   │   │   ├── Header.js           ← Page header (BlenderPro title + optional subtitle)
│   │   │   ├── BackButton.js       ← ← RETOUR / ← BACK
│   │   │   ├── FinishButton.js     ← TERMINER / FINISH
│   │   │   ├── ImageGallery.js     ← Variant A (large + thumbs) or B (side-by-side)
│   │   │   ├── TextBlock.js        ← Scrollable text with left border accent
│   │   │   ├── VideoPlayer.js      ← <video> wrapper with autoplay
│   │   │   ├── PDFPopup.js         ← Fullscreen PDF overlay
│   │   │   └── IdleBar.js          ← Countdown bar at bottom
│   │   ├── pages/
│   │   │   ├── IdlePage.js         ← Video loop, tap to start
│   │   │   ├── LanguagePage.js     ← FR / EN selection
│   │   │   ├── MenuPage.js         ← 7 initiative cards + TERMINER
│   │   │   ├── Page1.js            ← Tourisme Durable / Sustainable Tourism
│   │   │   ├── Page2.js            ← Retombées / Economic Impacts + video
│   │   │   ├── Page3.js            ← Forum des croisières + video
│   │   │   ├── Page4.js            ← Croisières hivernales + video + image
│   │   │   ├── Page5.js            ← Certification Biosphère + clickable logo
│   │   │   ├── Page6.js            ← Vision Ville-Port + PDF popup
│   │   │   ├── Page7.js            ← Biodiversité / Greening menu (2×2 grid)
│   │   │   ├── Page7Bio1.js        ← Ruches / Beehives + video
│   │   │   ├── Page7Bio2.js        ← Hirondelles / Bank Swallows
│   │   │   ├── Page7Bio3.js        ← Verdissement / Greening + PDF popup
│   │   │   └── Page7Bio4.js        ← ADN environnemental / Environmental DNA
│   │   └── KioskApp.js             ← Page router
│   │
│   └── lib/
│       └── AppContext.js    ← Global state: page, language, navigation, idle timer
│
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Key Features

| Feature              | Detail                                                   |
|---------------------|----------------------------------------------------------|
| **Idle timeout**    | 60 s of inactivity on any page → returns to Idle/Home    |
| **Idle bar**        | Blue progress bar at bottom counts down the 60 s         |
| **Bilingual**       | French / English throughout; language set on page 2      |
| **Portrait layout** | Fixed 1080×1920 artboard, CSS-scaled to any screen size  |
| **PDF popups**      | Pages 6 & 7-Bio3 open PDFs in an in-app overlay          |
| **Gallery swipe**   | Swipe left/right on any gallery to change image          |
| **Video playback**  | Autoplay (muted on idle), controls on content pages      |
| **Navigation**      | History stack — Back button steps through history        |

---

## Design Tokens

```css
--port-blue:       #0076B6
--port-light-blue: #16BCEF
--port-gray:       #BCC3C8
--port-dark:       #3F4450

--outer-margin:       60px
--content-max-width:  960px
--base-grid:          24px
```

---

## Idle Timeout Behaviour

- Any page other than the Idle page starts/resets a 60-second countdown
- Any touch or mouse event resets the countdown
- On expiry the app navigates back to `IdlePage`
- The `IdleBar` component shows a shrinking blue line at the very bottom of the screen

---

## Adding / Editing Content

All page content (titles, body text, source credits) is defined as a `CONTENT` object at the top of each page component, keyed by `'fr'` and `'en'`. No external CMS is required.

Example:
```js
const CONTENT = {
  fr: { title: 'Mon titre', body: 'Mon texte...' },
  en: { title: 'My title',  body: 'My text...'  },
};
```
