---
name: portfolio-website
description: Build modern, professional portfolio websites. Use this skill whenever the user wants to create a portfolio, personal website, showcase website, professional landing page, or any site to display their work, projects, resume, or creative output. Trigger even when they say things like "show my work online", "personal brand site", "freelancer website", "developer portfolio", "design showcase", or mention displaying their projects/skills on the web.
---

# Portfolio Website Builder

This skill guides you through creating modern, professional portfolio websites that effectively showcase work and personal brand.

## Starting Point: Quick Assessment

When using this skill, **first help the user clarify their needs** by asking about:

1. **Their profession/focus**
   - What kind of work/projects will they showcase?
   - Technical portfolio, visual/design work, writing, art, or general professional presence?

2. **Technical comfort level**
   - Can they code? Do they want to learn?
   - Or do they need a simpler solution?

3. **Timeline**
   - Do they need it ready quickly?
   - Or can they take time to build something comprehensive?

Based on these answers, the guidance path changes significantly. For example:
- A non-technical photographer needs different recommendations than a developer
- Someone on a tight deadline gets a quick-start template, not a full-stack setup
- Someone with 2 weeks can use a CMS or blog features; someone with 2 hours gets a single HTML file

**Continue with the sections below based on what the user needs.**

---

## Core Philosophy

**Portfolios are not just galleries** — they're strategic tools for:
- Demonstrating expertise through real work
- Telling your professional story
- Making it easy to contact you
- Ranking in search results for your name
- Converting visitors into clients/opportunities

## Tech Stack Recommendations by Profile

### Developer/Engineer Portfolio

**Recommended: Next.js 14+ with App Router**

Why?
- Server components for performance
- Built-in image optimization
- File-based routing
- SEO-friendly with metadata API
- Can add blog with MDX
- Deploy on Vercel for free

```
Structure:
app/
├── page.tsx          # Homepage
├── about/page.tsx    # About page
├── projects/page.tsx # Projects gallery
├── blog/            # MDX blog (optional)
└── contact/page.tsx  # Contact form
```

**Alternative: Astro (if you love writing in Markdown)**
- Ship zero JS by default
- Use any framework (React, Vue, Svelte)
- Content Collections for projects/blog
- Markdown/MDX support
- Extremely fast load times

### Designer/Visual Creator Portfolio

**Recommended: Astro or Webflow**

Why designers need:
- Beautiful image galleries with smooth interactions
- Minimal code overhead—focus on design
- Easy to update without developer knowledge
- Showcase work at original quality

**Webflow**: No-code designer tool
- Visual editor for precise design control
- Built-in CMS for project updates
- Publishing to custom domain
- Hosting included

### Photographer/Artist Portfolio

**Recommended: Single-purpose gallery builders or Astro**

Needs:
- High-quality image display
- Fast loading for high-res images
- Simple navigation
- Optional: Lightbox/modal galleries

**Tools:**
- Astro + image optimization (free, flexible)
- Cargo.site ($19/month, simple, photographer-focused)
- Format.com (portfolio + shop, $0-15/month)

### Writer/Content Creator

**Recommended: Astro with MDX Blog or Hashnode**

Needs:
- Article archive with searchability
- Reading time estimates
- Tag/category organization
- RSS feed (optional)
- Comment system (optional)

### Non-Technical Professional (Consultant, Coach, etc.)

**Recommended: No-code option or single HTML file**

Options:
- **Carrd.co** ($9/year): Simple, fast, one-pager
- **Notion** (free): Quick setup, notion.site domain
- **Webflow** ($0-15/month): More control, learning curve
- **HTML template** (free): If they can copy-paste

---

## Essential Sections (Universal)

### 1. Hero Section

**Purpose:** Immediate impact, clear value proposition

**Must include:**
- Your name + tagline (what you do in 5-7 words)
- High-quality photo or illustration
- Primary CTA (View Work, Contact Me, Download Resume)

**Code pattern:**
```jsx
<section className="min-h-screen flex items-center">
  <div className="max-w-4xl mx-auto px-6">
    <h1 className="text-5xl font-bold mb-4">
      Hi, I'm [Name] 👋
    </h1>
    <p className="text-2xl text-gray-400 mb-8">
      [One-line description: "Full-stack developer building accessible web experiences"]
    </p>
    <a href="#projects" className="btn-primary">
      View My Work →
    </a>
  </div>
</section>
```

### 2. About Section

**Keep it concise (2-3 paragraphs max)**

Include:
- Current role/status
- Core expertise (3-5 skills/tools)
- What drives you (optional, adds personality)
- Link to full resume/CV (optional)

**Anti-pattern:** Long autobiography. Keep it scannable.

### 3. Work/Projects Section

**This is the heart of your portfolio**

**For Each Project:**
```
Required:
- Project name
- Brief description (1-2 sentences)
- Technologies/tools used
- Image/screenshot/demo
- Links (Live demo, GitHub, case study)

Optional but powerful:
- Problem → Solution narrative
- Key metrics/results
- Your specific role (if team project)
- Technical challenges overcome
```

**Display Options:**

**A. Grid Gallery** (visual work, designers, photographers)
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map(project => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>
```

**B. Featured + List** (mixed work, developers)
- 2-3 featured projects (full details, large images)
- Remaining projects in compact list

**C. Case Study Pages** (deep dives, consultants)
- Summary cards link to full case study pages
- Each case study: context, problem, process, outcome, learnings

### 4. Contact Section

**Make it stupid-easy to reach you**

**Minimum:**
- Email (use actual mailto: link or form)
- LinkedIn or professional network

**Consider adding:**
- Contact form (EmailJS, Formspree, or Web3Forms for free)
- GitHub, Twitter/X, other relevant platforms
- Calendar booking link (Cal.com, Calendly for consultants)

**Simple Contact Form:**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" required />
  <button type="submit">Send Message</button>
</form>
```

---

## Design System Setup

Establish these **upfront** before building:

### 1. Color Palette (3-4 colors max)

```css
:root {
  --primary: #6366f1;      /* Accent color */
  --bg-main: #0a0a0a;      /* Dark background */
  --bg-card: #1a1a1a;      /* Card/section bg */
  --text-primary: #fafafa; /* Main text */
  --text-muted: #a3a3a3;   /* Secondary text */
}
```

**Pro tip:** Use a tool like Coolors.co to generate harmonious palettes

### 2. Typography Scale

- Display: 3.5rem / 56px (hero headlines)
- H1: 2.5rem / 40px
- H2: 2rem / 32px
- Body: 1rem / 16px
- Small: 0.875rem / 14px

### 3. Spacing System

Use an 8px base unit: 8, 16, 24, 32, 48, 64, 96, 128

This makes everything align beautifully.

### 4. Recommended Font Combinations

**Option A: Single font (simplest, safest)**
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
```

**Option B: Two-font pairing**
- Space Grotesk (headings) + Inter (body)
- Manrope (all) 
- Poppins (headings) + Open Sans (body)

---

## Performance & SEO Checklist

### Images
- [ ] Use WebP format with PNG/JPEG fallback
- [ ] Lazy load images below-the-fold
- [ ] Provide width/height to prevent layout shift
- [ ] Use next/image or Astro's Image component for auto-optimization

### SEO Essentials
```html
<head>
  <title>[Your Name] - [Your Role/Specialty]</title>
  <meta name="description" content="[Elevator pitch, 150-160 chars]" />
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="[Your Name] - Portfolio" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
</head>
```

### Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

---

## Mobile-First Responsive Design

**Build for mobile first, enhance for desktop:**

```css
/* Mobile base */
.container {
  padding: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 2rem; }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

**Touch targets on mobile:** Minimum 44x44px

---

## Accessibility Guidelines

Make your portfolio usable for **everyone**:

1. **Semantic HTML**
   ```html
   <header>
   <nav>
   <main>
     <section> or <article>
   <footer>
   ```

2. **Alt text for all images**
   ```html
   <img src="project.jpg" alt="Dashboard showing analytics charts" />
   ```

3. **Keyboard navigation**
   ```css
   a:focus, button:focus {
     outline: 2px solid var(--primary);
     outline-offset: 2px;
   }
   ```

4. **Color contrast**
   - WCAG AA standard: 4.5:1 for normal text
   - Check with WebAIM Contrast Checker

5. **Skip to content link** (for screen readers)
   ```html
   <a href="#main" class="sr-only">Skip to main content</a>
   ```

---

## Deployment Options

### Free Hosting

**Vercel** (best for Next.js)
- GitHub integration
- Automatic deployments on push
- Free SSL certificate
- Global CDN

```bash
npm install -g vercel
vercel
```

**Netlify** (best for Astro, static sites)
- Drag & drop deployment
- Integrated form handling
- Serverless functions

**GitHub Pages** (simplest for static HTML)
- yourname.github.io domain
- Just push to gh-pages branch

### Custom Domain ($10-15/year)

**Worth it for professionalism:**
- yourname.com > yourname.github.io
- Email at your domain (optional)

**Setup:** Buy domain (Namecheap, Cloudflare), point DNS to host

---

## Quick Start by Timeline

### ⚡ Need It Today (< 4 hours)

**Use:** Single HTML file with Tailwind CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[Your Name] - Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-neutral-950 text-white">
  <!-- Hero -->
  <section class="min-h-screen flex items-center px-6">
    <div class="max-w-4xl">
      <h1 class="text-6xl font-bold mb-4">[Your Name]</h1>
      <p class="text-2xl text-gray-400 mb-8">[Your role/tagline]</p>
      <a href="#projects" class="bg-blue-600 px-6 py-3 rounded">
        View My Work
      </a>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-24 px-6 bg-neutral-900">
    <!-- Add your projects here -->
  </section>

  <!-- Contact -->
  <section class="py-24 px-6">
    <h2 class="text-4xl font-bold mb-8">Get in Touch</h2>
    <a href="mailto:you@email.com">you@email.com</a>
  </section>
</body>
</html>
```

**Deploy on:** Netlify Drop (drag & drop)

---

### 🎯 Standard Timeline (2-3 days)

**Use:** Next.js 14 or Astro

Covers all features: projects, blog, contact form, animations, proper structure.

---

### 📚 Comprehensive Build (1-2 weeks)

**Use:** Next.js 14 + Contentful/Supabase CMS

Adds: Blog system, project filtering, analytics, newsletter signup, multiple content types.

---

## Common Pitfalls to Avoid

1. **❌ Too much content above the fold**
   - ✅ Hero section: just name, role, CTA

2. **❌ Unclear project outcomes**
   - ✅ "Increased conversion by 40%" > "Built a form"

3. **❌ No clear call-to-action**
   - ✅ Make contact info prominent

4. **❌ Outdated projects**
   - ✅ 3 strong recent projects > 10 old ones

5. **❌ Generic stock photos**
   - ✅ Use real work/screenshots + your actual photo

6. **❌ Slow load times**
   - ✅ Optimize images (biggest performance killer)

---

## Completion Checklist

Before launching:

- [ ] All sections present (Hero, About, Projects, Contact)
- [ ] At least 3 quality project showcases
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Fast load time (< 3s on 3G)
- [ ] SEO meta tags configured
- [ ] Contact method works
- [ ] Images optimized (< 200KB each)
- [ ] No console errors
- [ ] Accessible (keyboard nav, alt text, contrast)
- [ ] Live URL (deployed)
- [ ] Analytics configured (optional)

---

## Final Philosophy

**A portfolio is never "done"** — it evolves with your work and learning.

The best portfolio is **live, even if imperfect**. Better a simple, fast site online than an elaborate design on your local machine.

**Make it easy to:**
1. See your work
2. Understand what you do
3. Contact you

Everything else is optional.

**You've got this.** 🚀
