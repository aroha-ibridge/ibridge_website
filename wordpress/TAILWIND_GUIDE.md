# Tailwind CSS Conversion Guide

The project uses **Tailwind CSS v3** for all new / refactored UI. The existing
Elementor-generated markup and `wp-custom.css` still work — Tailwind is
additive so we can migrate page-by-page without breakage.

---

## 1. Design tokens (edit these to change the brand look)

All brand colors, fonts, radius, shadows are in `tailwind.config.js`.

| Token | Value | Use |
|-------|-------|-----|
| `text-brand` / `bg-brand` | `#18479F` | primary blue |
| `text-brand-700` | `#123A85` | darker hover |
| `text-accent` | `#9F1872` | magenta accent |
| `text-ink` | `#0F172A` | main body text |
| `text-ink-muted` | `#64748B` | secondary text |
| `bg-surface` | `#FFFFFF` | main background |
| `bg-surface-soft` | `#F8FAFC` | soft alt background |
| `bg-surface-muted` | `#F1F5F9` | muted background |
| `border-surface-border` | `#E8EDF3` | default borders |
| `rounded-card` | `16px` | card corners |
| `shadow-card` / `shadow-cardHover` / `shadow-popup` / `shadow-button` | | consistent shadows |
| `max-w-container` | `1200px` | page container |
| `max-w-content` | `960px` | narrow content |

**Change a token → the whole site updates.**

---

## 2. Primitive components — always use these

Located in `src/components/ui/`.

```jsx
import { Button, Card, Container, Section, Heading, Modal, Input, Select, Textarea, Label, Field } from '../components/ui';
```

### Section + Container
```jsx
<Section tone="soft" spacing="default">
  <Container>
    ...page content...
  </Container>
</Section>
```

### Button
```jsx
<Button variant="primary" size="md" to="/programs">Explore</Button>
<Button variant="outline" href="https://example.com" target="_blank" rel="noopener noreferrer">External</Button>
<Button variant="ghost" onClick={handleClick}>Cancel</Button>
```

Variants: `primary` (default), `secondary`, `outline`, `ghost`
Sizes: `sm`, `md` (default), `lg`

### Heading
```jsx
<Heading level={1} size="hero">Welcome</Heading>
<Heading level={2}>Section title</Heading>
<span className="text-xs font-bold uppercase tracking-[0.08em] text-brand">EYEBROW</span>
```

### Card
```jsx
<Card className="p-6" interactive>
  ...
</Card>
```

### Form fields
```jsx
<Field id="email" label="Email">
  <Input id="email" type="email" placeholder="Your email" />
</Field>

<Field id="course" label="Course">
  <Select id="course" defaultValue="">
    <option value="" disabled>Select a course</option>
    <option value="Data Engineering">Data Engineering</option>
  </Select>
</Field>
```

### Modal
```jsx
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Body content</p>
</Modal>
```

---

## 3. How to convert an existing page

**Pattern:** create a new `SomethingTw.jsx` next to the old file, import
primitives, rebuild the markup with Tailwind utilities. When it looks right,
swap the import in the page file. Delete the old file once verified.

### Step-by-step

1. **Find the source file** — e.g. `src/components/sections/home/HeroSection.jsx`
2. **Read the visible text/content** — ignore the elementor classes, focus on the *content* and *layout intent*
3. **Sketch the layout** with primitives:
   ```jsx
   <Section>
     <Container>
       <Heading>...</Heading>
       <p>...</p>
       <Button>...</Button>
     </Container>
   </Section>
   ```
4. **Fill in Tailwind utilities** for anything the primitives don't cover
5. **Copy content only** (text, image URLs, links) — never copy the elementor `<div className="elementor-widget-container">` chains
6. **Save as `<Name>Tw.jsx`** — keeps the old file working during the swap
7. **Update the parent page import** when ready
8. **Delete the old file** after visual QA

### Example done for you

- `src/components/layout/HeaderTw.jsx` — new header (compare to old `Header.jsx`)
- `src/components/sections/home/HeroSectionTw.jsx` — new home hero

### To switch to the new versions:

**HeaderTw:**
```jsx
// src/layouts/MainLayout.jsx
import Header from '../components/layout/HeaderTw';   // change to HeaderTw
```

**HeroSectionTw:**
```jsx
// src/pages/Home/Home.jsx
import HeroSection from '../../components/sections/home/HeroSectionTw';
```

---

## 4. Rules of thumb

| Do | Don't |
|----|-------|
| Wrap top-level page/sections in `<Section>` + `<Container>` | Nest 8 levels of `elementor-column elementor-col-XX elementor-inner-column ...` |
| Use `<Heading level={1} size="hero">` | Use `<h2 className="elementor-heading-title elementor-size-default">` |
| Use `<Button variant="primary">` | Copy the `elementor-button elementor-size-md ...` chain |
| Use Tailwind spacing (`gap-4`, `py-16`) | Add `margin-bottom: 15px` in CSS |
| Add a `tw-scope` class to isolated Tailwind blocks | Rely on global preflight resets (they're disabled) |
| Colocate small helpers with the component | Add another rule to `wp-custom.css` |

---

## 5. Notes on the transition

- `preflight` (Tailwind's global CSS reset) is **disabled** so the existing
  Elementor pages keep looking correct. New Tailwind components use `.tw-scope`
  and explicit classes for everything.
- Once ~80% of the site is converted, we can enable preflight and delete most
  of `wp-custom.css` and the `public/wp-content/uploads/elementor/css/*.css` files.
- The `programContext.js`, `sendEnquiryEmail.js`, popup hooks and other logic
  files are Tailwind-independent — they keep working as-is.

---

## 6. Conversion order (suggested)

Convert small, high-visibility pieces first, then work outward:

1. ✅ **Header** (done — `HeaderTw.jsx`)
2. ✅ **Home hero** (done — `HeroSectionTw.jsx`)
3. **Enquire popup** (`ExplorePopup.jsx` — use `Modal`, `Field`, `Input`, `Select`, `Button`)
4. **Program CTA modal** (already React state driven — just swap CSS for Tailwind)
5. **Footer**
6. **Home** remaining sections
7. **Programs page cards** (grid)
8. **Program pages** (Data Engineering, Full Stack MERN)
9. **About / Institution / Corporate** landing pages
10. **Blogs / Contact / Legal pages**

Once each section is converted, remove the corresponding rules from
`wp-custom.css` and the matching `public/wp-content/uploads/elementor/css/*.css` file.
