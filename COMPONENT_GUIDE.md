# Component Reusability Guide

## 📚 Reusable Components Documentation

All components in this project are designed to be reusable and modular. Here's how to use them:

## 🎨 UI Components

### Button Component

**Location**: `src/components/ui/Button.tsx`

**Usage**:

```tsx
import Button from '@components/ui/Button'

;<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

**Props**:

- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `children`: React.ReactNode
- `onClick`: () => void
- All standard button props

### FeatureCard Component

**Location**: `src/components/ui/FeatureCard.tsx`

**Usage**:

```tsx
import FeatureCard from '@components/ui/FeatureCard'

;<FeatureCard
  icon="🚀"
  title="Fast Performance"
  description="Lightning fast load times"
  delay={0.1}
/>
```

**Props**:

- `icon`: string (emoji or icon)
- `title`: string
- `description`: string
- `delay`: number (animation delay)

## 🏗️ Layout Components

### DashboardLayout

**Location**: `src/components/Layout/DashboardLayout.tsx`

**Usage**:

```tsx
import DashboardLayout from '@components/Layout/DashboardLayout'

const MyPage = () => {
  return <DashboardLayout>{/* Your page content here */}</DashboardLayout>
}
```

**Features**:

- Automatic sidebar navigation
- Theme toggle integration
- Responsive design
- Active route highlighting

## 🎭 Context Providers

### ThemeProvider

**Location**: `src/context/ThemeContext.tsx`

**Usage**:

```tsx
// Already set up in main.tsx, use in any component:
import { useTheme } from '@/context/ThemeContext'

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme()

  return <button onClick={toggleTheme}>Current theme: {theme}</button>
}
```

**API**:

- `theme`: 'light' | 'dark'
- `toggleTheme`: () => void

## 🔧 Creating New Reusable Components

### Template for New Component:

```tsx
// src/components/ui/MyComponent.tsx
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

interface MyComponentProps {
  title: string
  description?: string
  onClick?: () => void
  className?: string
}

const MyComponent = ({ title, description, onClick, className = '' }: MyComponentProps) => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      } ${className}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-sm">{description}</p>}
    </motion.div>
  )
}

export default MyComponent
```

## 📦 Component Library

### Available Reusable Components:

| Component            | Location                                 | Purpose                |
| -------------------- | ---------------------------------------- | ---------------------- |
| `Button`             | `@components/ui/Button.tsx`              | Buttons with variants  |
| `FeatureCard`        | `@components/ui/FeatureCard.tsx`         | Animated feature cards |
| `DashboardLayout`    | `@components/Layout/DashboardLayout.tsx` | Main layout wrapper    |
| `BackgroundElements` | `@components/BackgroundElements.tsx`     | Animated backgrounds   |
| `RobotIllustration`  | `@components/RobotIllustration.tsx`      | SVG robot animation    |

## 🎯 Best Practices

### 1. Always Use TypeScript

```tsx
// ✅ Good
interface Props {
  name: string
  age: number
}

// ❌ Bad
const MyComponent = (props: any) => {}
```

### 2. Theme Awareness

```tsx
// ✅ Good - Uses theme context
const { theme } = useTheme()
className={theme === 'dark' ? 'bg-slate-900' : 'bg-white'}

// ❌ Bad - Hardcoded colors
className="bg-white"
```

### 3. Props with Defaults

```tsx
// ✅ Good
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const MyComponent = ({ size = 'md' }: Props) => {}

// ❌ Bad - No defaults
const MyComponent = ({ size }: Props) => {}
```

### 4. Animations

```tsx
// ✅ Good - Smooth animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>

// ❌ Bad - No animations
<div>
```

### 5. Responsive Design

```tsx
// ✅ Good
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'

// ❌ Bad
className = 'grid grid-cols-4'
```

## 🔄 Component Reusability Checklist

Before creating a new component, check:

- [ ] Can this be a prop variant of existing component?
- [ ] Does it accept necessary props?
- [ ] Is it theme-aware?
- [ ] Does it have TypeScript types?
- [ ] Is it responsive?
- [ ] Does it have smooth animations?
- [ ] Can it be used in multiple places?
- [ ] Is it documented?

## 🎨 Styling Guidelines

### Consistent Class Names:

```tsx
// Sizes
;'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl'
;'p-2' | 'p-4' | 'p-6' | 'p-8'
;'gap-2' | 'gap-3' | 'gap-4'

// Rounded
;'rounded-lg' | 'rounded-xl' | 'rounded-2xl'

// Spacing
;'mb-2' | 'mb-4' | 'mb-6'
;'mt-0.5' | 'mt-1' | 'mt-2'
```

### Theme-Aware Colors:

```tsx
// Dark Theme
;'bg-slate-900' | 'bg-slate-800' | 'bg-slate-700'
'text-slate-300' | 'text-slate-400'
;('border-slate-700')

// Light Theme
;'bg-white' | 'bg-slate-50' | 'bg-slate-100'
'text-slate-800' | 'text-slate-600'
;('border-slate-200')

// Accents
'from-cyan-400' | 'to-purple-400' // Dark gradients
'from-blue-600' | 'to-purple-600' // Light gradients
```

## 📝 Adding New Pages

### Template:

```tsx
// src/pages/MyPage/MyPage.tsx
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import DashboardLayout from '@components/Layout/DashboardLayout'

const MyPage = () => {
  const { theme } = useTheme()

  return (
    <DashboardLayout>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 mb-4 ${
            theme === 'dark'
              ? 'bg-slate-900/90 border border-slate-700/50'
              : 'bg-white border border-slate-200 shadow-lg'
          }`}
        >
          {/* Page content */}
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

export default MyPage
```

### Add to Router:

```tsx
// src/App.tsx
import MyPage from '@pages/MyPage/MyPage'

;<Route path="/my-page" element={<MyPage />} />
```

### Add to Sidebar:

```tsx
// src/components/Layout/DashboardLayout.tsx
const menuItems = [
  // ...existing items
  { icon: '📄', label: 'My Page', path: '/my-page' },
]
```

## 🚀 Performance Tips

1. **Use React.memo for expensive components**

```tsx
export default React.memo(MyComponent)
```

2. **Lazy load pages**

```tsx
const MyPage = lazy(() => import('@pages/MyPage/MyPage'))
```

3. **Optimize images**

- Use WebP format
- Lazy load images
- Use appropriate sizes

4. **Avoid unnecessary re-renders**

- Use useCallback for functions
- Use useMemo for expensive calculations

---

## 📞 Support

For questions about component reusability:

- Check existing components for examples
- Follow the templates above
- Maintain consistency with existing code

Happy coding! 🎉
