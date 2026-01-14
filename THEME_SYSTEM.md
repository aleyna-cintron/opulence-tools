# Theme System Documentation

## Overview

This project uses Tailwind CSS v4's modern theme system with CSS custom properties (variables) and the OKLCH color space. The configuration is fully compatible with Tailwind v4 and provides a comprehensive design system.

## Key Concepts

### 1. Custom Variant for Dark Mode

```css
@custom-variant dark (&:is(.dark *));
```

**What it does:** Defines a custom Tailwind variant called `dark` that activates when an element is inside a parent with the `dark` class.

**Syntax Breakdown:**
- `@custom-variant`: Tailwind v4 directive to create custom variants
- `dark`: Name of the variant (used as `dark:bg-black` in your HTML)
- `(&:is(.dark *))`: CSS selector pattern
  - `&`: Represents the current element
  - `:is()`: CSS pseudo-class that matches any selector in the list
  - `.dark *`: Any descendant of an element with class `dark`

**How to use:**
```tsx
// Add 'dark' class to a parent element to enable dark mode
<div className="dark">
  <p className="text-foreground dark:text-white">
    This text changes in dark mode
  </p>
</div>
```

**Example implementation:**
```tsx
'use client';
import { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-background text-foreground">
        <button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
```

---

### 2. CSS Custom Properties (Variables)

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  /* ... more variables */
}
```

**What it does:** Defines global CSS variables that can be referenced throughout your styles.

**Why use them:**
- Single source of truth for design tokens
- Easy theme switching (just override variables in `.dark` class)
- CSS variables cascade naturally through the DOM
- Can be dynamically changed with JavaScript

**Variable naming convention:**
- Semantic names (`--background`, `--primary`) rather than descriptive (`--blue-500`)
- Makes it easy to swap themes without changing component code

---

### 3. OKLCH Color Space

```css
oklch(L C H)
```

**What it is:** A modern color format that represents colors more naturally than RGB or HSL.

**Parameters:**
- **L (Lightness):** 0 (black) to 1 (white)
  - `oklch(0 0 0)` = pure black
  - `oklch(1 0 0)` = pure white
  - `oklch(0.5 0 0)` = mid gray

- **C (Chroma):** 0 (grayscale) to ~0.4 (vivid colors)
  - `oklch(0.5 0 0)` = gray (no color)
  - `oklch(0.5 0.2 0)` = vivid color

- **H (Hue):** 0-360 degrees (color wheel)
  - 0° = red
  - 120° = green
  - 240° = blue
  - 360° = back to red

**Examples:**
```css
oklch(0.145 0 0)        /* Very dark gray (almost black) */
oklch(0.985 0 0)        /* Very light gray (almost white) */
oklch(0.708 0 0)        /* Mid gray */
oklch(0.646 0.222 41.116) /* Warm orange */
oklch(0.488 0.243 264.376) /* Purple/blue */
```

**Why OKLCH over RGB/HSL:**
1. **Perceptually uniform:** Equal numeric changes = equal perceived changes
2. **Wider gamut:** Can represent more vivid colors
3. **Better for manipulation:** Easy to create consistent color scales
4. **Future-proof:** Modern standard supported by all browsers

**Comparison:**
```css
/* Creating lighter/darker variants */

/* HSL - inconsistent perceived lightness */
hsl(240, 100%, 50%)   /* Blue */
hsl(240, 100%, 60%)   /* Lighter blue (but looks too bright) */

/* OKLCH - consistent perceived lightness */
oklch(0.5 0.2 240)    /* Blue */
oklch(0.6 0.2 240)    /* Lighter blue (perfect 10% lighter) */
```

---

### 4. Theme Configuration

```css
@theme inline {
  --color-background: var(--background);
  --radius-lg: var(--radius);
}
```

**What it does:** Bridges your semantic CSS variables to Tailwind's naming convention.

**Why the `@theme inline` syntax:**
- Tailwind v4's new way to define theme values directly in CSS
- Replaces the old `tailwind.config.js` theme.extend pattern
- Keeps all styling in one place

**Naming conventions:**
- Colors must use `--color-*` prefix
  - `--color-background` → `bg-background`
  - `--color-primary` → `bg-primary`, `text-primary`

- Radius must use `--radius-*` prefix
  - `--radius-sm` → `rounded-sm`
  - `--radius-lg` → `rounded-lg`

**How Tailwind maps these:**
```
Utility Class         →  CSS Variable
bg-background        →  var(--color-background)
text-foreground      →  var(--color-foreground)
border-border        →  var(--color-border)
rounded-lg           →  var(--radius-lg)
```

**Dynamic calculations:**
```css
--radius: 0.625rem;
--radius-sm: calc(var(--radius) - 4px);  /* Base minus 4px */
--radius-md: calc(var(--radius) - 2px);  /* Base minus 2px */
--radius-lg: var(--radius);               /* Base */
--radius-xl: calc(var(--radius) + 4px);  /* Base plus 4px */
```

---

### 5. Layer System

```css
@layer base {
  body {
    @apply bg-background text-foreground;
  }
}
```

**What it does:** Places styles in Tailwind's `base` layer, giving them low specificity.

**Tailwind's three layers (in order of specificity):**
1. **base:** Reset styles, element defaults (lowest specificity)
2. **components:** Reusable component classes
3. **utilities:** Utility classes like `bg-red-500` (highest specificity)

**Why this matters:**
```css
@layer base {
  h1 {
    font-size: var(--text-2xl);  /* Default: 24px */
  }
}
```

In your HTML:
```tsx
<h1>Uses default 24px</h1>
<h1 className="text-sm">Tailwind utility overrides to small</h1>
```

The utility class automatically wins without `!important` because layers ensure proper cascade.

---

### 6. @apply Directive

```css
@apply bg-background text-foreground;
```

**What it does:** Applies Tailwind utility classes inside CSS rules.

**When to use:**
- Setting defaults in `@layer base`
- Creating component classes
- Reusing utility combinations

**Example:**
```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
}
```

This applies:
- `border-border` → `border-color: var(--color-border)`
- `outline-ring/50` → `outline-color: var(--color-ring)` at 50% opacity

---

## Theme Architecture

### Color Palette Structure

Our theme defines semantic color roles:

| Variable | Light Mode | Dark Mode | Purpose |
|----------|-----------|-----------|---------|
| `background` | White | Dark gray | Main background |
| `foreground` | Dark gray | Light gray | Main text color |
| `primary` | Dark | Light | Primary actions/branding |
| `secondary` | Light purple | Dark gray | Secondary elements |
| `muted` | Light gray | Dark gray | Muted/disabled content |
| `accent` | Light gray | Dark gray | Accented elements |
| `destructive` | Red | Dark red | Dangerous actions |
| `border` | Light gray | Dark gray | Borders and dividers |
| `card` | White | Dark gray | Card backgrounds |

### Using the Theme

**Basic usage:**
```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>

  <div className="bg-card text-card-foreground border border-border rounded-lg">
    Card content
  </div>
</div>
```

**With dark mode:**
```tsx
<div className="dark">
  {/* All colors automatically switch to dark mode values */}
  <div className="bg-background text-foreground">
    This adapts to dark mode
  </div>
</div>
```

**Border radius:**
```tsx
<div className="rounded-sm">Small radius (6px)</div>
<div className="rounded-md">Medium radius (8px)</div>
<div className="rounded-lg">Large radius (10px)</div>
<div className="rounded-xl">Extra large radius (14px)</div>
```

---

## Advanced Features

### Typography System

Default typography styles are set in `@layer base`, so they're automatically overridden by Tailwind utilities:

```tsx
{/* Uses default h1 styles (24px, medium weight) */}
<h1>Default Heading</h1>

{/* Tailwind utility overrides to small */}
<h1 className="text-sm">Small Heading</h1>

{/* Multiple utilities work together */}
<h1 className="text-4xl font-bold text-primary">
  Custom Heading
</h1>
```

### Form Styling

Special variables for form elements:
```tsx
<input
  className="bg-input-background border border-border focus:ring-2 focus:ring-ring"
  type="text"
/>
```

### Chart Colors

Five predefined chart colors for data visualization:
```tsx
<div className="bg-chart-1">Chart color 1</div>
<div className="bg-chart-2">Chart color 2</div>
{/* ... up to chart-5 */}
```

### Sidebar Components

Special color scheme for sidebar/navigation:
```tsx
<aside className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
  <button className="bg-sidebar-primary text-sidebar-primary-foreground">
    Primary action
  </button>
</aside>
```

---

## Implementation Checklist

- [x] Tailwind CSS v4 installed (`^4`)
- [x] `@import "tailwindcss"` in globals.css
- [x] Custom dark variant defined
- [x] Color variables in `:root` and `.dark`
- [x] `@theme inline` configuration
- [x] Base layer typography defaults
- [x] VSCode settings for linting

---

## Testing Your Theme

Visit `/theme-demo` to see all theme features in action:
- Color palette showcase
- Typography defaults
- Border radius scale
- Form elements
- Chart colors
- Dark mode toggle

---

## Browser Support

- **OKLCH colors:** All modern browsers (Chrome 111+, Safari 15.4+, Firefox 113+)
- **CSS custom properties:** All modern browsers
- **Fallbacks:** Not needed - all target browsers support these features

---

## Troubleshooting

### VSCode shows "Unknown at rule" warnings

This is a false positive. The `.vscode/settings.json` file suppresses these warnings. If you still see them:
1. Reload VSCode window
2. Check that `.vscode/settings.json` exists
3. The warnings don't affect functionality

### Colors not working

1. Ensure `globals.css` is imported in your root layout
2. Check that you're using the correct utility names (e.g., `bg-background` not `bg-bg`)
3. Verify the build succeeded without errors

### Dark mode not working

1. Ensure the `@custom-variant dark` is in your CSS
2. Add the `dark` class to a parent element
3. Check that child elements use the semantic color variables

---

## Migration from v3

If migrating from Tailwind v3:

1. **Config file:** Delete `tailwind.config.js/ts` - configuration is now in CSS
2. **Dark mode:** Change `darkMode: 'class'` to `@custom-variant dark (&:is(.dark *))`
3. **Theme extension:** Move `theme.extend` to `@theme inline` in CSS
4. **Custom colors:** Define as CSS variables in `:root`, then reference in `@theme`
5. **Plugins:** Most plugins work the same, but check v4 compatibility

---

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [OKLCH Color Picker](https://oklch.com)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS :is() selector (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
