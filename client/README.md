# Project Setup & Integration Guide

This project has been updated with premium animated components including **GlowButton**, **LiquidAnimatedButton**, and the **Vortex** background.

## Integrated Components

### Premium UI Elements
- **Glow Button**: A vibrant blue gradient button with a broad light-blue outer glow and sparkle animations.
- **Liquid Animated Button**: A high-performance liquid-wave button used for "Github" actions, featuring deep blue gradients and white fluid particles.
- **Vortex Component**: A high-performance vertex-shader background used in the Footer.
- **Award Badges**: Interactive 3D badges for the Resume section.

## Development Commands

Use these commands to set up and run the project:

### 1. Installation & Setup
```bash
# Install all project dependencies
npm install

# Install specific UI primitives and animation libraries
npm install @radix-ui/react-slot class-variance-authority lucide-react framer-motion axios clsx tailwind-merge --legacy-peer-deps

# Initialize shadcn/ui (if adding to a new project)
npx shadcn-ui@latest init
```

### 2. Running Locally
```bash
# Start the Vite development server
npm run dev

# Build the project for production
npm run build
```

## Setup Instructions

If you are setting up this project from scratch or adding these features to a new project:

### 1. Tailwind CSS Setup (Tailwind 3)
Ensure Tailwind CSS is installed and configured. 
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Update `tailwind.config.js` with the content provided in this project to enable custom animations and gradients.

### 2. TypeScript Setup
To add TypeScript support to a Vite project:
```bash
npm install -D typescript @types/react @types/react-dom
npx tsc --init
```
Rename your `.jsx` files to `.tsx` and `.js` files to `.ts`.

### 3. shadcn/ui Path Convention
During initialization, it's highly recommended to use `src/components/ui` as the default path for components.
- **Standardization**: Follows the industry-standard convention.
- **CLI Automation**: Allows the shadcn CLI to manage base components without interference.
- **Organization**: Keeps UI primitives separate from feature components.

## Recent Fixes
- **Tech Stack Rotation**: Added `scroll-left` and `scroll-right` keyframes to `tailwind.config.js`.
- **Button Redesign**: Successfully unified the projects section with a vibrant blue "Picture 2" aesthetic for both main actions.