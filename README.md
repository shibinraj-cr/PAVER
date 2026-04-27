# Paver Chemco Website — Master Codebase
> Built for Google Antigravity · Next.js 14 · Tailwind CSS · TypeScript

---

## 🚀 Quick Start (in Antigravity)

Open this folder in Antigravity, then run:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## 📁 Project Structure

```
paverchemco/
├── src/
│   ├── app/                     ← Next.js App Router pages
│   │   ├── page.tsx             ← Home page
│   │   ├── layout.tsx           ← Root layout (Navbar + Footer)
│   │   ├── globals.css          ← Tailwind + brand CSS
│   │   ├── sitemap.ts           ← Auto-generated sitemap.xml
│   │   ├── robots.ts            ← robots.txt
│   │   ├── products/
│   │   │   ├── page.tsx         ← Products listing
│   │   │   └── [slug]/page.tsx  ← Individual product page
│   │   ├── blog/
│   │   │   ├── page.tsx         ← Blog listing
│   │   │   └── [slug]/page.tsx  ← Individual blog post
│   │   ├── faq/page.tsx         ← FAQ page (with FAQPage schema)
│   │   ├── tools/page.tsx       ← Coverage Calculator + Product Selector
│   │   ├── contact/page.tsx     ← Contact form + dealer info
│   │   ├── solutions/           ← Add solutions hub here
│   │   └── about/               ← Add about page here
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Sticky navbar with dropdown
│   │   │   └── Footer.tsx       ← Full footer
│   │   └── ui/
│   │       └── SchemaOrg.tsx    ← JSON-LD schema injector
│   └── data/                    ← ⭐ CMS DATA FILES — EDIT THESE
│       ├── siteConfig.ts        ← Site-wide settings, contact info, SEO
│       ├── products.ts          ← All 6 products with full content
│       ├── blog.ts              ← Blog posts
│       └── faq.ts               ← FAQ content
├── public/
│   ├── images/                  ← Add AI-generated images here
│   │   ├── products/            ← product images (see naming below)
│   │   └── blog/                ← blog header images
│   └── tds/                     ← Place TDS PDF files here
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✏️ Content Management (No CMS Needed)

All content is managed through TypeScript data files in `src/data/`. Just edit them and the site updates automatically.

### Update site info, phone, email, address
```
src/data/siteConfig.ts
```
Edit `siteConfig` object — phone, email, address, social links, SEO defaults.

### Add or edit a product
```
src/data/products.ts
```
Each product is an object in the `products` array. Copy an existing one and update:
- `slug` — URL path (e.g. `my-new-product` → `/products/my-new-product`)
- `name`, `code`, `tagline`, `description`
- `features[]` — bullet list of advantages
- `specs[]` — technical data table rows
- `applicationSteps[]` — numbered application guide
- `faqs[]` — product-specific FAQs (auto-added to FAQPage schema)
- `seo.title`, `seo.description`, `seo.keywords` — per-product SEO

### Add a blog post
```
src/data/blog.ts
```
Add a new object to `blogPosts[]`. The `content` field accepts HTML string. Key fields:
- `slug` — URL (e.g. `my-article` → `/blog/my-article`)
- `title`, `excerpt`, `content` (HTML)
- `date` (ISO format: `2025-07-01`)
- `category`, `tags[]`
- `featured: true` — shows on home page
- `seo.title`, `seo.description`, `seo.keywords`

### Add FAQ questions
```
src/data/faq.ts
```
Add questions to any `faqData[]` category, or create a new category. All FAQs are automatically included in the FAQPage JSON-LD schema for Google AI Overviews.

---

## 🖼️ AI Image Generation Guide

Replace placeholder images with AI-generated visuals. Recommended tool: **Midjourney** or **DALL-E**.

### Image paths expected by the code:

| File | Prompt suggestion |
|------|------------------|
| `/public/images/hero-tiles-bg.jpg` | Beautiful Kerala home interior with white vitrified floor tiles, natural light, modern design |
| `/public/images/products/c1t-bag.jpg` | Yellow construction chemical bag, grey powder, product photography, white background |
| `/public/images/products/c1t-hero.jpg` | Mason applying tile adhesive to bathroom wall, Indian construction context, professional |
| `/public/images/products/c1te-bag.jpg` | Yellow construction bag exterior tile adhesive branding |
| `/public/images/products/block-mortar-bag.jpg` | 40kg yellow bag block jointing mortar AAC blocks |
| `/public/images/products/tile-grout-bag.jpg` | Tile grout powder bag, multiple colours |
| `/public/images/products/epoxy-grout-kit.jpg` | 3-component epoxy grout kit parts A B C |
| `/public/images/products/wp-membrane-bag.jpg` | Waterproofing membrane grey bag 20kg |
| `/public/images/blog/*.jpg` | Relevant blog topic illustration |

### Logo
Replace `/public/images/logo.svg` or `/public/images/logo.png` with the official Paver Chemco logo.

---

## 🎨 Brand Customization

Brand colours and fonts are in `tailwind.config.ts`:
```ts
colors: {
  brand: {
    red: '#C0191A',       // primary red
    'red-dark': '#9A1212', // hover state
    gold: '#E8A020',      // accent gold
    dark: '#1A1A1A',      // dark background
    gray: '#F5F4F0',      // light background
  }
}
```

Fonts: **Barlow Condensed** (headings) + **Barlow** (body) — loaded from Google Fonts.

---

## 📊 SEO Strategy: Kerala & Tamil Nadu Focus

### Keyword targeting built into every page:
- **Products pages**: Each product has `seo.keywords[]` targeting city + product type
  - e.g. "tile adhesive Kerala", "tile adhesive Kochi", "C1T tile adhesive Tamil Nadu"
- **Blog posts**: Long-form content targeting informational queries
  - e.g. "how to waterproof terrace before Kerala monsoon"
- **FAQ page**: FAQPage JSON-LD schema → eligible for Google AI Overviews
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **LocalBusiness schema**: Home page targets Kerala + Tamil Nadu area served

### Structured data included:
- `Organization` schema (home page)
- `LocalBusiness` schema with areaServed Kerala + Tamil Nadu
- `Product` schema (each product page)
- `HowTo` schema (application steps on product pages)
- `FAQPage` schema (product pages + FAQ page)
- `Article` schema (blog posts)
- `BreadcrumbList` via navigation

---

## 🔌 Connecting the Contact Form

The contact form in `/src/app/contact/page.tsx` posts to `/api/contact`.

**In Antigravity, ask the agent:**
> "Create a Next.js API route at /api/contact that sends the form data via email using Nodemailer / Resend / EmailJS"

Or use a form service like **Formspree** — just change the form `action` attribute.

---

## 📦 Deployment

### Vercel (recommended):
```bash
vercel deploy
```
Add environment variables if needed for the contact form API.

### Self-hosted:
```bash
npm run build
npm start
```

---

## 🛠️ Adding Pages in Antigravity

Ask the agent:
- "Add a solutions page at /solutions showing product recommendations by application type"
- "Add an about page with company history, certifications, and team"  
- "Add a dealer locator page with a Google Maps embed for Kerala and Tamil Nadu"
- "Add a sitemap page visible to users at /sitemap"
- "Create an API contact form handler using Resend"

---

## 📝 Extending the CMS

To add a new content type (e.g. Projects/Case Studies):
1. Create `src/data/projects.ts` following the same pattern as `products.ts`
2. Create `src/app/projects/page.tsx` for listing
3. Create `src/app/projects/[slug]/page.tsx` for individual pages
4. Add link to `src/data/siteConfig.ts` → `navLinks`

---

*Paver Chemco · Furner RefraCeram Private Limited · business@furner.in · +91 9994491827*
