
# B12-A08-Hero-App

# HERO.IO - App Store Showcase

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-brightgreen)](https://your-vercel-app.vercel.app)  
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blueviolet)](https://tailwindcss.com)  
[![React Router](https://img.shields.io/badge/React%20Router-6.x-orange)](https://reactrouter.com)

## 📖 Overview

HERO.IO is a modern, responsive web application that simulates an app store experience. Built with React, it showcases a collection of apps with features like browsing, searching, installing/uninstalling apps, viewing detailed app information with review charts, and managing installations via localStorage. The app emphasizes a clean, user-friendly interface inspired by Figma designs, with smooth navigation, live search, and loading animations.

This project fulfills all core requirements for a full-stack-inspired frontend challenge, including data handling from a JSON file, localStorage persistence, Recharts for visualizations, and deployment-ready routing that handles reloads without errors.

### Key Highlights

- **Responsive Design**: Fully mobile-friendly with Tailwind CSS, adapting from mobile (2-column grids) to desktop (4-column layouts).
- **State Management**: Uses React hooks for local app installations and sorting.
- **Performance**: Suspense for loading states, toast notifications for user feedback.
- **Deployment**: Hosted on Vercel/Netlify/Cloudflare with proper routing for SPA reloads.

## ✨ Features

### 🧱 Layout & Data Design

- **Header**: Logo navigates to home; Navbar with active route highlighting (gradient + underline); GitHub contribution button linking to [KaziFabihaLiya](https://github.com/KaziFabihaLiya).
- **Footer**: Custom footer with links, copyright, and social icons (designed creatively with gradients and icons).
- **Data**: JSON array of 16+ app objects (e.g., WhatsApp, Instagram, TikTok, Amazon, Duolingo, etc.) with fields like `image`, `title`, `companyName`, `id`, `description`, `size`, `reviews`, `ratingAvg`, `downloads`, and `ratings` array.

### 🏠 Home Page

- **Banner**: Centered heading ("We Build Productive Apps") with gradient text, descriptive paragraph, and buttons redirecting to App Store/Play Store (external links).
- **States Section**: Three cards showing stats (e.g., Total Apps, Active Users, Total Downloads) with icons and numbers.
- **Top Apps**: Displays 8 trending apps in a 4-column grid (responsive to 2-columns on mobile). Each card shows image, title, downloads, and rating. Click to view details; "Show All" button links to All Apps page.

### 📱 All Apps Page

- **Title & Subtitle**: Bold heading with app count and exploratory text.
- **Search & Filters**: Live, case-insensitive search by title. Displays filtered count; "No App Found" message if no matches.
- **App Grid**: Full list of apps in 4-column layout (2 on mobile). Cards link to details page.

### 📊 App Details Page

- **App Info**: Left-side image; Right-side details (title, rating, downloads, reviews). Install button toggles to "Installed" (disabled) with success toast.
- **Review Chart**: Responsive horizontal bar chart using Recharts, visualizing star ratings (1-5 stars) with orange bars.
- **Description**: Multi-paragraph layout from JSON data.
- **Not Found**: Custom "App Not Found" message for invalid app IDs.

### 🔧 My Installations Page

- **List View**: Shows installed apps as cards with uninstall button (removes from localStorage + UI, with toast).
- **Sorting**: Dropdown for ascending/descending by downloads.
- **Empty State**: "No Apps Installed" page with image and message if none.

### 🚫 Error & Loading

- **Error Page**: Custom 404 for invalid routes, with navigation back.
- **Loading**: Suspense fallbacks during navigation/search; spinner animations.
- **Routing**: Handles reloads via React Router basename/config—no 404 on refresh.

### 💾 LocalStorage

- Install/uninstall persists apps by ID.
- Prevents duplicates with toast warnings.

## 🛠 Technologies Used

- **Frontend**: React 18, React Router 6, React Suspense.
- **Styling**: Tailwind CSS for responsive, utility-first design.
- **Charts**: Recharts for review distributions.
- **Utilities**: React Toastify for notifications; LocalStorage for persistence.
- **Data**: Static JSON for app data.
- **Deployment**: Vercel (with custom routing for SPA).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed.
- Git for cloning.

### Installation

1. Clone the repo:
   ```
   git clone https://github.com/your-username/hero-io-app-store.git
   cd hero-io-app-store
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm start
   ```
   Opens at `http://localhost:3000`.

### Build for Production

```
npm run build
```

Serve the `build/` folder.

## 📁 Project Structure

```
src/
├── Components/
│   ├── pages/
│   │   ├── Home/          # Banner, States, Top Apps
│   │   ├── AllApp/        # Search, Full Grid
│   │   ├── InstalledList/ # Installations List
│   │   ├── AppDetails/    # Details + Chart
│   │   └── ErrorPage/
│   ├── App/               # Reusable App Card
│   ├── Navbar/            # Responsive Nav
│   └── Footer/
├── utilities/             # LocalStorage helpers, Formatters
├── appData.json           # App Data
└── Routes.jsx             # Router Config
```

## 🌐 Deployment

- Deployed to [Vercel](https://your-app.vercel.app) (or Netlify/Cloudflare).
- SPA routing configured to handle direct URL access/reloads without 404s (via `public/_redirects` or Vercel rewrites).


Contributions welcome! Star the repo if you like it. 🚀

## 👨‍💻 Author

- **Kazi Fabiha Liya** - [GitHub](https://github.com/KaziFabihaLiya)

---
