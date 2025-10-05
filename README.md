# Alegria 2026 - Next.js 15 with Tailwind CSS v5

A Marvel-themed event website built with Next.js 15, TypeScript, and Tailwind CSS v5.

## 🚀 Migration Complete

This project has been successfully migrated from **React + Vite** to **Next.js 15** with **Tailwind CSS v5**.

### What Changed:
- ✅ **Framework**: React + Vite → Next.js 15 with App Router
- ✅ **Build Tool**: Vite → Next.js built-in compiler
- ✅ **Routing**: React Router → Next.js App Router
- ✅ **Styling**: Tailwind CSS v3 → Tailwind CSS v5 (alpha)
- ✅ **Project Structure**: src/ → app/ directory structure
- ✅ **Assets**: Moved to public/ directory
- ✅ **TypeScript**: Updated configuration for Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v5 (alpha)
- **UI Components**: Shadcn/UI with Radix UI
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theme**: Next Themes

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── providers.tsx      # Client providers
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   └── assets/          # Images and media
└── ...
```

## 🎨 Features

- **Marvel-themed Design**: Dark theme with red, blue, and gold accents
- **Responsive Layout**: Mobile-first design
- **Interactive Elements**: Custom cursor, animations, loading screen
- **Modern UI**: Glass morphism effects, glowing elements
- **Performance**: Optimized with Next.js 15
- **Type Safety**: Full TypeScript support

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
