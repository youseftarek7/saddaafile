---
name: Culinary Experience System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5d3f3e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#916e6d'
  outline-variant: '#e6bdbb'
  surface-tint: '#bf0029'
  primary: '#b90027'
  on-primary: '#ffffff'
  primary-container: '#e31837'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b1'
  secondary: '#885200'
  on-secondary: '#ffffff'
  secondary-container: '#fd9d06'
  on-secondary-container: '#653c00'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa900'
  on-tertiary-container: '#4c3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001d'
  secondary-fixed: '#ffddbb'
  secondary-fixed-dim: '#ffb868'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#673d00'
  tertiary-fixed: '#ffe171'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#554600'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Tajawal
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Tajawal
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Tajawal
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Tajawal
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Tajawal
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Tajawal
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 20px
---

## Brand & Style

The visual identity of the design system is built on the pillars of efficiency, appetite, and modern hospitality. It targets a fast-paced urban demographic that values clarity and speed without sacrificing the sensory appeal of food. 

The chosen design style is **Modern Minimalism**. By utilizing a high-contrast palette and expansive white space, the design system ensures that high-quality food photography remains the focal point. The interface avoids unnecessary decorative elements, favoring structural integrity and functional clarity to reduce cognitive load during the ordering process. The emotional response is intended to be one of trust and immediate satisfaction.

## Colors

The color strategy centers on a high-energy **Vibrant Red** for primary actions, a color scientifically proven to stimulate appetite and urgency. This is balanced by a **Warm Orange/Yellow** secondary palette used for secondary accents, such as ratings, badges, or promotional highlights, evoking warmth and freshness.

The background is strictly defined as `#FAFAFA` to provide a soft, paper-like canvas that reduces eye strain compared to pure white while maintaining high contrast with the primary brand color. Text colors are tuned for accessibility, using a near-black for headlines to ensure maximum legibility against the light background.

## Typography

The design system utilizes **Tajawal** as its sole typeface family to ensure a contemporary, geometric, and clean Arabic typographic experience. Its low-contrast strokes and wide counters provide excellent readability at small sizes, which is critical for mobile navigation and menu item descriptions.

Hierarchy is established through weight and scale rather than decorative variations. Headlines are rendered in bold weights to anchor the page, while body copy maintains a generous line height (1.6) to facilitate scanning long menus or delivery instructions. All labels use a medium weight to differentiate them from standard body text.

## Layout & Spacing

The design system employs a **Fluid Grid** model optimized for mobile-first consumption. It follows an 8pt spatial system (with 4pt increments for fine-tuning) to create a rhythmic and predictable vertical flow. 

For mobile layouts, a 4-column grid is used with 20px outer margins and 16px gutters. For larger screens, this scales to a 12-column grid with a maximum content width of 1200px. Content blocks and cards should utilize dynamic padding based on the `md` (16px) and `lg` (24px) spacing units to ensure touch targets remain accessible and the layout feels "breathable."

## Elevation & Depth

To maintain the clean and modern aesthetic, the design system utilizes **Ambient Shadows** and **Tonal Layers**. Depth is used sparingly to signify interactivity and priority.

Primary cards and buttons sit on an elevation level characterized by a very soft, diffused shadow (Blur: 20px, Opacity: 4-6%, Color: Primary Red or Neutral Dark). Instead of heavy borders, the design system uses subtle surface shifts—placing pure white containers (`#FFFFFF`) on the `#FAFAFA` background—to create "soft depth" without visual clutter. Overlays and Modals use a backdrop blur (12px) to maintain context while focusing the user's attention.

## Shapes

The shape language is defined by **Soft Geometricism**. As per the requirements, the base corner radius for standard elements is set between 8px and 12px. 

- **Small Components (8px):** Used for input fields, checkboxes, and small thumbnails.
- **Large Components (12px):** Used for primary buttons, restaurant cards, and menu item containers.
- **Specialty Shapes:** Full pill-rounding is reserved exclusively for status badges and chips (e.g., "Free Delivery" or "Trending") to distinguish them from actionable buttons.

## Components

### Buttons
Primary Call-to-Action (CTA) buttons are rendered in Vibrant Red (#E31837) with white text and a 12px corner radius. Secondary buttons should use a white background with a thin neutral border or the primary red for text, ensuring they do not compete with the main conversion point.

### Cards
Restaurant and product cards must use a white background with a subtle ambient shadow. Images within cards should have an 8px top-corner radius to match the container's aesthetic. High-contrast typography within cards ensures that price and delivery time are instantly legible.

### Inputs
Input fields follow a minimalist "ghost" style: a light gray border (1px) that transitions to the primary red on focus. The 8px corner radius provides a modern, friendly feel while maintaining professional structure.

### Chips & Badges
Use the secondary Warm Yellow/Orange palette for informational badges. These are small, pill-shaped elements that sit on top of imagery or next to titles to provide quick context without overwhelming the primary actions.

### Lists
Menu lists should be separated by thin, low-opacity horizontal dividers (1px, #EEEEEE) rather than boxed containers to maximize horizontal space and maintain a minimalist feel.