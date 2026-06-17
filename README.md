# TRx WEB — Professional Websites in 48 Hours

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**TRx WEB** is a premium web development platform delivering professional, high-performance websites in just 48 hours. This is the official website showcasing our services, portfolio, and client testimonials.

## 🚀 Features

### Core Services
- **Business Websites** - Professional sites that convert visitors into customers
- **E-Commerce Stores** - Full-featured online stores with payment gateways
- **Portfolio Websites** - Showcase your work beautifully
- **Blogging Platforms** - Share stories with fast, scalable solutions
- **Online Course Websites** - Full LMS with course delivery
- **Restaurant Websites** - Specialized for food businesses
- **School/Educational Websites** - Tailored for institutions
- **Event/Conference Websites** - Manage and promote events

### Key Highlights
✅ **48-Hour Delivery** - Fast turnaround guaranteed  
✅ **100% Mobile Responsive** - Perfect on all devices  
✅ **SEO Ready** - Built with search optimization  
✅ **Secure & Hosted** - SSL, CDN, uptime monitoring  
✅ **Admin Dashboard** - Easy content management  
✅ **24/7 Support** - WhatsApp and email support  

## 🎨 Design Quality

This project implements **mvpblocks professional design standards** with:

- **HomeBadge Component** - Gradient border effects with radial hover glow and animated SVG
- **Beam Animations** - Animated circuit board lines with gradient effects
- **Section Top Glow** - Centered ellipse glow and hairline patterns
- **Bento Grid Layouts** - Modern featured card layouts with hover effects
- **Gradient Typography** - Professional text effects for headings
- **Testimonial Badges** - Interactive buttons with expanding animations
- **Glass-Morphism UI** - Frosted glass effects with grain texture
- **Smooth Animations** - Framer Motion powered interactions

## 🛠 Tech Stack

### Frontend
- **Next.js 14.2.35** - React framework with SSR and SSG
- **React 18.3** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12** - Advanced animations 

### Components & UI
- **Radix UI** - Headless component library
- **Lucide Icons** - Beautiful SVG icons
- **Sonner** - Toast notifications

### Backend & Database
- **Supabase** - PostgreSQL database and authentication
- **Next.js API Routes** - Serverless backend functions

### Development Tools
- **ESLint 8** - Code linting
- **TypeScript** - Type checking
- **Next.js Built-in Optimization** - Image optimization with Sharp

## 📋 Prerequisites

- **Node.js** 18+ (20+ recommended for better compatibility)
- **npm** or **yarn** package manager
- Modern web browser

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/dilliramsodari123-del/trx-web.git
cd trx-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=977xxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://trxweb.store
```

**Note:** Never commit `.env.local` to version control. Environment variables starting with `NEXT_PUBLIC_` are public and safe to expose.

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
trx-web/
├── src/
│   ├── app/
│   │   ├── (admin)/              # Admin dashboard routes
│   │   ├── api/                  # API endpoints
│   │   ├── blog/                 # Blog pages
│   │   ├── contact/              # Contact form
│   │   ├── how-it-works/         # Process page
│   │   ├── portfolio/            # Portfolio showcase
│   │   ├── pricing/              # Pricing page
│   │   ├── templates/            # Website templates
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   │
│   ├── components/
│   │   ├── admin/                # Admin components
│   │   ├── sections/             # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── services.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── faq.tsx
│   │   │   └── final-cta.tsx
│   │   ├── shared/               # Shared components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── home-badge.tsx    # NEW: Hero badge
│   │   │   ├── section-top-glow.tsx  # NEW: Section decorations
│   │   │   └── testimonials-badge.tsx # NEW: Interactive badge
│   │   └── ui/                   # UI primitives
│   │       ├── button.tsx
│   │       ├── beam.tsx          # NEW: Animated beams
│   │       ├── home-badge.tsx    # NEW: Badge component
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── constants.ts          # App constants
│   │   ├── utils.ts              # Utility functions
│   │   └── supabase/             # Supabase client setup
│   │
│   ├── types/                    # TypeScript types
│   ├── hooks/                    # Custom React hooks
│   ├── providers/                # React providers
│   └── middleware.ts             # Next.js middleware
│
├── public/
│   ├── logo.png                  # Brand logo (favicon)
│   ├── images/                   # Static images
│   └── assets/                   # Other assets
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── eslint.config.mjs
└── README.md
```

## 🎯 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with service overview |
| Contact | `/contact` | Contact form for inquiries |
| How It Works | `/how-it-works` | 4-step process explanation |
| Portfolio | `/portfolio` | Showcase of completed projects |
| Pricing | `/pricing` | Service pricing and calculator |
| Blog | `/blog` | Blog posts and articles |
| Admin Dashboard | `/admin/dashboard` | Lead management and analytics |

## 🔄 Recent Design Improvements (Latest Commit)

All items from the gap analysis have been successfully implemented:

1. **✅ HomeBadge Component** - Gradient border with hover glow effects
2. **✅ Beam Animation** - Animated circuit board lines on hero section
3. **✅ Hero Gradient Typography** - Professional fading edge effect on headings
4. **✅ Section Top Glow** - Centered ellipse glow + hairline patterns
5. **✅ Services Bento Grid** - Redesigned with featured cards and hover effects
6. **✅ Testimonial Cards** - Enhanced with rounded-3xl, better gradients, hover scale
7. **✅ Interactive Badge** - Testimonials badge with expanding hairlines
8. **✅ CTA Colors** - Updated from blue/violet to rose/primary theme
9. **✅ Favicon** - Brand logo as favicon
10. **✅ Glass Texture** - Subtle grain texture via CSS gradients

### Latest Commits
```
0473580 refactor: clean build cache and update component imports
f8597b0 fix: resolve ESLint and React version compatibility issues
92b98db feat: mvpblocks design quality - HomeBadge, Beam, gradients, bento layout, favicon
```

## 🔐 Environment Variables

### Required
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

### Optional
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp business number
- `NEXT_PUBLIC_SITE_URL` - Website base URL

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

```bash
# Or deploy directly with Vercel CLI
vercel
```

### Deploy to Other Platforms

This project works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Docker containers
- Self-hosted servers

## 📊 Performance

- **Build Size:** ~301 KB First Load JS
- **Pages Generated:** 22 static + dynamic routes
- **Bundle:** Optimized with code splitting
- **Images:** Automatic optimization with Sharp

## 🐛 Troubleshooting

### Build Error: "Can't resolve '@/components/shared/cycling-text'"
**Solution:** Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

### Dependency Conflicts
**Solution:** Use compatible versions (ESLint v8 with Next.js 14.2.35):
```bash
npm install
```

### Environment Variables Not Loading
**Solution:** 
- Ensure `.env.local` file exists
- Variables must start with `NEXT_PUBLIC_` to be public
- Restart dev server after changes

## 📈 Analytics & Monitoring

- **WhatsApp Integration** - Direct customer communication
- **Lead Tracking** - Admin dashboard for lead management
- **Form Submissions** - Automatic capture via Supabase
- **Site Traffic** - Monitor user engagement

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Commit Convention

We follow semantic versioning:
- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code restructuring
- `style:` CSS/styling changes
- `docs:` Documentation updates
- `chore:` Build/config updates

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

**TRx WEB** - Professional Web Development Studio  
Based in Nepal 🇳🇵

- 📧 Email: contact@trxweb.store
- 📱 WhatsApp: +977-9765662427
- 🌐 Website: https://trxweb.store

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Database by [Supabase](https://supabase.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspired by [mvpblocks](https://mvpblocks.com/)

---

**Made with ❤️ by TRx WEB - Delivering Excellence in 48 Hours**
