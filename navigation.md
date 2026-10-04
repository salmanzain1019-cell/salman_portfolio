# Navigation Architecture & Information Flow: Muhammed Salman Portfolio (2026 Edition)
**Structure Model**: Hybrid Architecture — High-Impact Long-Form Main Canvas (matching FWD Agency flow) with dedicated deep-dive Case Study / Archive views.

---

## 1. Page Inventory (Every Page the Site Needs)

### Page 1: Home / Main Canvas (`/index.html` or `/`)
The core narrative-driven landing experience inspired by the FWD Creative Agency website. Full-bleed, continuous-scroll experience structured into cohesive chapters:
1. **Hero**: Fullscreen video turnaround loop (`assets/video/home_video.mp4`) with typography overlay, edition badge (`2026 EDITION`), and sound/playback trigger.
2. **Intro / Manifesto**: The creative thesis (*"Creative by nature. Strategic by mind"*, *"Moving brands from noise to meaning"*).
3. **About / Persona**: Editorial split layout showcasing Salman (`assets/my_images/`), his background as a digital marketer & self-taught creative strategist, and multi-hyphenate identity (*"Am not just a copywriter"*).
4. **Core Capabilities (Skills)**: 7 skill pills with interactive hover contexts.
5. **Creative Framework (Process)**: 5-stage interactive sequence (Discovery → Research → Ideation → Writing & Direction → Delivery).
6. **Featured Works (The Spotlight)**: 4 curated marquee case studies (Al Salama Institute, Valluvanad Roofings, White Mart/Janatha, Amend Dental) with rich before/after & strategy takeaways.
7. **The Proof (Numbers Don't Lie)**: Interactive viral reach statistics (2.25M+ views, 644K shares, 99.6% non-follower reach) with expandable modal previews of analytics screenshots.
8. **Client Roster**: Interactive monochrome-to-color logo ticker (Amend Dental, ICA, Ayurve, Bataatas, Momspure, KiddiKind, med7, Usthad, Kenme).
9. **Final CTA / Outro**: High-impact bold closing statement (*"Let’s Work Together" / "Lowkey cooked this just for him"*), email, phone, and direct socials.

---

### Page 2: Selected Works & Campaign Archive (`/works.html` or `/archive`)
A dedicated gallery view for the complete 50+ campaign and creative assets from `assets/works/`:
- **Filter Bar**: All, Outdoor / Billboards, Brand Strategy & Print, Social & Digital Ads.
- **Card Format**: Visual thumbnail, client name, campaign objective, and lightbox preview.
- **Back Link**: Floating/sticky back to Home link.

---

### Page 3: Case Study Detail Template (Optional Modal or Standalone View)
For key flagship campaigns (e.g. Al Salama Institute of Advanced Studies):
- Campaign context, the core strategic problem, headline copy variations in Malayalam & English, and live placement photos (e.g. Salman in front of the billboard).

---

## 2. Header & Navigation Menu Structure

### Fixed Floating Header (`<header class="nav-bar">`)
- **Left**: `MUHAMMED SALMAN` (Wordmark / Brand Identifier — clicking scrolls to top / Home).
- **Center**: Status badge: `● AVAILABLE FOR Q4/2026` or `CREATIVE STRATEGIST`.
- **Right Menu Items**:
  1. `WORKS`
  2. `ABOUT`
  3. `PROCESS`
  4. `PROOF`
  5. `CONTACT` (High-contrast pill CTA button: `"LET'S TALK"`)

### Mobile / Hamburger Navigation Drawer
- Fullscreen minimalist dark overlay with large typography links:
  - `01. WORKS`
  - `02. ABOUT & SKILLS`
  - `03. 5-STEP PROCESS`
  - `04. VIRAL METRICS`
  - `05. FULL ARCHIVE`
  - `06. GET IN TOUCH`
- Bottom bar inside menu: direct email (`salmanzain1019@gmail.com`) and phone (`+91 9778354373`).

---

## 3. Link & Button Interaction Map

### On the Home Page (`/`):
| Element / Button | Visual Style | Destination / Behavior |
| :--- | :--- | :--- |
| **Brand Logo (`MUHAMMED SALMAN`)** | Bold display text | Smooth scroll to `#hero` (Top of page). |
| **Nav Link: `WORKS`** | Minimal text link | Smooth scroll to `#works` (Featured Works section). |
| **Nav Link: `ABOUT`** | Minimal text link | Smooth scroll to `#about` (Manifesto & Bio). |
| **Nav Link: `PROCESS`** | Minimal text link | Smooth scroll to `#process` (5-step Framework). |
| **Nav Link: `PROOF`** | Minimal text link | Smooth scroll to `#proof` (Metrics & Analytics). |
| **Nav CTA: `LET'S TALK`** | Light pill badge button | Smooth scroll to `#contact` (Footer contact form/details). |
| **Hero Sound/Mute Toggle** | Circular icon (speaker) | Toggles mute state of `home_video.mp4`. |
| **Hero Scroll Indicator** | Text `"SCROLL TO EXPLORE"` | Smooth scroll to `#about`. |
| **About: `"View Full Story"`** | Text link + arrow | Smooth expands detailed bio & background. |
| **Featured Work Card Click** | Clickable image card | Opens Case Study Lightbox / Detail Modal. |
| **`"Explore All 50+ Works"` Button** | Ghost button with border | Links to `/works.html` (Full Campaign Archive). |
| **Proof Stat Card (`2.25M Views`)** | Interactive stat card | Opens screenshot viewer modal showing `scrnshot_img_3.png` / `4`. |
| **Proof Stat Card (`Shorts Ranking`)** | Interactive stat card | Opens screenshot viewer modal showing `scrnshot_img_5.png`. |
| **Process Steps (1–5)** | Accordion / tab pills | Switches active phase description without jumping page. |
| **Client Logo Item** | Grayscale icon | Hover shows tooltip with client sector; click filters work by that brand. |
| **Contact: Email Link** | Large editorial link | `mailto:salmanzain1019@gmail.com` |
| **Contact: Phone Link** | Large editorial link | `tel:+919778354373` |
| **Contact: WhatsApp Button** | Minimal button | Direct WhatsApp chat link: `https://wa.me/919778354373` |
| **Back to Top Button** | Discrete floating button | Smooth scroll back to `#hero`. |

---

### On the Works Archive Page (`/works.html`):
| Element / Button | Destination / Behavior |
| :--- | :--- |
| **`"← Back to Home"`** | Navigates back to `/index.html`. |
| **Filter Tabs (`All`, `Billboards`, `Social`, `Print`)**| Client-side instant filter of grid cards without reload. |
| **Thumbnail Card** | Opens full-resolution lightbox viewer with zoom & pan. |

---

## 4. Questions & Items for Clarification (Under Review)

1. **Multi-Page vs. Single-Page (SPA)**:
   - Does your vision lean towards a **Single-Page experience with full-screen sections** (where the full 50+ works archive loads in an expandable/filterable grid right on the main page), or a **Strict Multi-Page site** (`index.html` + `works.html`)?
2. **Contact Interaction**:
   - Would you like a functional interactive **Contact Form** (Name, Email, Project Budget/Type, Message) that submits directly to your email, or strictly direct click-to-action buttons (`mailto:`, `tel:`, WhatsApp)?
3. **Social Links**:
   - In addition to email and phone, which public social profiles should be linked in the footer/navigation? (e.g., your personal Instagram, LinkedIn, Behance, or X/Twitter profile)?
