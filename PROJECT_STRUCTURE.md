# 📂 Project Structure Guide

## Complete File Structure

```
konvo-ai-react/
│
├── 📁 .vscode/                      # VS Code settings
│   ├── extensions.json              # Recommended extensions
│   └── settings.json                # Editor settings
│
├── 📁 public/                       # Static assets
│   └── vite.svg                     # Vite logo
│
├── 📁 src/                          # Source code
│   │
│   ├── 📁 components/               # Reusable components
│   │   │
│   │   ├── 📁 ui/                   # UI components
│   │   │   ├── Button.tsx           # Animated button
│   │   │   └── FeatureCard.tsx      # Feature card with hover
│   │   │
│   │   ├── 📁 Layout/               # Layout components
│   │   │   └── MainLayout.tsx       # Main app layout
│   │   │
│   │   ├── RobotIllustration.tsx    # Animated robot SVG
│   │   └── BackgroundElements.tsx   # Animated background
│   │
│   ├── 📁 pages/                    # Page components
│   │   └── 📁 Welcome/
│   │       └── WelcomePage.tsx      # Welcome/landing page
│   │
│   ├── 📁 styles/                   # Styles
│   │   └── index.css                # Global CSS + Tailwind
│   │
│   ├── 📁 types/                    # TypeScript types
│   │   └── index.ts                 # Shared interfaces
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   │   └── useNavigateWithTransition.ts
│   │
│   ├── 📁 utils/                    # Utility functions
│   │   └── constants.ts             # App constants
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── vite-env.d.ts               # Vite type definitions
│
├── 📄 index.html                    # HTML template
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 tsconfig.node.json           # TS config for Node
├── 📄 vite.config.ts               # Vite configuration
├── 📄 tailwind.config.js           # Tailwind CSS config
├── 📄 postcss.config.js            # PostCSS config
├── 📄 .eslintrc.cjs                # ESLint rules
├── 📄 .prettierrc                  # Prettier config
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Main documentation
├── 📄 QUICKSTART.md                # Quick start guide
└── 📄 PROJECT_STRUCTURE.md         # This file
```

## 📋 File Descriptions

### Configuration Files

| File                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `package.json`       | Dependencies, scripts, and project metadata     |
| `vite.config.ts`     | Vite build tool configuration with path aliases |
| `tsconfig.json`      | TypeScript compiler options and path mapping    |
| `tailwind.config.js` | Tailwind CSS customization (colors, animations) |
| `.eslintrc.cjs`      | Code linting rules                              |
| `.prettierrc`        | Code formatting rules                           |

### Core Application Files

| File           | Purpose                                         |
| -------------- | ----------------------------------------------- |
| `src/main.tsx` | Application entry point, renders root component |
| `src/App.tsx`  | Main app component with routing setup           |
| `index.html`   | HTML template with font imports                 |

### Component Organization

#### 🎨 UI Components (`src/components/ui/`)

Reusable, generic UI components used throughout the app.

**Button.tsx**

- Props: `variant`, `size`, `onClick`, `children`
- Variants: primary, secondary, outline
- Includes Framer Motion animations

**FeatureCard.tsx**

- Displays feature with icon, title, description
- Hover effects and gradient overlays
- Animated entrance

#### 🖼️ Feature Components (`src/components/`)

**RobotIllustration.tsx**

- Animated SVG robot character
- Features:
  - Floating animation
  - Blinking eyes (every 3 seconds)
  - Moving arms
  - Glowing antenna
  - Particle effects

**BackgroundElements.tsx**

- Animated background layer
- Features:
  - Gradient orbs
  - Floating geometric shapes
  - Grid pattern overlay

**MainLayout.tsx**

- Wrapper component for pages
- Includes background elements
- Can toggle background on/off

#### 📄 Pages (`src/pages/`)

**WelcomePage.tsx**

- Main landing/welcome screen
- Includes:
  - Hero section with title
  - Robot illustration
  - 3 feature cards
  - CTA button
  - Additional info cards

### 🎯 Types (`src/types/`)

**index.ts**

```typescript
export interface Feature {
  icon: string
  title: string
  description: string
  color: string
  gradient: string
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}
```

### 🪝 Hooks (`src/hooks/`)

**useNavigateWithTransition.ts**

- Custom navigation hook with fade transition
- Usage: `const navigate = useNavigateWithTransition()`

### 🛠️ Utils (`src/utils/`)

**constants.ts**

- App-wide constants
- Routes, animation durations, breakpoints

### 🎨 Styles (`src/styles/`)

**index.css**

- Tailwind directives
- Custom utility classes:
  - `.glass-morphism` - Glass effect
  - `.glass-morphism-strong` - Stronger glass
  - `.text-gradient` - Gradient text
  - `.hover-lift` - Lift on hover
  - `.shimmer` - Shimmer animation

## 🎯 Path Aliases

Configured in `vite.config.ts` and `tsconfig.json`:

```typescript
'@/' → './src/'
'@components/' → './src/components/'
'@pages/' → './src/pages/'
'@assets/' → './src/assets/'
'@hooks/' → './src/hooks/'
'@utils/' → './src/utils/'
'@styles/' → './src/styles/'
'@types/' → './src/types/'
```

## 🚀 Adding New Features

### Add a New Page

1. Create: `src/pages/YourPage/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Import and use existing components

### Add a New Component

1. Create: `src/components/YourComponent.tsx`
2. Import types from `@types/`
3. Use Framer Motion for animations
4. Style with Tailwind classes

### Add a New Utility

1. Create: `src/utils/yourUtil.ts`
2. Export functions
3. Import with `@utils/yourUtil`

## 📦 Key Dependencies

| Package          | Version   | Purpose     |
| ---------------- | --------- | ----------- |
| react            | ^18.3.1   | UI library  |
| react-router-dom | ^6.20.0   | Routing     |
| framer-motion    | ^10.16.16 | Animations  |
| tailwindcss      | ^3.3.6    | Styling     |
| typescript       | ^5.2.2    | Type safety |
| vite             | ^5.0.8    | Build tool  |

## 🎨 Design System

### Colors

- **Primary**: Indigo/Purple gradient (`#667eea` → `#764ba2`)
- **Accent**: Coral, Orange, Cyan, Mint
- **Background**: Multi-gradient (indigo → purple → pink)

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Animations

- **Float**: 6s ease-in-out infinite
- **Glow**: 2s ease-in-out alternate
- **Slide-up**: 0.5s ease-out
- **Fade-in**: 0.6s ease-out
- **Scale-in**: 0.5s ease-out

### Effects

- **Glassmorphism**: Frosted glass with backdrop blur
- **Gradients**: Multi-color gradients throughout
- **Shadows**: Soft glows and elevation
- **Hover**: Lift, scale, and glow effects

## 📝 Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `FeatureCard.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useNavigateWithTransition.ts`)
- **Utils**: camelCase (`constants.ts`)
- **Types**: PascalCase (`Feature`, `ButtonProps`)
- **CSS Classes**: kebab-case (`glass-morphism`, `hover-lift`)

## 🔄 Component Lifecycle

1. **Import dependencies**
2. **Define interfaces/types**
3. **Define component**
4. **Add Framer Motion animations**
5. **Apply Tailwind styling**
6. **Export default**

## 📚 Best Practices

1. ✅ Use TypeScript for type safety
2. ✅ Use path aliases for cleaner imports
3. ✅ Extract reusable logic to hooks
4. ✅ Keep components small and focused
5. ✅ Use Tailwind utility classes
6. ✅ Add Framer Motion for animations
7. ✅ Follow the established folder structure
8. ✅ Document complex components

## 🎯 Next Steps for Expansion

### Recommended Pages to Add:

1. **Login/Signup** (`pages/Auth/`)
2. **Chat Interface** (`pages/Chat/`)
3. **Settings** (`pages/Settings/`)
4. **Profile** (`pages/Profile/`)
5. **Dashboard** (`pages/Dashboard/`)

### Recommended Components:

1. **Input** (`components/ui/Input.tsx`)
2. **Card** (`components/ui/Card.tsx`)
3. **Modal** (`components/ui/Modal.tsx`)
4. **Avatar** (`components/ui/Avatar.tsx`)
5. **Navbar** (`components/Layout/Navbar.tsx`)

### Recommended Features:

1. **Authentication** (context + hooks)
2. **API Integration** (axios/fetch wrapper)
3. **State Management** (Context API or Zustand)
4. **Dark/Light Mode** (theme context)
5. **Responsive Navbar** (with mobile menu)

---

This structure is designed for scalability and maintainability! 🚀
