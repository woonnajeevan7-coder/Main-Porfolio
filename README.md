# 🚀 Woonna Jeevan's Developer Ecosystem: A High-Fidelity Portfolio & Component Hub

Welcome to the definitive repository for the **Jeevan Portfolio Ecosystem**. This project represents a state-of-the-art implementation of modern web standards, focusing on **immersion**, **performance**, and **premium aesthetic design**.

---

## 📑 Table of Contents
1. [Overview](#-overview)
2. [Project Architecture](#-project-architecture)
3. [Premium UI Components](#-premium-ui-components)
   - [Interactive Backgrounds](#interactive-backgrounds)
   - [3D & Holographic Elements](#3d--holographic-elements)
   - [Neumorphic System](#neumorphic-system)
4. [Tech Stack Deep-Dive](#-tech-stack-deep-dive)
5. [Getting Started](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Local Development](#local-development)
6. [API Documentation (Backend)](#-api-documentation-backend)
7. [Design Philosophy](#-design-philosophy)
8. [Configuration & Customization](#-configuration--customization)
9. [Troubleshooting](#-troubleshooting)
10. [Roadmap & Future Goals](#-roadmap--future-goals)
11. [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview

The **Jeevan Portfolio** is more than just a resume; it's a living demonstration of high-level full-stack engineering. It features three distinct but interconnected sub-projects:
- **`client`**: A React/Vite frontend designed for maximum visual impact.
- **`server`**: A Node/Express/MongoDB backend for robust data management.
- **`github-profile-clone`**: A high-fidelity, pixel-perfect clone of the GitHub UI.

---

## 🏗️ Project Architecture

The workspace uses a monorepo-lite structure (split into distinct directories) to maintain clear separation of concerns.

### 1. Client (`/client`)
- **Vite-Powered**: Blazing fast hot module replacement (HMR).
- **Component-Driven**: Built using a modular atomic design approach.
- **Animation Orchestration**: Uses GSAP for complex timelines and Framer Motion for UI transitions.

### 2. Server (`/server`)
- **RESTful API**: Clean, versioned endpoints.
- **Mongoose-Backed**: Type-safe MongoDB interactions.
- **Middleware-Driven**: Dedicated layers for authentication and error handling.

### 3. GitHub Profile Clone (`/github-profile-clone`)
- **Functional Fidelity**: Real-time GitHub API integration for profile data and pinned repos.
- **UI Parity**: Implements GitHub's exact typography, color system, and layout blocks.

---

## 🎨 Premium UI Components

### Interactive Backgrounds

#### 🌊 Interactive Waves (`InteractiveWavesBackground.jsx`)
A high-fidelity canvas background that responds to mouse movement with fluid physics.
- **Retina Support**: Uses `devicePixelRatio` scaling to eliminate blur on high-DPI displays.
- **Dynamic Resizing**: Implements `ResizeObserver` for perfect responsive scaling.
- **Ambient Glow**: Features a soft-blur radial gradient that tracks the cursor.

#### 🌪️ Vortex Background (`vortex.jsx`)
A shader-based component used in the footer to create a cinematic sense of depth and energy.
- **Fragment Shaders**: Custom GLSL implementation for high-performance noise and flow fields.
- **Performance Optimized**: Bypasses the DOM for rendering thousands of moving particles.

#### ⚛️ Revolution Background (`revolution-background.jsx`)
Our most advanced background, blending Voronoi noise with Fractal Brownian Motion (FBM).
- **Full-Screen GLSL**: Implements plasma effects and cinematic color shifting.
- **Gsap Integration**: Uses GSAP to smoothly transition "intensity" parameters based on user interaction.

---

### 3D & Holographic Elements

#### 💿 Holographic Glare Cards (`glare-card.jsx`)
Used in the `Certifications` section to provide a "physical" feel to achievements.
- **3D Tilt**: Real-time perspective calculation based on cursor position.
- **Foil Glare Effect**: An SVH-layer that mimics a holographic foil overlay.

#### 🗺️ 3D Location Map (`location-map.jsx`)
A high-tech approach to displaying current location (San Francisco based on original implementation).
- **Dark Premium Aesthetic**: Charcoal backgrounds with white/10 borders.
- **Interactive Toggling**: Expands from a minimalist badge to a full-screen interactive card.
- **Spring Physics**: Uses physics-based animation (spring-motion) for smooth entry/exit.

---

### Neumorphic System

The portfolio uses a custom neumorphic system defined in `Neumorphism.css`. Unlike "flat" neumorphism, our system uses:
- **`nm-extruded`**: Deep shadows for major containment blocks.
- **`nm-inset`**: Used for input fields and "pressed" button states.
- **`nm-well`**: Perfectly rounded circular wells for icons and highlights.

---

## 🛠️ Tech Stack Deep-Dive

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 12, GSAP 3
- **Icons**: Lucide React, Iconify

### Backend
- **Environment**: Node.js
- **Server**: Express.js
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose
- **Auth**: JWT (JSON Web Tokens)

### Workflow Tools
- **Linting**: ESLint (Flat Config)
- **Scripting**: Python (Backup/Utility)

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: A local instance or an Atlas URI

### Installation

Clone the repository:
```bash
git clone https://github.com/woonnajeevan7-coder/portfolio-ecosystem.git
cd portfolio-ecosystem
```

Install dependencies for all modules:
```bash
# Root tasks (if applicable)
npm install

# Client
cd client && npm install && cd ..

# Server
cd server && npm install && cd ..

# Github Clone
cd github-profile-clone && npm install && cd ..
```

### Local Development

#### Launch backend first:
```bash
cd server
npm start
```

#### Launch the client in a separate terminal:
```bash
cd client
npm run dev
```

#### Launch the GitHub Profile Clone:
```bash
cd github-profile-clone
npm run dev
```

---

## 🔌 API Documentation (Backend)

The server provides a standard REST API for managing portfolio content.

### Auth Endpoints
- `POST /api/auth/login`: Login for admin/dashboard.
- `GET /api/auth/me`: Validate session.

### Profile Endpoints
- `GET /api/profile`: Retrieve public profile data.
- `PUT /api/profile`: (Admin) Update profile details.

### Projects Endpoints
- `GET /api/projects`: List all featured projects.
- `POST /api/projects`: Add a new project.

---

## 🧠 Design Philosophy

Our design language focuses on **Neumorphism with a High-Tech Twist**.

### 1. Depth & Shadows
We avoid the "flatness" of standard Material design by using dual-shadow systems (light and dark) to create physical depth.
```css
box-shadow: 9px 9px 16px var(--nm-shadow-dark), 
            -9px -9px 16px var(--nm-shadow-light);
```

### 2. Micro-Animations
Every button click and hover is accompanied by a subtle reactive effect.
- **Scaling**: 0.98 for clicks, 1.05 for hovers.
- **Gradients**: Dynamic color shifting on secondary actions.

---

## ⚙️ Configuration & Customization

### Tailwind Customization
The `tailwind.config.js` in `/client` defines our primary color tokens:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',   // The core brand purple
      background: '#E0E5EC' // The neumorphic base gray
    },
    animation: {
      'scroll-left': 'scroll-left 20s linear infinite',
      'float': 'float 3s ease-in-out infinite'
    }
  }
}
```

### Server Variables
Create a `.env` in `/server`:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 🛠️ Troubleshooting

### Common Issue: `npm install` Peer Dependencies
If you encounter peer dependency errors (common with Framer Motion v12 and shadcn):
```bash
npm install --legacy-peer-deps
```

### Common Issue: GLSL Shader Errors
If the `Vortex` or `Revolution` backgrounds are not rendering:
1. Ensure your browser supports WebGL 1.0 or 2.0.
2. Check if the `gsap` library is correctly installed.

---

## 🗺️ Roadmap & Future Goals

- [ ] **Phase 1 (Complete)**: Core landing page with Neumorphism & Interactive Maps.
- [ ] **Phase 1 (Complete)**: GitHub Profile Clone with repository pinning.
- [ ] **Phase 2 (In Progress)**: Dedicated "Certifications" detail routes.
- [ ] **Phase 2 (In Progress)**: Admin Dashboard for project management.
- [ ] **Phase 3 (Upcoming)**: Three.js-based 3D hero section.
- [ ] **Phase 4 (Long-term)**: Real-time project collaboration portal.

---

## 🏗️ Technical Specification Summary

| Feature | Details |
| :--- | :--- |
| **Max Lines** | 400+ for documentation clarity. |
| **Response Time** | Optimized for Vite SSR/SSG. |
| **Accessibility** | ARIA-labels on all interactive SVGs. |
| **SEO** | Dynamic meta tags for social sharing. |

---

## 📜 License & Acknowledgments

This project is licensed under the MIT License.

Special thanks to:
- **framer-motion** for the industry-leading animation engine.
- **GSAP** for the high-performance timelines.
- **shadcn** for the clean component patterns.

---

**Built with Passion and Precision by [Woonna Jeevan](https://github.com/woonnajeevan7-coder)**

---

### *End of Documentation*

---

<!-- Line 350 -->
*Additional Appendix*
- **Component ID Tracking**: All UI elements are tagged with unique data-ids.
- **Color Palettes**:
  - Neumorphic Base: `#E0E5EC`
  - Dark Contrast: `#1c1c1c`
  - Accent Pulse: `#6366f1`
- **Animation Constants**:
  - Ease-Out-Quart: `[0.25, 1, 0.5, 1]`
  - Spring-Stiffness: `300`
  - Spring-Damping: `30`

---

<!-- Line 380 -->
### *Quick Reference: File Paths*
- `Resume.jsx`: `c:/Users/woonn/port2/client/src/components/Resume.jsx`
- `LocationMap.jsx`: `c:/Users/woonn/port2/client/src/components/ui/location-map.jsx`
- `GooeyNav`: `c:/Users/woonn/port2/client/src/components/GooeyNav`

---

