# Component Documentation

## Overview

This document describes the implemented components for the JewelCraft e-commerce application.

---

## Navbar Component

**Location:** [components/Navbar.tsx](components/Navbar.tsx)

### Features

1. **Responsive Design**
   - Desktop navigation with horizontal menu
   - Mobile menu with slide-in animation
   - Sticky positioning (`sticky top-0 z-50`)

2. **Logo & Branding**
   - Gem icon with gradient background
   - Company name with gradient text effect
   - Tagline: "Premium Tools & Equipment"
   - Decorative accent dot on logo

3. **Navigation Links**
   - Shop
   - About
   - FAQ
   - Contact

4. **User Actions**
   - Search button (desktop only)
   - Sign In link
   - Shopping cart with badge counter
   - Mobile menu toggle

5. **Interactive Elements**
   - Mobile menu toggle (Menu/X icon)
   - Hover effects on all clickable elements
   - Cart count badge (hidden when count is 0)

### Usage

```tsx
import { Navbar } from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
```

### Props

Currently no props - uses internal state for mobile menu.

### State Management

- `mobileMenuOpen`: Boolean state for mobile menu visibility
- `cartCount`: Placeholder (TODO: Connect to cart context)

### Styling

- **Colors:** Emerald green (`emerald-500`, `emerald-600`) for primary actions
- **Layout:** `max-w-7xl` container with responsive padding
- **Height:** `h-20` (80px) navbar height
- **Shadows:** Subtle shadow effects on logo and cart badge

### Future Improvements

- [ ] Connect to cart context for real cart count
- [ ] Implement search functionality
- [ ] Add user authentication state
- [ ] Add keyboard navigation support
- [ ] Add dropdown menus for categories

---

## Footer Component

**Location:** [components/Footer.tsx](components/Footer.tsx)

### Features

1. **Four-Column Layout** (responsive)
   - Company Info
   - Quick Links
   - Customer Service
   - Contact Information

2. **Company Info Section**
   - Logo with gem icon
   - Company description
   - Brand identity

3. **Quick Links**
   - Shop Tools
   - About Us
   - FAQ
   - Contact

4. **Customer Service**
   - Shipping Information
   - Returns & Exchanges
   - Order Tracking
   - Bulk Ordering

5. **Contact Info**
   - Email: support@jewelcraft.com
   - Phone: 1-800-JEWEL-PRO
   - Business Hours: Mon-Fri 9AM-6PM EST
   - Icons for each contact method

6. **Bottom Bar**
   - Copyright notice
   - Privacy Policy link
   - Terms of Service link
   - Sitemap link

### Usage

```tsx
import { Footer } from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

### Styling

- **Background:** Gradient from `neutral-50` to white
- **Layout:** `max-w-7xl` container
- **Grid:** Responsive 1-column (mobile) to 4-column (desktop)
- **Typography:** Small text (`text-sm`) with good readability

---

## Login Page

**Location:** [app/login/page.tsx](app/login/page.tsx)

### Features

1. **Dual Mode**
   - Sign In mode (default)
   - Sign Up mode (toggle between modes)
   - Smooth transition between forms

2. **Form Fields**
   - **Sign In:** Email, Password, Remember Me checkbox
   - **Sign Up:** Full Name, Email, Password, Confirm Password
   - Client-side validation with required fields
   - Password visibility toggle (Eye/EyeOff icons)

3. **User Experience**
   - Clean, centered layout with gradient background
   - Logo linking back to home page
   - Clear call-to-action buttons
   - Toggle between Sign In/Sign Up
   - Forgot Password link (Sign In mode)
   - Terms and Privacy Policy links

4. **Styling**
   - Emerald green theme matching site branding
   - Gradient background matching home page
   - White card with subtle shadow
   - Focus rings on inputs (emerald-500)
   - Hover effects on all interactive elements

### Usage

The page is accessible at `/login` route. Users can click "Sign In" in the Navbar to navigate here.

```tsx
// Link to login page
<Link href="/login">Sign In</Link>
```

### Form Structure

**Sign In Form:**
- Email Address (required)
- Password (required, with show/hide toggle)
- Remember Me checkbox
- Forgot Password link
- Sign In button

**Sign Up Form:**
- Full Name (required)
- Email Address (required)
- Password (required, with show/hide toggle)
- Confirm Password (required, with show/hide toggle)
- Create Account button

### State Management

- `isSignUp`: Boolean toggle between Sign In/Sign Up modes
- `showPassword`: Boolean to show/hide password field
- `showConfirmPassword`: Boolean to show/hide confirm password field

### Accessibility

- Proper `<label>` elements with `htmlFor` attributes
- ARIA labels on password visibility buttons
- Semantic form structure
- Focus management with visible focus rings
- Keyboard navigation support

### Future Improvements

- [ ] Connect to authentication API
- [ ] Add form validation (email format, password strength)
- [ ] Show validation errors
- [ ] Add loading states during submission
- [ ] Implement "Remember Me" functionality
- [ ] Create Forgot Password page
- [ ] Add social login options (Google, Apple)
- [ ] Add email verification flow
- [ ] Implement rate limiting
- [ ] Add reCAPTCHA for security

### Security Considerations

When implementing authentication:
- Use HTTPS in production
- Hash passwords with bcrypt or similar
- Implement CSRF protection
- Add rate limiting for login attempts
- Use secure session management
- Implement email verification
- Add 2FA option for enhanced security
- Validate input on both client and server

---

## Layout Integration

**Location:** [app/layout.tsx](app/layout.tsx)

### Structure

```tsx
<html>
  <body>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  </body>
</html>
```

### Layout Features

1. **Flex Container**
   - Full viewport height (`min-h-screen`)
   - Vertical layout (`flex-col`)

2. **Main Content Area**
   - Grows to fill available space (`grow`)
   - Pushes footer to bottom

3. **Sticky Header**
   - Navbar stays at top while scrolling
   - Content scrolls beneath it

4. **Global Styles**
   - Tailwind CSS v4 with custom theme
   - OKLCH color space
   - Dark mode support via `@custom-variant`

---

## Home Page

**Location:** [app/page.tsx](app/page.tsx)

### Sections

1. **Hero Section**
   - Large heading with gradient text
   - Descriptive subheading
   - CTA buttons (Shop Now, Learn More)
   - Gradient background

2. **Features Section**
   - Three-column grid (responsive)
   - Feature cards with icons
   - Premium Quality, Best Value, Fast Shipping

3. **CTA Section**
   - Full-width emerald gradient background
   - Large heading and description
   - "Explore Products" button

### Styling Notes

- Uses Tailwind v4 canonical gradient classes (`bg-linear-to-r`, `bg-linear-to-br`)
- Responsive text sizing (`text-5xl md:text-7xl`)
- Hover effects with `scale` transforms
- Shadow effects for depth

---

## Theme Integration

All components use the custom theme system defined in [assets/styles/globals.css](assets/styles/globals.css).

### Key Theme Colors Used

- `emerald-500`, `emerald-600`: Primary brand colors
- `neutral-50` to `neutral-900`: Grays for text and backgrounds
- `white`: Pure white for contrast
- Gradients: Linear gradients for visual interest

### Tailwind v4 Features Used

- `@custom-variant dark`: Dark mode support
- `@theme inline`: Custom theme configuration
- `@layer base`: Base typography styles
- OKLCH colors: Modern color space
- Canonical class names: `bg-linear-*` instead of `bg-gradient-*`

---

## Icons

**Library:** [lucide-react](https://lucide.dev/)

### Icons Used

- `Gem`: Logo icon
- `ShoppingCart`: Cart icon
- `Menu`: Mobile menu open
- `X`: Mobile menu close
- `Search`: Search functionality
- `Mail`, `Phone`, `MapPin`: Contact info in footer

### Installation

```bash
npm install lucide-react
```

---

## Responsive Breakpoints

Following Tailwind's default breakpoints:

- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

### Responsive Patterns Used

```tsx
// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop
className="md:hidden"

// Grid: 1 column mobile, 3 columns desktop
className="grid grid-cols-1 md:grid-cols-3"

// Text size: smaller on mobile, larger on desktop
className="text-5xl md:text-7xl"
```

---

## Accessibility Features

1. **Semantic HTML**
   - `<nav>`, `<footer>`, `<main>` elements
   - Proper heading hierarchy

2. **ARIA Labels**
   - `aria-label` on icon buttons
   - `aria-expanded` for menu toggle

3. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Focus states with `outline-ring/50`

4. **Screen Reader Support**
   - Descriptive link text
   - Alt text on icons (via aria-label)

### Future Improvements

- [ ] Add skip navigation link
- [ ] Improve focus indicators
- [ ] Add ARIA live regions for dynamic content
- [ ] Test with screen readers

---

## Performance Optimizations

1. **Static Generation**
   - All pages pre-rendered at build time
   - No runtime overhead

2. **Image Optimization**
   - Next.js Image component (when images added)
   - Automatic format conversion

3. **Code Splitting**
   - Client components only where needed
   - Server components by default

4. **CSS Optimization**
   - Tailwind purges unused styles
   - Minimal CSS bundle size

---

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm start
```

### View Theme Demo

Visit [http://localhost:3000/theme-demo](http://localhost:3000/theme-demo) to see all theme features.

---

## File Structure

```
ecom/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   └── theme-demo/
│       └── page.tsx        # Theme demonstration page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── assets/
│   └── styles/
│       └── globals.css     # Global styles & theme
└── public/                 # Static assets (images, etc.)
```

---

## Next Steps

### Immediate Priorities

1. **Cart Context**
   - Create cart state management
   - Connect to Navbar cart counter
   - Implement add/remove functionality

2. **Product Pages**
   - Shop page with product grid
   - Individual product detail pages
   - Category filtering

3. **User Authentication**
   - Sign in/up pages
   - User profile
   - Protected routes

4. **Search Functionality**
   - Search overlay/modal
   - Product search API
   - Search results page

### Future Features

- Payment integration (Stripe/PayPal)
- Order history
- Wishlist
- Product reviews
- Inventory management
- Email notifications
- Analytics tracking

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [OKLCH Color Picker](https://oklch.com/)
- [Theme System Documentation](THEME_SYSTEM.md)
