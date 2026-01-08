# PF (MEME + AI Crypto) - Website Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Solana.com**: Bold gradients, futuristic feel, crypto-native design
- **OpenAI.com**: Clean AI aesthetics, modern typography
- **Uniswap.org**: DeFi professionalism with playful elements
- **Style**: Futuristic Crypto + AI Tech + Meme Culture Fusion

### Color Palette
- Primary: #0F0F23 (Deep Space Black - background)
- Secondary: #1A1A3E (Dark Purple - sections)
- Accent 1: #6366F1 (Electric Indigo - primary CTA)
- Accent 2: #EC4899 (Hot Pink - highlights)
- Accent 3: #10B981 (Emerald Green - positive metrics)
- Gradient: Linear gradient from #6366F1 to #EC4899 (hero elements)
- Text: #FFFFFF (White), #A0AEC0 (Gray - secondary text)

### Typography
- Heading1: Space Grotesk font-weight 700 (56px) - futuristic, tech-forward
- Heading2: Space Grotesk font-weight 600 (40px)
- Heading3: Space Grotesk font-weight 600 (28px)
- Body/Normal: Inter font-weight 400 (16px) - excellent readability
- Body/Emphasis: Inter font-weight 600 (16px)
- Navigation: Space Grotesk font-weight 600 (18px)
- Monospace: JetBrains Mono font-weight 500 (14px) - for token addresses/code

**Font Selection Rationale**:
- **Space Grotesk**: Modern geometric sans-serif perfect for crypto/tech branding
- **Inter**: Highly readable for body text, professional yet approachable
- **JetBrains Mono**: Technical credibility for blockchain addresses

### Key Component Styles
- **Buttons**: Gradient background (indigo to pink), white text, 8px rounded, hover: scale 1.05 + glow effect
- **Cards**: Dark purple background (#1A1A3E), 1px border (#6366F1 with 20% opacity), 16px rounded, hover: lift 4px + border glow
- **Stats Cards**: Glass morphism effect, backdrop blur, subtle gradient borders
- **Forms**: Dark inputs with gradient bottom border on focus

### Layout & Spacing
- Hero section: Full viewport height with animated gradient background
- Content sections: 120px vertical padding
- Card grid: 3 columns desktop, 2 tablet, 1 mobile, 32px gaps
- Max content width: 1280px
- Consistent 24px spacing between elements

### Animation & Interactions
- Scroll-triggered fade-in animations for sections
- Floating animation for hero elements
- Gradient text animations
- Smooth hover transitions (300ms ease-out)
- Particle effects in hero background
- Counter animations for tokenomics numbers

### Images to Generate
1. **hero-ai-brain-network.jpg** - Abstract AI neural network with glowing nodes, purple and pink gradients, futuristic digital brain (Style: 3d, cyberpunk aesthetic, high contrast)
2. **tokenomics-pie-chart-visual.jpg** - Stylized 3D pie chart visualization with glowing segments, floating in space (Style: 3d, minimalist, tech-forward)
3. **airdrop-daily-distribution.jpg** - Abstract visualization of tokens raining down, particle effects, community hands reaching up (Style: 3d, dynamic, energetic)
4. **ai-roadmap-timeline.jpg** - Futuristic timeline visualization with AI elements, holographic style, year markers 2026-2030 (Style: 3d, holographic, sci-fi)
5. **community-network-globe.jpg** - Digital globe with connection lines, representing global community, glowing nodes (Style: 3d, network visualization, modern)
6. **meme-culture-collage.jpg** - Artistic collage of meme elements mixed with AI/tech symbols, vibrant colors (Style: cartoon, playful yet sophisticated)
7. **logo-pf-emblem.png** - Bold "PF" logo with AI circuit pattern integration, gradient colors (Style: vector-style, modern, memorable)
8. **background-pattern-circuit.jpg** - Subtle circuit board pattern for section backgrounds, dark with glowing traces (Style: minimalist, technical, subtle)

---

## Development Tasks

### 1. Project Setup & Configuration
- Update index.html title to "PF - The Meme That Thinks | AI-Powered Crypto"
- Add meta descriptions for SEO
- Configure fonts (Space Grotesk, Inter, JetBrains Mono)
- Update favicon

### 2. Generate All Images
- Use ImageCreator.generate_image for all 8 images listed above
- Ensure images match design guidelines and color palette
- Store generated image URLs/paths for use in components

### 3. Homepage Structure (src/pages/Index.tsx)
- Hero Section: "The Meme That Thinks" tagline, animated background, CTA buttons
- Vision Section: Project philosophy and narrative
- Tokenomics Section: Interactive visualization of 70B token distribution
- Airdrop Mechanism: Daily distribution explanation with animations
- AI Roadmap: Timeline from 2026-2030+
- Why PF Section: Unique differentiation points
- Community Section: Join the revolution CTA
- Footer: Social links, documentation

### 4. Components to Create

#### 4.1 Navigation (src/components/Navigation.tsx)
- Sticky header with blur effect
- Logo + menu items (Vision, Tokenomics, Airdrop, AI, Community)
- Connect wallet button (visual only, no functionality)
- Mobile responsive hamburger menu

#### 4.2 Hero Section (src/components/Hero.tsx)
- Full viewport height
- Animated gradient background with particles
- Main tagline with gradient text effect
- Subtitle explaining PF concept
- Two CTAs: "Read Whitepaper" and "Join Community"
- Floating AI brain image

#### 4.3 TokenomicsCard (src/components/TokenomicsCard.tsx)
- Display token distribution percentages
- Animated pie chart or bar visualization
- Hover effects showing detailed breakdown
- Total supply: 70,000,000,000 PF

#### 4.4 AirdropTimeline (src/components/AirdropTimeline.tsx)
- Visual timeline of daily distribution
- Activity score breakdown (40%, 30%, 20%, 10%)
- Estimated daily tokens counter animation
- Anti-bot protection highlights

#### 4.5 AIRoadmap (src/components/AIRoadmap.tsx)
- Vertical timeline: 2026 → 2027 → 2028 → 2029 → 2030+
- Each phase with icon, title, description
- Scroll-triggered animations
- Futuristic styling

#### 4.6 StatsSection (src/components/StatsSection.tsx)
- Key metrics cards:
  - Fair Launch Score: 97/100
  - Community Ownership: 60%
  - AI Investment: $8.4B equivalent
  - Distribution Period: 5+ years
- Glass morphism design
- Counter animations

#### 4.7 DifferentiationGrid (src/components/DifferentiationGrid.tsx)
- Grid of unique selling points
- Icon + title + description format
- Hover effects with gradient borders
- 6 key differentiators

#### 4.8 Footer (src/components/Footer.tsx)
- PF logo and tagline
- Quick links (Documentation, Whitepaper, Roadmap)
- Social media icons (Twitter, Discord, Telegram, GitHub)
- Copyright and disclaimer

### 5. Styling & Animations
- Implement gradient text utilities in index.css
- Add scroll-triggered fade-in animations using Framer Motion or CSS
- Create floating animation keyframes
- Add particle effect library (tsparticles) for hero background
- Implement smooth scroll behavior
- Add hover glow effects for cards and buttons

### 6. Content Integration
- Add all tokenomics data (60% airdrop, 18% liquidity, 12% AI, 3% team, 7% ecosystem)
- Add airdrop mechanism details (Activity Score formula)
- Add AI roadmap phases with descriptions
- Add differentiation points (7 key advantages)
- Add vision and narrative text

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop), 1280px (large)
- Adjust typography scales for mobile
- Stack cards vertically on mobile
- Optimize hero section for mobile viewport

### 8. Performance Optimization
- Lazy load images below the fold
- Optimize generated images
- Minimize bundle size
- Add loading states for animations

### 9. Final Polish
- Add subtle micro-interactions
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test all animations and transitions
- Cross-browser testing
- Add smooth scroll to section anchors

### 10. Testing & Deployment
- Run `pnpm run lint` to check for errors
- Run `pnpm run build` to verify production build
- Test all interactive elements
- Verify responsive design on multiple devices
- Check UI rendering quality with CheckUI.run

---

## Technical Notes
- Use Tailwind CSS for all styling
- Leverage shadcn/ui components where applicable (Button, Card, etc.)
- Use React hooks for animations and state management
- Implement intersection observer for scroll animations
- Keep components modular and reusable
- Follow TypeScript best practices
- Ensure all text content is in Arabic where specified by user