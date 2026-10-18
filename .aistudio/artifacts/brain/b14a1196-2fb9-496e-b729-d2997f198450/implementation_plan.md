# Curo India — Architectural 3D CSS Website Redesign

A complete, high-fidelity redesign and modernization of the official Curo India group website (https://www.curoindia.com/). Recreates all original content, portfolio developments, specifications, image galleries, corporate milestones, leadership profiles, careers, and contact infrastructure within a luxury architectural visual system utilizing advanced 3D CSS transformations, mouse-tracking perspective depth, and an interactive Masterplan and Floorplan Explorer.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during interactive clarification and govern the implementation:

- **Confirmed Aesthetic Direction**: Deep Architectural Luxury with obsidian surfaces (`#0B0D11`), charcoal depth layers (`#14171F`), warm metallic gold accents (`#C5A869`), and frosted glassmorphism overlays.
- **Confirmed 3D Motion System**: Interactive Mouse Tilt and Parallax Depth using CSS `perspective(1000px)`, `transform-style: preserve-3d`, dynamic `rotateX`/`rotateY` coordinate transforms, and layered Z-axis translation (`translateZ`).
- **Confirmed Highlight Feature**: Interactive 3D Masterplan & Floorplan Explorer with unit level breakdown (1 BHK, 3 BHK, 4 BHK, 5 BHK luxury suites, penthouses, high-street retail zones, multiplex screens) with live unit area, layout specs, and instant site visit booking.
- **Content Preservation Guarantee**: 100% of Curo India's residential projects (*Curo One New Chandigarh, Curo Homes Barnala, Curo Dynamic Homes 1 & 2, Curo Queensridge*), commercial landmarks (*Curo High Street Jalandhar, Curo Square Ludhiana, Soho Suites, Curo Tech Gurgaon*), and entertainment hubs (*Curo Cinemas*) are fully preserved with accurate architectural specifications, amenities, and galleries.

---

## 1. Overview & Core Concept

### What It Does
The platform presents the Curo Group’s 35+ year legacy across residential group housing, European-style high street retail, grade-A commercial complexes, and modern multiplex entertainment. Visitors can explore projects through a multi-dimensional lens: filtering by category/location, inspecting high-resolution image galleries, manipulating floorplans, calculating mortgages, scheduling on-site VIP walkthroughs, reading executive leadership statements, applying for career openings, and submitting validated inquiries.

### Target Audience & Persona
- **Luxury Homebuyers & Investors**: HNIs and families evaluating residences in New Chandigarh and Punjab seeking RERA-verified specifications, floor plans, and amenities.
- **Retail Brands & Anchor Tenants**: Domestic and global retail/F&B chains seeking high-footfall flagship spaces at Curo High Street (Jalandhar) and Curo One Mall.
- **Corporate Partners & Job Seekers**: Professionals exploring corporate culture, ESG initiatives, leadership pedigree, and career opportunities at Curo India.

### Key Value
Transforms a traditional static corporate real estate website into an immersive, museum-grade architectural experience with cinematic 3D depth, responsive performance, zero-slop layout discipline, and verified real-world specs.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Curated Portfolio Discovery**:
   - Visitors land on the cinematic 3D Hero with panoramic perspective tilt and quick navigation shortcuts.
   - Dynamic tabbed switcher to filter by Sector: **All**, **Commercial & Retail**, **Residential**, **Multiplex & Leisure**.
   - Hovering over any project card triggers a 3D elevation tilt (`rotateX`, `rotateY`, shadow cast) revealing key metrics (RERA approval, area, handover status, city).
2. **Deep-Dive Project Showcase & Modal View**:
   - Clicking any project opens the dedicated Project Detail experience or deep-view overlay with full architectural specs, multi-image gallery slider with full-screen lightbox, comprehensive amenities checklist, location highlights, and direct inquiry capture.
3. **Interactive 3D Masterplan & Floorplan Explorer**:
   - Switch between master site layouts and individual residential/retail floorplans.
   - Interactive hot-spots indicating clubhouse, towers, green open spaces, water bodies, and retail promenades.
   - Configuration switcher (1 BHK Studio, 3 BHK Luxury, 4 BHK Premium, 5 BHK Penthouse, High Street Retail Anchor, Food Court Pod) showing carpet area, balcony area, facing direction, and downloadable floor brochure.
4. **Corporate Heritage & Leadership**:
   - About Us page with Chairman & MD Pawan Garg's message, 1987-to-present timeline milestones, core values, and group diversification (Automobiles, Real Estate, Power, Infrastructure).
5. **Careers Portal**:
   - Explore "Life at Curo", departmental divisions (Engineering, Architecture, Sales & CRM, Leasing, Finance), open requisitions, and interactive resume submission modal with instant confirmation.
6. **Omnipresent Contact & VIP Site Visit Scheduler**:
   - Multi-channel corporate office directory (Delhi HQ at Green Park Extension, New Chandigarh site office, Jalandhar Curo High Street site office).
   - Form validation with name, email, phone (+91 format), project preference, and preferred appointment time.

### Visual Identity & Theme
- **Color Palette (60-30-10 Rule)**:
  - `60% Neutral Canvas`: `#0A0C10` (Dark obsidian baseline) and `#11141B` (structural background)
  - `30% Elevated Surfaces`: `#181C26` (Floating glass cards with `rgba(255,255,255,0.06)` hairline borders and soft inner lighting)
  - `10% Accent Radiance`: `#C5A869` (Metallic warm champagne gold) and `#E6CA85` for primary CTA buttons, focus rings, and active state highlights.
- **Typography**:
  - *Display / Headings*: `Playfair Display` or `Outfit` for refined architectural majesty, balanced with tight tracking (`tracking-tight`) and balanced line breaks (`text-wrap: balance`).
  - *Body Prose*: `Plus Jakarta Sans` for clarity and clean reading.
  - *Data & Specs*: `font-mono tabular-nums` for precise square footage, tower counts, unit sizes, and dates.
- **Top Bar Contract**:
  - Follows strict 3-zone architecture:
    - *Zone 1*: Clean brand wordmark `CURO` with subtle serif sub-mark `INDIA`.
    - *Zone 2*: 5 single-line navigation links (`Residential`, `Commercial`, `Masterplan`, `About Us`, `Careers`).
    - *Zone 3*: 1 primary action button: `Schedule Site Visit`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: CSS 3D Transforms vs. Heavy 3D Canvas WebGL**
  - *Chosen Approach*: Pure hardware-accelerated CSS3 3D transforms (`perspective`, `preserve-3d`, `rotateX/Y`, `translateZ`) coupled with React pointer event hooks.
  - *Why*: Instant sub-second initial load, zero WebGL context overhead, 100% SEO accessibility, and flawless touch/mobile fallbacks without battery drain.
- **Decision 2: Comprehensive Multi-Page Experience via Seamless Tab/Router State**
  - *Chosen Approach*: Instantaneous single-page view routing with smooth transitions preserving history and URL hash navigation (`#projects`, `#masterplan`, `#about`, `#careers`, `#contact`, `#project/:id`).
  - *Why*: Eliminates full page reloads, ensures instantaneous gallery filtering and modal transitions, while retaining deep links for all pages.
- **Decision 3: Complete Project Preservation with Verified Field Data**
  - *Chosen Approach*: Include all authentic Curo projects (*Curo One, Curo High Street, Curo Homes Barnala, Curo Dynamic Homes 1 & 2, Curo Square, Soho Suites, Curo Tech Gurgaon, Curo Cinemas*) with actual addresses, square footage, amenities, and corporate records.
  - *Why*: Strict compliance with the user prompt requirement to preserve 100% of website content without substituting AI placeholders or omitting projects.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                          CURO INDIA WEB APP                            │
└────────────────────────────────────────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────────────┐                ┌──────────────────────────────┐
│  Top Navigation (3 Zones)    │                │  Global Inquiry Modal &      │
│  [Logo | Nav Links | CTA]    │                │  Site Visit VIP Scheduler    │
└──────────────────────────────┘                └──────────────────────────────┘
    │
    ├────────► [Home View] ─────────────────────────────────────────┐
    │          ├── 3D Architectural Hero & Perspective Stage        │
    │          ├── Quick Facts & 35-Year Group Metrics Strip        │
    │          ├── Featured Developments Showpiece                  │
    │          ├── Interactive Sector Filter (Commercial/Resi/Mall) │
    │          └── Testimonials & Trust Validation                  │
    │                                                               │
    ├────────► [Projects Portfolio View] ───────────────────────────┤
    │          ├── Category Filters (All, Residential, Retail, Mall)│
    │          ├── 3D Perspective Tilt Project Cards                │
    │          └── Quick Specification Drawer                       │
    │                                                               │
    ├────────► [Project Detail View & Modal] ───────────────────────┤
    │          ├── Overview, Location Map & RERA ID                 │
    │          ├── Interactive Media Gallery & Lightbox             │
    │          ├── Detailed Architectural Specifications            │
    │          └── Dedicated Project Lead Capture Form              │
    │                                                               │
    ├────────► [3D Masterplan & Floorplan Explorer] ────────────────┤
    │          ├── Tower & Site Sector Interactive Map              │
    │          ├── Unit Switcher (Studio, 3BHK, 4BHK, 5BHK, Retail) │
    │          ├── Floorplan Specs, Carpet Area & Orientation       │
    │          └── EMI & Financial Estimate Calculator              │
    │                                                               │
    ├────────► [About Us View] ─────────────────────────────────────┤
    │          ├── Chairman's Vision (Pawan Garg)                   │
    │          ├── Historical Milestones (1987 to Present)          │
    │          └── Core Pillars: Integrity, Quality & Innovation    │
    │                                                               │
    ├────────► [Careers View] ──────────────────────────────────────┤
    │          ├── Life at Curo Culture Showcase                    │
    │          ├── Active Job Openings List                         │
    │          └── Interactive Resume & Application Submission      │
    │                                                               │
    └────────► [Contact Us View & Footer] ──────────────────────────┘
               ├── Delhi HQ, Chandigarh & Jalandhar Site Contacts
               ├── Direct Dial, Email, & Live Inquiry Form
               └── Legal Notices, RERA Compliance & Quick Links
```

### Data Model & State Entities
- **Project Entity**: `id`, `name`, `sector` (*residential | commercial | retail | multiplex*), `tagline`, `location`, `city`, `status` (*ready_to_move | under_construction | upcoming*), `reraId`, `areaCovered`, `highlights`, `amenities`, `specifications` (flooring, walls, parking, elevators, safety), `galleryImages`, `floorplans` array.
- **Floorplan Entity**: `id`, `name`, `type` (*1BHK | 3BHK | 4BHK | 5BHK | Retail*), `superArea`, `carpetArea`, `balconyArea`, `bedrooms`, `bathrooms`, `facing`, `description`, `keyFeatures`.
- **Career Entity**: `id`, `title`, `department`, `location`, `type` (*Full-time*), `experience`, `description`, `requirements`.
- **Inquiry State**: `fullName`, `email`, `phone`, `projectInterest`, `message`, `visitDate`, `status` (*idle | submitting | success*).

---

## Next Steps Upon Plan Approval

1. Build data registry (`curoData.ts`) containing comprehensive authentic records for all Curo India projects, amenities, floorplans, leadership, careers, and offices.
2. Construct reusable 3D CSS components (`PerspectiveTiltCard.tsx`, `Hero3DStage.tsx`, `GlassPanel.tsx`).
3. Build complete page views:
   - `Header.tsx` (sticky luxury glass navigation)
   - `HeroSection.tsx` (layered 3D perspective with depth)
   - `ProjectsSection.tsx` & `ProjectDetailModal.tsx` (residential, commercial, retail with full galleries)
   - `MasterplanExplorer.tsx` (interactive site layout, unit selector, specs, mortgage calculator)
   - `AboutSection.tsx` (leadership vision, heritage timeline)
   - `CareersSection.tsx` (culture, job openings, application modal)
   - `ContactSection.tsx` & `Footer.tsx` (multi-city offices, validated inquiries)
4. Verify typography, responsive breakpoints, smooth animations, zero broken links or stubs, and run compilation verification.
