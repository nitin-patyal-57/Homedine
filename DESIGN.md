---
name: Organic Elegance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#424844'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727974'
  outline-variant: '#c2c8c2'
  surface-tint: '#4a6457'
  primary: '#183126'
  on-primary: '#ffffff'
  primary-container: '#2e473b'
  on-primary-container: '#99b5a5'
  inverse-primary: '#b1cdbd'
  secondary: '#3f6833'
  on-secondary: '#ffffff'
  secondary-container: '#bdedaa'
  on-secondary-container: '#436d37'
  tertiary: '#501b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2f0e'
  on-tertiary-container: '#f2976e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce9d9'
  primary-fixed-dim: '#b1cdbd'
  on-primary-fixed: '#062016'
  on-primary-fixed-variant: '#334c40'
  secondary-fixed: '#c0f0ad'
  secondary-fixed-dim: '#a4d393'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#28501e'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#753413'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the philosophy of "Quiet Sustainability." It targets a discerning, environmentally-conscious demographic that values both ethical production and high-end aesthetics. The visual language balances minimalist modernism with tactile warmth, ensuring the brand feels premium yet approachable.

The aesthetic follows a **Minimalist Tactile** approach. It utilizes generous whitespace (breathing room) to highlight product craftsmanship. Imagery should feature natural, organic textures—such as linen, reclaimed wood, and stone—bathed in soft, diffuse sunlight. The emotional response is one of serenity, quality, and conscious living.

## Colors

The palette is derived from a Mediterranean forest at dawn. 

- **Deep Forest Green (#2E473B):** Used for primary typography, headers, and high-impact UI elements to establish authority and depth.
- **Sage Green (#4F7942):** The brand’s signature color, used for primary actions and highlighting eco-credentials.
- **Warm Cream (#F9F6F0):** The foundational canvas. This off-white provides a softer, more premium feel than pure white, reducing eye strain and enhancing the "natural" vibe.
- **Soft Terracotta (#D27D56):** An accent reserved for meaningful highlights, active states, or promotional badges, providing a grounded, earthy contrast to the greens.

## Typography

This design system employs a classic high-contrast pairing. 

**Playfair Display** is used for headlines to evoke the feel of a premium editorial magazine. It should be used with tighter letter-spacing for large displays to maintain a cohesive, "locked-in" look. 

**Inter** provides a utilitarian counterpoint for body text and functional UI elements. It is chosen for its exceptional legibility at small sizes and its neutral character, which allows the product photography and serif headlines to remain the focal point. Use 1.6x line height for body copy to enhance the airy, minimalist feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within the viewport to maintain a sense of curated exclusivity. 

- **Desktop:** A 12-column grid with a 1280px maximum width. Gutters are set to 24px to allow individual elements significant room.
- **Rhythm:** All spacing (margins, padding) must be a multiple of the 8px base unit. 
- **Whitespace:** Emphasize "negative space" between sections (e.g., 120px-160px vertical padding) to prevent the store from feeling cluttered or "salesy."
- **Mobile:** Transition to a 2-column or 1-column stack with 20px side margins.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Surfaces:** Use subtle shifts between the Warm Cream background and slightly lighter containers for cards.
- **Shadows:** Avoid harsh, black shadows. Use extremely soft, diffused shadows with a slight tint of the Primary color (e.g., `rgba(46, 71, 59, 0.08)`) to create a "floating" effect for cards and buttons.
- **Interactions:** On hover, cards should lift slightly (y-axis shift) and the shadow should expand and soften further, mimicking physical depth.

## Shapes

The shape language is "Softly Architectural." 

Main UI components like cards and input fields use a **12px radius** (`rounded-lg`) to balance modern precision with organic friendliness. Small buttons and badges utilize a **Pill-shape** (fully rounded) to contrast against the more structured product grid, making them instantly recognizable as interactive or informational anchors.

## Components

- **Buttons:** Primary buttons are solid Deep Forest Green with cream text. Secondary buttons are outlined in Sage Green. All buttons use the pill-shape style.
- **Product Cards:** Feature a full-bleed image with a 12px corner radius. Title and price are placed below the image in a clean, left-aligned stack. A subtle "Quick Add" button appears on hover.
- **Pill Badges:** Used for 'New' or 'Eco-Choice'. These are small, high-contrast badges with white text on Terracotta or Sage backgrounds.
- **Hero Slider:** A wide-format component using high-resolution lifestyle imagery. Navigation is handled via minimal, outlined arrow icons or a subtle dash-indicator at the bottom.
- **Input Fields:** Outlined with a 1px border in a muted version of the Primary color. Focus states transition the border to Sage Green with a soft outer glow.
- **Icons:** Use a custom, thin-stroke (1.5pt) outlined icon set. Icons should be light and airy, avoiding heavy fills.