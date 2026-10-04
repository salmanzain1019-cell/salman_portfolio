# Design System & Specification: Muhammed Salman Portfolio (2026 Edition)
**Design Direction**: FWD Creative Agency Style (Minimalist Editorial, Cinematic Video Hero, Monochrome Foundation)

---

## 1. Design Philosophy & Aesthetic Core
- **Identity**: Muhammed Salman — Creative Strategist & Copywriter.
- **Atmosphere**: Moody, confident, high-contrast monochrome with subtle tactile accents.
- **Vibe**: High-fashion studio aesthetic blended with bold, witty Gen-Z agency personality (*"Creative by nature. Strategic by mind"*, *"Creatives? Yeah, that's his thing"*).

---

## 2. Color Palette & Surface Tokens

### Dark Mode (Primary & Default)
```css
:root {
  /* Surfaces & Backgrounds */
  --bg-primary: #0A0A0B;          /* Deepest cinematic black */
  --bg-secondary: #121214;        /* Elevated card background */
  --bg-tertiary: #1A1A1E;         /* Hover state / subtle highlight surface */
  --bg-glass: rgba(18, 18, 20, 0.75); /* Frosted glass overlay (with blur 20px) */

  /* Text & Content */
  --text-primary: #F4F4F6;        /* Crisp optical white for bold titles */
  --text-secondary: #A0A0A8;      /* Readable neutral grey for body copy */
  --text-muted: #5E5E68;          /* Low-emphasis metadata, subtitles, dates */

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08); /* 1px crisp razor border */
  --border-focus: rgba(255, 255, 255, 0.24);

  /* Strategic Accents (Minimalist & Deliberate) */
  --accent-glow: rgba(255, 255, 255, 0.12);
  --accent-badge: #E2E2E6;        /* Light contrast tags / pill badges */
  --badge-text: #0A0A0B;
}
```

---

## 3. Typography Hierarchy

### Font Families
- **Display / Headings**: `'Syne'`, sans-serif (Bold, wide, high-character agency display) or `'Cabinet Grotesk'`.
- **Body / Metadata**: `'Plus Jakarta Sans'`, sans-serif (Precision geometric readability).
- **Monospace Accents**: `'JetBrains Mono'`, monospace (For section numbers, tags, 2026 edition metadata).

### Scale & Rules
| Role | Font Size (Desktop) | Weight | Line Height | Tracking | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `clamp(3.5rem, 8vw, 7.5rem)` | 800 / 900 | 0.95 | `-0.04em` | Uppercase |
| **Section Header** | `clamp(2.2rem, 4.5vw, 4rem)` | 700 / 800 | 1.05 | `-0.03em` | Uppercase |
| **Card / Project Title**| `1.5rem` – `1.75rem` | 600 / 700 | 1.2 | `-0.02em` | Normal / Title |
| **Lead Subhead** | `1.125rem` – `1.25rem` | 400 / 500 | 1.6 | normal | Normal |
| **Body Copy** | `1rem` (16px) | 400 | 1.65 | normal | Normal |
| **Tags / Micro Label** | `0.75rem` (12px) | 600 | 1.2 | `+0.08em` | Uppercase |

---

## 4. Spacing, Grid & Layout Rules

### Spacing Tokens
- `--space-xs`: `0.5rem` (8px)
- `--space-sm`: `1rem` (16px)
- `--space-md`: `1.5rem` (24px)
- `--space-lg`: `3rem` (48px)
- `--space-xl`: `5rem` (80px)
- `--space-2xl`: `8rem` (128px) — Section vertical padding

### Container & Layout Rules
- **Max Width**: `1400px` with responsive horizontal padding (`clamp(1.5rem, 5vw, 4rem)`).
- **Asymmetry & Whitespace**: Generous negative space between sections to let images and video breathe.
- **Borders**: Clean `1px solid var(--border-subtle)` division lines across sections and cards. No heavy drop-shadows.

---

## 5. Homepage Video Hero Behaviour

1. **Asset**: [`assets/video/home_video.mp4`](file:///c:/Users/user/OneDrive/Desktop/portfolio/assets/video/home_video.mp4) (6 seconds, studio turnaround loop).
2. **Autoplay & Loop**:
   - `autoplay`, `muted`, `loop`, `playsinline` attributes enabled.
   - Fallback poster frame generated from `myimg_2.png` or `my_img_4.png` while loading.
3. **Visual Treatment**:
   - Subtle dark gradient overlay (`radial-gradient` + linear bottom fade to `#0A0A0B`) ensuring maximum legibility of overlay typography.
   - Does not obscure Salman's head or gaze when he turns to the camera.
4. **Hero Controls**:
   - Discrete, floating sound toggle or playback indicator in bottom-right corner.
   - Floating badge: `"2026 EDITION • CREATIVE STRATEGIST"`.

---

## 6. Component Guidelines

### A. Featured Works & Case Studies
- Showcase the top 4–6 standout projects (e.g. Al Salama Billboard, Valluvanad Roofings, etc.) with large editorial preview cards, client name, category tags, and strategy takeaways.
- Complete archive accessible in an interactive, responsive filterable grid.

### B. "Numbers Don't Lie" (Proof Section)
- Stat cards showcasing verified viral reach:
  - **2,252,429+** Views
  - **644K+** Shares
  - **111K+** Likes
  - **99.6%** Non-Follower Viral Discovery
- Modal / drawer preview for analytics screenshots (`assets/scrnsht_oc/`).

### C. Client Logo Bar
- Ticker / grid containing the 9 client logos (including **med7**, Amend Dental, ICA, Ayurve, Bataatas, Momspure, KiddiKind, Kenme, Usthad Online).
- Styled in crisp monochrome with subtle opacity (`0.5`), transitioning to original clarity/hover effect on cursor hover.

### D. 5-Stage Creative Framework
- Interactive horizontal/vertical step layout:
  1. Discovery
  2. Research
  3. Ideation
  4. Writing & Direction
  5. Delivery

---

## 7. Never-Use List (Strict Prohibitions)

- ❌ **No generic colorful gradients** (e.g. purple/pink neon glow, rainbow gradients).
- ❌ **No heavy, cartoonish drop shadows** (e.g. `box-shadow: 0 20px 50px rgba(0,0,0,0.5)` on flat buttons).
- ❌ **No generic stock UI icons** or default browser buttons.
- ❌ **No autoplaying audio with sound unmuted**.
- ❌ **No cluttered multi-column layouts** that cram the 50+ works together without hierarchy.
- ❌ **No external YouTube/Vimeo embed players** (maintain clean internal media experience).
- ❌ **No generic boilerplate copy** — always use Salman's exact voice, taglines, and messaging.
