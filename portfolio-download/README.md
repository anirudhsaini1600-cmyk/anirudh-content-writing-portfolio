# Anirudh Saini - Portfolio Website

A professional single-page portfolio website for content writing and digital marketing services.

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📁 Project Structure

```
portfolio-download/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/           # Utilities
│   │   └── index.css      # Global styles
│   ├── public/images/     # Portfolio images
│   └── index.html         # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite build configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. The `.github/workflows/deploy.yml` will automatically deploy your site

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Vite and deploy

## 🌐 Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🛠️ Technologies Used

- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS (Styling)
- Radix UI + shadcn/ui (Components)
- React Hook Form + Zod (Forms)
- TanStack React Query (State management)