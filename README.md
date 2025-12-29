# Unreal Cheat Casino - UK Casino Affiliate Website

A modern, responsive UK casino affiliate website built with React, TypeScript, and Tailwind CSS. Features a liquid motion design system with forest green color theme.

## 🎯 Project Overview

This is a fully functional casino affiliate website targeting the UK market. It provides expert reviews, payment information, and educational content about online casinos.

### Domain Information
- **Domain**: unrealcheatcasino.com
- **Email**: info@unrealcheatcasino.com
- **Phone**: +44 7915207386

## 🏗️ Project Structure

```
/workspace
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar with mobile menu
│   │   ├── Footer.tsx       # Footer with compliance badges
│   │   └── ScrollToTop.tsx  # Auto scroll to top on route change
│   ├── pages/               # Route-level pages
│   │   ├── Home.tsx         # Homepage with 7 sections
│   │   ├── About.tsx        # About page with 6 sections
│   │   └── PaymentMethods.tsx # Payment methods page with 7 sections
│   ├── data/                # Configuration files
│   │   ├── color_theme.txt  # Forest Green color palette
│   │   ├── design.txt       # Liquid Motion style system
│   │   ├── footer.json      # Compliance badges data
│   │   └── pages.json       # Page structure definition
│   ├── App.tsx              # Main app component with routing
│   ├── index.css            # Global styles and animations
│   └── main.tsx             # Entry point
└── public/
    ├── logo.png             # Site logo and favicon
    └── images/
        ├── design/          # 7 casino-themed images (all used)
        └── [compliance badges]
```

## 🎨 Design System

### Color Palette: Forest Green
- Background: `#14532D`
- Surface: `#166534`
- Primary: `#22C55E`
- Secondary: `#4ADE80`
- Accent: `#BBF7D0`
- Text Primary: `#F0FDF4`
- Text Secondary: `#DCFCE7`

### Style System: Liquid Motion
- Fluid, organic shapes with flowing transitions
- Extreme rounding (rounded-3xl, rounded-full)
- Smooth animations (duration-500, duration-700)
- Gradient backgrounds and blob-like cards
- No sharp corners or rigid grids

## 📄 Pages & Sections

### Home Page (`/`)
1. **Hero** - Compact hero with 6 navigation buttons using # anchors
2. **Offers** - Exclusive casino offers
3. **Mobile** - Mobile gaming features
4. **Security** - Safety and licensing information
5. **How It Works** - 3-step process
6. **Bonuses** - Types of casino bonuses
7. **Benefits** - Why choose our recommendations

### About Page (`/about`)
1. **Hero** - Introduction
2. **Compliance** - Regulatory information
3. **Press** - Recognition and statistics
4. **Editorial Policy** - Content standards
5. **Review Process** - 8-step evaluation
6. **Careers** - Job opportunities

### Payment Methods Page (`/payment-methods`)
1. **Hero** - Introduction
2. **Bank Transfer** - Detailed information
3. **CTA** - Call to action
4. **Deposits** - Popular deposit methods
5. **FAQ** - Common questions
6. **Verification** - Account verification process
7. **Payment Overview** - Comparison table

## 🚀 Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **Icons**: Lucide React 0.545.0
- **Build Tool**: Vite 7.1.7
- **SEO**: React Helmet Async 2.0.5

## 🛠️ Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## ✨ Key Features

- **Responsive Design**: Mobile-first approach with hamburger menu
- **Smooth Navigation**: Automatic scroll-to-top on page changes
- **Anchor Links**: Hero section buttons scroll to page sections
- **Liquid Animations**: Custom CSS animations for organic feel
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessibility**: Proper heading hierarchy and ARIA labels
- **Compliance**: Footer badges for responsible gambling organizations
- **Fast Performance**: Optimized images and code splitting

## 🖼️ Image Usage

All 7 design images are utilized across the pages:
- `114807112.webp` - Home hero
- `297513745.jpg` - Home mobile section
- `casino6.webp` - Home security section
- `img80.jpg` - Home benefits section
- `jonathan-petersson-gQhWMkYh3Yc-unsplash.jpg` - About compliance
- `marin-tulard-9sbO_vzyG40-unsplash.jpg` - About editorial policy
- `md_gg8gt3_2bab66532a6997df97d2cf5ef4bb79fa14ae7bec.jpg` - About careers

## 🔒 Compliance & Responsible Gaming

The website promotes responsible gambling and only features UKGC-licensed casinos. Footer includes links to:
- Gambling Therapy
- GambleAware
- GamCare
- UK Gambling Commission
- GBGA

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Build Output

The production build creates optimized assets in the `dist/` directory:
- Minified CSS (~28KB)
- Optimized JavaScript (~227KB)
- Compressed with gzip

## 📝 License

This is a proprietary project for unrealcheatcasino.com. All rights reserved.

---

Built with ❤️ for the UK online casino community
