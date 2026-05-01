---
name: Premium Editorial AI
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
  on-surface-variant: '#4d444e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7f747f'
  outline-variant: '#d0c3cf'
  surface-tint: '#7c4b8c'
  primary: '#431453'
  on-primary: '#ffffff'
  primary-container: '#5b2c6b'
  on-primary-container: '#d097df'
  inverse-primary: '#ecb2fb'
  secondary: '#4a6700'
  on-secondary: '#ffffff'
  secondary-container: '#bbf14b'
  on-secondary-container: '#4d6c00'
  tertiary: '#2b292f'
  on-tertiary: '#ffffff'
  tertiary-container: '#413f45'
  on-tertiary-container: '#aeaab2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fad7ff'
  primary-fixed-dim: '#ecb2fb'
  on-primary-fixed: '#320144'
  on-primary-fixed-variant: '#633373'
  secondary-fixed: '#bef44d'
  secondary-fixed-dim: '#a3d731'
  on-secondary-fixed: '#141f00'
  on-secondary-fixed-variant: '#374e00'
  tertiary-fixed: '#e5e1e9'
  tertiary-fixed-dim: '#c9c5cd'
  on-tertiary-fixed: '#1c1b20'
  on-tertiary-fixed-variant: '#48464c'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
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
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 2px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system for PROSONΛ is built on the intersection of technical precision and editorial elegance. It leverages a high-end, AI-first aesthetic that feels both futuristic and grounded in human craftsmanship. By blending the structured utility of productivity tools like Linear with the expressive, spacious layouts of premium digital publications, the system creates an atmosphere of "intelligent luxury."

The visual style is **Minimalism** with an emphasis on "Airy Premium." It avoids heavy shadows or complex gradients in favor of structural clarity, precise borders, and a restricted but high-contrast palette. The goal is to evoke a sense of calm authority, ensuring that the AI-driven output of the studio remains the focal point within a sophisticated framework.

## Colors

The color palette is anchored by a deep, regal Primary Purple, which signifies the studio's premium positioning. This is balanced by a Warm Off-white background that prevents the interface from feeling sterile or overly "techy." 

An Accent Lime is used sparingly as a high-visibility call-to-action color, injecting energy and a modern edge into the otherwise muted palette. The use of transparency in borders (utilizing a tint of the primary purple) ensures that structural elements feel integrated and soft rather than harsh, maintaining the airy aesthetic.

## Typography

This design system utilizes a dual-type approach to balance character with readability. **Space Grotesk** serves as the primary headline face, providing a technical, geometric rhythm that feels aligned with AI and innovation. 

**Inter** is utilized for all functional text, body copy, and UI labels. To lean into the editorial aesthetic, the `label-caps` style is used for categorization and eyebrow headings, employing generous letter-spacing and a muted color to create a sophisticated hierarchical layer without adding visual weight.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop environments, centered with wide gutters to emphasize the "airy" brand pillar. A 12-column grid is standard, but content should frequently be constrained to 8 or 10 columns to preserve white space.

The spacing rhythm is based on a 4px baseline, with a preference for larger gaps (32px and 64px) between major sections to mimic a high-end magazine layout. Elements should never feel "crowded"; if in doubt, increase the margin.

## Elevation & Depth

To maintain a minimal and premium feel, the design system rejects heavy drop shadows. Depth is achieved through **Low-contrast outlines** and **Tonal layers**.

- **Level 0 (Background):** Warm Off-white (#FAF9F7).
- **Level 1 (Cards/Surfaces):** Pure White (#FFFFFF) with a 1px soft purple border (rgba(91, 44, 107, 0.12)).
- **Interaction:** On hover, a subtle 10% opacity purple tint may be applied to surfaces, or a very soft, diffused ambient shadow (0px 4px 20px rgba(91, 44, 107, 0.04)) can be used to indicate lift.

## Shapes

The design system uses a multi-tiered approach to corner radii to define component hierarchy:
- **Major Components (Cards, Modals):** 16px radius (`rounded-xl`) to feel approachable and modern.
- **Interactive Elements (Buttons, Inputs):** 8px radius (`rounded-lg`) for a more precise, functional feel.
- **Meta-data (Pills, Tags):** 999px radius (Pill-shaped) to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #5B2C6B with White text. Used for the main action. 8px radius.
- **Secondary:** Transparent background with a 1px Primary Purple border and Primary Purple text. Used for supporting actions.
- **Lime CTA:** Solid #C8FF57 with Dark text. Reserved for high-conversion "Studio" or "Get Started" actions.

### Cards
Cards are the primary container for the design system. They must feature a #FFFFFF background, 32px internal padding, a 16px border radius, and the standard 1px tinted border. No heavy shadows.

### Input Fields
Inputs should mirror the 8px radius of buttons. They feature a #FFFFFF background and a 1px border. Focus states should transition the border color to the solid Primary Purple without adding an outer glow.

### Chips & Pills
Used for status indicators or categories. These must be 999px pill-shaped with `label-caps` typography inside. Use the Light Purple Tint (#F3EEF6) as the background for a subtle, premium look.

### Lists
Lists should be clean with 1px horizontal dividers using the standard border color. Icons used within lists should be monochrome (Primary Purple or Dark Text) with a thin 1.5pt stroke weight.