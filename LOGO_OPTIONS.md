# PF Logo Options

This file contains the available logo options for the PF project. Choose one and use it as a link in your components.

## Available Logos:

### LOGO1 (Frog with Circle Border)
- **Path:** `/assets/LOGO1.jpg`
- **Description:** Purple frog sitting with white circle border background
- **Style:** Professional, clean, circular framing

### LOGO2 (Simple Frog)
- **Path:** `/assets/LOGO2.jpg`
- **Description:** Purple frog sitting, no border, simple style
- **Style:** Minimalist, friendly, direct

### LOGO3 (Original Frog)
- **Path:** `/assets/LOGO3.jpg`
- **Description:** Purple frog with full body, sitting pose
- **Style:** Cute, complete character design

## How to Use:

Replace the current logo image source in your components with one of these paths:

```tsx
// Example in Navigation.tsx or Footer.tsx
<img 
  src="/assets/LOGO1.jpg"  // or LOGO2.jpg or LOGO3.jpg
  alt="PF Logo" 
  className="w-12 h-12 rounded-lg object-cover"
/>
```

## Current Logo in Use:

The website currently uses **LOGO1** (Frog with Circle Border) in:
- Navigation bar (Navigation.tsx)
- Footer (Footer.tsx)
- Whitepaper page (Whitepaper.tsx)
- Favicon (index.html)

## Recommendation:

**LOGO1** is recommended for the main website as it has a professional circular border that works well in navigation and footer contexts.