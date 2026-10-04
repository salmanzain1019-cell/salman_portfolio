# Content Model & Markdown Schemas: Muhammed Salman Portfolio (2026 Edition)

This document defines how all portfolio content is structured into modular Markdown files with frontmatter fields. This enables clean separation of content from presentation, easy future updates, and structured rendering.

---

## Content Organization Tree

```text
content/
├── profile/
│   └── about.md                  # Core bio, manifesto, persona, and credentials
├── works/
│   ├── al-salama-billboard.md    # Flagship featured case study
│   ├── valluvanad-roofings.md    # Brand campaign case study
│   ├── white-mart.md             # Retail ad campaign
│   └── work-[01..59].md          # Full archive entries
├── clients/
│   ├── amend-dental.md
│   ├── ica.md
│   ├── med7.md
│   └── [client-slug].md          # Client brand entries
├── proof/
│   ├── viral-reels.md            # 2.25M views analytics breakdown
│   └── shorts-ranking.md         # YouTube short performance
└── process/
    ├── 01-discovery.md
    ├── 02-research.md
    ├── 03-ideation.md
    ├── 04-writing-direction.md
    └── 05-delivery.md
```

---

## 1. Type: `profile` (About, Manifesto & Personal Brand)

Stores personal narrative, positioning statements, core skills, and contact data.

### Fields
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | String | **Required** | Full name (`"Muhammed Salman"`) |
| `display_title` | String | **Required** | Professional role (`"Creative Strategist & Copywriter"`) |
| `edition` | String | **Required** | Current portfolio edition (`"2026 EDITION"`) |
| `tagline_primary` | String | **Required** | Main philosophy (`"CREATIVE BY NATURE. STRATEGIC BY MIND."`) |
| `tagline_secondary`| String | Optional | Secondary witty hook (`"Creatives? Yeah, that's his thing."`) |
| `hero_video` | String | **Required** | Relative path to turnaround video (`"assets/video/home_video.mp4"`) |
| `portrait_main` | String | **Required** | Primary editorial portrait (`"assets/my_images/myimg_2.png"`) |
| `portrait_gallery`| List of Strings | Optional | Additional photos (`["assets/my_images/myimg_1.png", ...]`) |
| `skills` | List of Strings | **Required** | 7 core skills (`["Creative Copywriting", "Brand Strategy", ...]`) |
| `email` | String | **Required** | Direct contact email |
| `phone` | String | **Required** | Direct telephone/WhatsApp number |
| `website` | String | Optional | Personal domain (`"muhammedsalman.com"`) |

### Example File Name & Content
**File**: `content/profile/about.md`
```markdown
---
name: "Muhammed Salman"
display_title: "Creative Strategist & Copywriter"
edition: "2026 EDITION"
tagline_primary: "CREATIVE BY NATURE. STRATEGIC BY MIND."
tagline_secondary: "Creatives? Yeah, that's his thing."
hero_video: "assets/video/home_video.mp4"
portrait_main: "assets/my_images/myimg_2.png"
portrait_gallery:
  - "assets/my_images/myimg_1.png"
  - "assets/my_images/myimg_3.png"
  - "assets/my_images/my_img_4.png"
  - "assets/my_images/my_img_5.png"
skills:
  - "Creative Copy Writing"
  - "Brand Strategy"
  - "Content Creation"
  - "Script Writing"
  - "Social Media Management"
  - "Content Strategy"
  - "Video Presentation"
email: "salmanzain1019@gmail.com"
phone: "+91 9778354373"
website: "muhammedsalman.com"
---

I'm a Digital marketer and self-taught Creative Strategist working at the intersection of ideas, design, and business objectives. I help brands move from noise to meaning by building clear narratives, strong visual identities, and communication strategies that actually convert.
```

---

## 2. Type: `works` (Campaigns, Billboards & Ad Creatives)

Represents each creative piece or campaign in `assets/works/`.

### Fields
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | String | **Required** | Project / headline title |
| `client` | String | **Required** | Client name (e.g. `"Al Salama Institute"`, `"Valluvanad Roofings"`) |
| `category` | String | **Required** | Category: `"billboard"`, `"print"`, `"social"`, `"branding"` |
| `featured` | Boolean | **Required** | `true` for the 4–6 spotlight home cards, `false` for archive |
| `order` | Integer | Optional | Display priority order (1, 2, 3...) |
| `image` | String | **Required** | Relative path to work file (e.g. `"assets/works/work1.png"`) |
| `secondary_images`| List of Strings | Optional | Additional photos (e.g. billboard site photo vs artwork) |
| `language` | String | Optional | Primary copy language (`"Malayalam"`, `"English"`, `"Bilingual"`) |
| `objective` | String | Optional | One-line strategy goal |
| `headline_copy` | String | Optional | Key copy written for this campaign |

### Example File Name & Content
**File**: `content/works/al-salama-billboard.md`
```markdown
---
title: "Vision-നെ ഒരു Profession ആക്കാം (BSc Optometry)"
client: "Al Salama Institute of Advanced Studies"
category: "billboard"
featured: true
order: 1
image: "assets/works/work1.png"
secondary_images:
  - "assets/works/work2.png"
language: "Bilingual (Malayalam / English)"
objective: "Drive student admissions by reframing optometry as a high-prestige medical profession."
headline_copy: "Vision-നെ ഒരു Profession ആക്കാം — BSc Optometry പഠിക്കൂ..."
---

Large-scale outdoor billboard campaign deployed in Perinthalmanna. Strategic copywriting focused on career aspiration rather than standard academic course listing.
```

---

## 3. Type: `clients` (Client Brands & Collaborators)

Represents each client brand in the logo marquee and portfolio filtering.

### Fields
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | String | **Required** | Official brand name (e.g. `"Amend Dental Centre"`, `"med7"`) |
| `slug` | String | **Required** | Identifier (`"amend-dental"`, `"med7"`) |
| `industry` | String | **Required** | Sector (e.g. `"Healthcare"`, `"Education"`, `"F&B"`, `"Retail"`) |
| `logo` | String | **Required** | Relative path (e.g. `"assets/logos/logo_1.png"`) |
| `is_white_logo` | Boolean | Optional | Set `true` for pure white logos (e.g. `logo_4.png` for **med7**) |
| `order` | Integer | Optional | Sorting position in marquee |

### Example File Name & Content
**File**: `content/clients/med7.md`
```markdown
---
name: "med7"
slug: "med7"
industry: "Healthcare & Pharmaceuticals"
logo: "assets/logos/logo_4.png"
is_white_logo: true
order: 4
---
```

---

## 4. Type: `proof` (Analytics, Viral Reach & Evidence)

Represents hard metrics and verifiable social proof from `assets/scrnsht_oc/`.

### Fields
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | String | **Required** | Metric label (e.g. `"2.25M+ Viral Reel Views"`) |
| `stat_number` | String | **Required** | Display number (`"2,252,429"`, `"644K"`, `"99.6%"`) |
| `stat_suffix` | String | Optional | Label suffix (`"Views"`, `"Shares"`, `"Non-followers"`) |
| `platform` | String | **Required** | `"Instagram"`, `"YouTube"`, `"Omnichannel"` |
| `screenshot` | String | **Required** | Proof image (e.g. `"assets/scrnsht_oc/scrnshot_img_3.png"`) |
| `highlight` | String | Optional | Key insight (e.g. `"196 days total watch time"`) |

### Example File Name & Content
**File**: `content/proof/viral-reels.md`
```markdown
---
title: "Organic Viral Distribution"
stat_number: "2,252,429"
stat_suffix: "Views"
platform: "Instagram"
screenshot: "assets/scrnsht_oc/scrnshot_img_3.png"
highlight: "644K Shares • 111K Likes • 99.6% Non-Follower Reach"
---

Detailed breakdown of viral distribution achieved through scriptwriting and retention-driven video presentation.
```

---

## 5. Type: `process` (5-Stage Creative Framework)

Defines each step of Salman’s proprietary creative process.

### Fields
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `step_number` | Integer | **Required** | `1`, `2`, `3`, `4`, `5` |
| `title` | String | **Required** | Phase name (`"Discovery"`, `"Research"`, etc.) |
| `summary` | String | **Required** | 1-line headline definition |
| `deliverables` | List of Strings | Optional | Tangible outputs produced in this step |

### Example File Name & Content
**File**: `content/process/01-discovery.md`
```markdown
---
step_number: 1
title: "Discovery"
summary: "Understanding the brand, audience mindset, and communication goals."
deliverables:
  - "Brand positioning audit"
  - "Audience persona definition"
  - "Core objective mapping"
---

Diving deep into who the client is, what their brand stands for, and uncovering the exact commercial hurdle preventing customer action.
```

---

## 6. Assumptions & Questions

### Assumptions Made
1. **Lightweight Markdown / Frontmatter**: Standard YAML frontmatter format supported by static site generators, Vite plugins, or custom lightweight JS parsers.
2. **Work Categorization**: Works are grouped into 4 intuitive categories (`billboard`, `print`, `social`, `branding`) to enable smooth filtering.
3. **Featured Works Selection**: 4–6 flagship projects will have `featured: true` to anchor the homepage spotlight, while all remaining items render in the archive grid.

### Questions for Clarification
1. **Work Archive Granularity**: Would you like an individual `.md` file for every single one of the 52+ works in `assets/works/`, or a single structured `works.json` / `works.md` catalog table for bulk archive entries?
2. **Certificates & Education**: In the prompt you mentioned `certificates`—do you have formal marketing/advertising certificates or degrees you want included in a dedicated `certificates/` collection, or should this remain inside `about.md`?
