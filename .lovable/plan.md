

# Logo and Primary Color Update

## Overview
Integrate the new Ambiance Renovation logo and update the primary color to `#35799d` (a medium teal-blue) across the entire site.

## Changes

### 1. Copy Logo to Project
- Copy `user-uploads://logo.png` to `src/assets/logo.png`
- Also copy to `public/logo.png` for favicon/meta usage

### 2. Update Primary Color (`#35799d`)
The hex `#35799d` converts to approximately **HSL(197, 48%, 41%)**. This will replace the current deep navy (`215 35% 26%`) throughout `src/index.css`:

- **Light mode primary**: `197 48% 41%`
- **Dark mode primary**: `197 48% 51%` (slightly lighter for dark backgrounds)
- **Gradients**: Updated to use the new primary hue
- **Ring, sidebar-primary, sidebar-ring**: All updated to match

### 3. Header Logo (`src/components/Header.tsx`)
- Replace the `Paintbrush2` icon + text with an `<img>` tag using the imported logo
- Remove the Paintbrush2 icon import
- Import the logo from `@/assets/logo.png`
- Size the logo appropriately (~40-48px height)

### 4. Footer Brand (`src/components/Footer.tsx`)
- Replace the text-only "Ambiance Renovation" heading with the logo image
- Import logo from `@/assets/logo.png`

### 5. Update Favicon (`index.html`)
- Update the favicon `<link>` to point to `/logo.png` (from the public directory copy)

---

## Files to Modify

| File | Change |
|------|--------|
| `src/assets/logo.png` | New file (copy from upload) |
| `public/logo.png` | New file (copy for favicon) |
| `src/index.css` | Update primary color HSL values and gradients |
| `src/components/Header.tsx` | Replace icon+text with logo image |
| `src/components/Footer.tsx` | Add logo image to footer brand section |
| `index.html` | Update favicon to `/logo.png` |

