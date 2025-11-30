# Design Guidelines: Hari Rajashekar Portfolio

## Design System

### Color Palette
- **Primary Background**: #0A0A0A (dark gray, not pure black)
- **Secondary Background**: #151515 (cards, sections)
- **Accent Green**: #10B981 (muted emerald - CTAs, highlights)
- **Text Primary**: #F5F5F5 (off-white)
- **Text Secondary**: #A3A3A3 (gray for descriptions)
- **Border/Divider**: #262626 (subtle borders)

### Typography
- **Headings**: 'Inter', sans-serif - Bold (700-800 weight)
- **Body**: 'Inter', sans-serif - Regular (400-500 weight)
- **Monospace**: 'JetBrains Mono', monospace (for metrics/code)
- **Hero Name**: text-4xl mobile → text-6xl desktop
- **Section Headers**: Large, left-aligned

### Spacing System (Tailwind)
Use consistent spacing: 4, 8, 16, 24, 32, 48, 64, 96 px units
Mobile-first: Tighter spacing on small screens, breathing room on desktop

## Page Layouts

### Home Page Hero Section
- **Full viewport height**, centered content
- **Name**: "HARI RAJASHEKAR" (large, bold, #F5F5F5)
- **Title**: "AI-Powered Automation Specialist" (medium, #10B981 accent)
- **Tagline**: Multi-line hero copy about building automation systems that scale
- **Metrics Badges**: Display as inline cards showing "90% Booking Time Reduction", "10x Revenue Growth", "99.8% System Uptime"
- **Primary CTA**: Large button "Let's Talk" (#10B981 background, hover effect)
- **Secondary CTA**: Text link "Download Resume"
- **Background**: Subtle gradient overlay, slight vignette effect
- **Animation**: Staggered fade-in (name → title → tagline → CTAs)

### Featured Projects Section
- **Header**: "Featured Work" (large heading, left-aligned)
- **Grid Layout**: 3 columns desktop, 2 columns tablet, 1 column mobile
- **Show**: Top 3 projects (AI Voice Agent, Nonprofit Redesign, NutriScan)
- **CTA**: "View All Projects" button below grid, centered

### Projects Page
- **Header**: "All Projects" with subtitle "Automation · AI Products · Research"
- **Grid**: All 6 projects in responsive grid (same layout as featured)
- **Order**: Show automation projects first, then AI products, then research

### Contact Page
- **Two-column layout** (desktop), stacked (mobile)
- **Left Column (60%)**: 
  - Header: "Book a Free Consultation"
  - Subtext explaining automation discussion
  - Cal.com booking embed (styled to dark theme)
- **Right Column (40%)**:
  - Header: "Or Send a Message"
  - Form fields: Name, Email, Subject, Message (textarea)
  - Submit button: "Send Message" (#10B981)
  - Success message on submit
- **Contact Info**: Email, LinkedIn, GitHub, Location (Austin, Texas)

## Project Card Component

### Structure (Reusable for all projects)
1. **Container**: #151515 background, #262626 border, rounded corners
2. **Hover Effect**: Lift (translate Y), shadow increase, border → #10B981
3. **Category Tag**: Top-left pill badge (AUTOMATION/AI PRODUCT/RESEARCH), #10B981 with 20% opacity
4. **Visual Asset**: 16:9 image/video thumbnail OR abstract icon for projects without visuals
5. **Title**: Bold, large (#F5F5F5)
6. **Description**: Subtitle (#A3A3A3), one-line
7. **Hero Metric**: Large bold number in #10B981 (e.g., "90% Time Reduction")
8. **Tech Stack Pills**: Horizontal row, border style, #A3A3A3 text
9. **CTA**: "View Project", "Watch Demo", or "Read Paper" button/link

## Navigation System

### Bottom Navigation Bar (Kai Void inspired)
- **Position**: Fixed to bottom viewport on all pages
- **Layout**: Centered horizontal nav with HOME | PROJECTS | CONTACT
- **Styling**: #151515 background with blur backdrop
- **Active Indicator**: #10B981 underline or dot
- **Hover**: Subtle scale or color change
- **Mobile**: Full width, smaller text

### Footer
- **Content**: "© 2024 Hari Rajashekar", Resume/LinkedIn/GitHub/Email links
- **Styling**: #A3A3A3 text, links hover to #10B981
- **Position**: Above bottom nav on all pages

## Responsive Breakpoints
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

### Mobile Adjustments
- Hero: Stack metric badges vertically, full-width CTAs
- Project Grid: 1 column mobile → 2 tablet → 3 desktop
- Contact: Stack booking above form
- Bottom Nav: Full width, optional icons

## Accessibility (WCAG 2.2 Critical)
- **Contrast**: ≥4.5:1 text-to-background, ≥3:1 large text
- **Keyboard Navigation**: Full support with visible focus indicators
- **ARIA Labels**: All interactive elements properly labeled
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Skip Links**: "Skip to main content" for keyboard users

## Animations (Framer Motion)
- **Hero**: Staggered entrance animation
- **Project Cards**: Hover transitions (lift, border color)
- **Page Transitions**: Smooth route changes
- **Keep Minimal**: Avoid distracting animations

## Images
- **Hero Section**: No large hero image required (text-focused)
- **Project Cards**: Screenshots/videos for Voice Agent, Nonprofit, NutriScan
- **Abstract Icons**: Use Lucide React icons for Roche, Veeva projects
- **Research Card**: Research/document icon