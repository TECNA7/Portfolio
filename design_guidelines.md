# Design Guidelines: Kripa Lamichhane Portfolio

## Design Approach: Reference-Based with Coffee Whimsy

**Primary Inspiration**: tuanmon.com's clean, modern portfolio aesthetic with playful interactions
**Theme Overlay**: Coffee culture sophistication - think artisan coffee shop meets contemporary gallery

**Core Principle**: Balance professional polish with delightful coffee-themed whimsy through subtle animations and cohesive color story.

## Color Palette

**Light Mode (Primary)**:
- Background: 40 15% 95% (warm cream)
- Surface: 35 20% 88% (light beige)
- Primary: 25 40% 35% (rich coffee brown)
- Secondary: 30 25% 55% (medium roast brown)
- Accent: 15 35% 65% (caramel latte)
- Text Primary: 20 30% 20% (espresso dark)
- Text Secondary: 25 15% 45% (mocha)

**Dark Mode**:
- Background: 25 20% 12% (dark roast)
- Surface: 25 15% 18% (coffee grounds)
- Primary: 35 25% 75% (cream)
- Secondary: 30 30% 65% (latte foam)
- Text: 40 20% 90% (milk white)

## Typography

**Font Stack**: 
- Headings: 'Plus Jakarta Sans' (Google Fonts) - 600/700 weights
- Body: 'Inter' (Google Fonts) - 400/500 weights
- Accent: 'Playfair Display' (Google Fonts) - 600 italic for quotes/highlights

**Scale**:
- Hero: text-6xl md:text-7xl lg:text-8xl
- Section Headers: text-4xl md:text-5xl
- Subsections: text-2xl md:text-3xl
- Body: text-base md:text-lg
- Captions: text-sm

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 (consistent rhythm)
**Container**: max-w-7xl mx-auto px-6 md:px-12
**Section Padding**: py-16 md:py-24 lg:py-32
**Component Gaps**: gap-6 md:gap-8 lg:gap-12

## Component Library

### Navigation
Sticky header with blur backdrop, coffee bean icon logo, horizontal menu (Projects, Blog, About, Candles, News), subtle shadow on scroll.

### Hero Section (Full-bleed with Image)
- 75vh height, large portrait/workspace image with warm overlay
- Floating coffee beans (SVG via Heroicons or Font Awesome coffee icons) with subtle drift animation on hover
- Centered content: "Kripa Lamichhane" in display font, tagline, CTA button with blurred background (variant="outline")
- Parallax scroll effect on image

### Projects Showcase
Masonry grid (2 cols mobile, 3 desktop) with project cards featuring:
- Hover-lift effect (translate-y-2)
- Project thumbnail, title, tech tags as pills, brief description
- "View Project" link with arrow icon

### Blog Posts
Card grid (1 col mobile, 2 desktop) with:
- Featured image, date badge, title, excerpt
- Read time indicator, category tag
- Cream background cards with brown text

### About Section  
Two-column split (stacks mobile):
- Left: Personal photo with decorative coffee ring SVG border
- Right: Bio text, skills as animated progress beans (fill animation), social links
- Background: scattered faint coffee stain patterns

### Candles Showcase
Product grid (2-3 cols) with:
- High-quality product photos, candle name, scent description
- Price, "Shop" CTA
- Warm glow effect on hover (box-shadow with amber tint)

### News/Updates
Timeline layout with:
- Date markers as coffee cup icons
- News cards with title, snippet, link
- Alternating left-right alignment on desktop

### Footer
Three columns (stacks mobile):
- Brand + tagline, Navigation links, Contact info + social
- Newsletter signup with coffee-themed placeholder ("Brew fresh updates...")
- Background: darkest brown with subtle texture

## Visual Elements

**Coffee Bean Floaters**: 
8-12 floating SVG coffee bean shapes (Font Awesome fa-coffee-bean or custom simple ovals) distributed across hero and section breaks. Subtle opacity (20-30%), slow drift animation (30-60s duration), slight rotation.

**Decorative Accents**:
- Coffee ring stains (faint circular gradients) as section dividers
- Steam wisps (wavy SVG paths) near headings
- Dotted patterns mimicking coffee grounds texture in backgrounds

**Interaction States**:
- Buttons: Scale on hover, no custom outline states
- Cards: Lift + shadow increase
- Links: Underline slide-in from left

## Images

**Hero Image**: Full-width portrait of Kripa in creative workspace or coffee shop setting - warm, naturally lit, professional yet approachable. 1920x1080 minimum.

**About Section**: Professional headshot with warm background, 600x600 minimum.

**Project Thumbnails**: 800x600 showcase images for each project.

**Candles Showcase**: Clean product photography, 600x800 vertical orientation, white/neutral background.

**Blog Post Headers**: 1200x600 featured images, relevant to article topic.

## Responsive Behavior

**Breakpoints**: Mobile-first, md:768px, lg:1024px, xl:1280px
**Grid Adaptations**: Single column mobile, 2-col tablet, 3-col desktop
**Typography**: Reduce scale by 1-2 sizes on mobile
**Spacing**: Halve padding on mobile (py-8 instead of py-16)
**Navigation**: Hamburger menu mobile, full horizontal desktop

## Accessibility & Performance

- All interactive elements min 44px touch target
- Coffee beans decorative only (aria-hidden)
- Image lazy loading below fold
- Smooth scroll behavior for anchor links
- Focus states: 2px brown outline with offset
- Reduce motion: Disable animations for prefers-reduced-motion users