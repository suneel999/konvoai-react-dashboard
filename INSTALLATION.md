# 🚀 Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

### Required:

- **Node.js** (v18.0.0 or higher)

  - Download: https://nodejs.org/
  - Check version: `node --version`

- **npm** (v9.0.0 or higher) or **yarn** or **pnpm**
  - Comes with Node.js
  - Check version: `npm --version`

### Recommended:

- **VS Code** (or your preferred code editor)
  - Download: https://code.visualstudio.com/
- **Git** (for version control)
  - Download: https://git-scm.com/

## 📥 Installation Steps

### Method 1: Fresh Installation

1. **Open Terminal/Command Prompt**

   ```bash
   cd "D:\konvoAI React"
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install:

   - React 18
   - TypeScript
   - Vite
   - Tailwind CSS
   - Framer Motion
   - React Router
   - And all other dependencies

3. **Wait for Installation**

   - This may take 2-5 minutes
   - You'll see a progress bar

4. **Verify Installation**

   ```bash
   npm list --depth=0
   ```

   You should see all dependencies listed.

### Method 2: Using Different Package Managers

**Using Yarn:**

```bash
yarn install
```

**Using PNPM:**

```bash
pnpm install
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

**What happens:**

- Vite starts the development server
- Opens at `http://localhost:5173`
- Hot Module Replacement (HMR) enabled
- Changes reflect instantly

**Expected Output:**

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

### Production Build

```bash
npm run build
```

**What happens:**

- TypeScript compilation
- Vite optimizes and bundles
- Creates `dist/` folder with production files

### Preview Production Build

```bash
npm run preview
```

**What happens:**

- Serves the production build locally
- Test before deployment

## 🎨 VS Code Setup (Recommended)

### 1. Install Recommended Extensions

When you open the project in VS Code, you'll see a prompt to install recommended extensions:

- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript Vue Plugin** - TS support

Or install manually:

1. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
2. Search for extension names
3. Click "Install"

### 2. Enable Format on Save

Already configured in `.vscode/settings.json` ✅

## 🔧 Troubleshooting

### Issue: "npm: command not found"

**Solution:**

1. Reinstall Node.js from https://nodejs.org/
2. Restart your terminal
3. Verify: `node --version`

### Issue: Port 5173 already in use

**Solution:**

```bash
# Kill the process using port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

Or change the port in `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: 3000, // Change to your preferred port
  },
})
```

### Issue: Module not found errors

**Solution:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:**

```bash
# Restart TypeScript server in VS Code
# Press Ctrl+Shift+P
# Type: "TypeScript: Restart TS Server"
```

### Issue: Tailwind styles not working

**Solution:**

1. Check if `tailwind.config.js` exists
2. Verify `postcss.config.js` exists
3. Ensure `index.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: Framer Motion animations not working

**Solution:**

1. Clear browser cache
2. Check browser console for errors
3. Ensure `framer-motion` is installed:
   ```bash
   npm list framer-motion
   ```

## 📦 Dependencies Explained

### Production Dependencies:

| Package            | Purpose             |
| ------------------ | ------------------- |
| `react`            | Core React library  |
| `react-dom`        | React DOM rendering |
| `react-router-dom` | Client-side routing |
| `framer-motion`    | Animation library   |

### Development Dependencies:

| Package                | Purpose                 |
| ---------------------- | ----------------------- |
| `typescript`           | Type checking           |
| `vite`                 | Build tool & dev server |
| `@vitejs/plugin-react` | React plugin for Vite   |
| `tailwindcss`          | Utility-first CSS       |
| `autoprefixer`         | CSS vendor prefixes     |
| `postcss`              | CSS processing          |
| `eslint`               | Code linting            |

## 🌐 Browser Support

The app works on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Testing on Mobile

### Method 1: Using Network Access

1. **Start dev server with host flag:**

   ```bash
   npm run dev -- --host
   ```

2. **Find your local IP:**

   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

3. **Access from mobile:**
   - Open browser on phone
   - Go to `http://YOUR_IP:5173`
   - Example: `http://192.168.1.100:5173`

### Method 2: Using Browser DevTools

1. Open Chrome DevTools
2. Press `Ctrl+Shift+M` (Toggle Device Toolbar)
3. Select device to emulate

## 🎯 Next Steps After Installation

1. ✅ Installation complete
2. ✅ Dev server running
3. ✅ Open `http://localhost:5173`
4. ✅ See beautiful Konvo welcome screen

### Now you can:

1. **Explore the Code**

   - Read `PROJECT_STRUCTURE.md`
   - Check component files
   - Understand the architecture

2. **Make Changes**

   - Edit `src/pages/Welcome/WelcomePage.tsx`
   - Change colors in `tailwind.config.js`
   - Add new components

3. **Add New Pages**

   - Follow `QUICKSTART.md` guide
   - Create Login, Chat, or Settings pages

4. **Customize**
   - Change app name
   - Modify colors/animations
   - Add your own features

## 📚 Useful Commands

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

# Install a new package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## 🆘 Getting Help

### Resources:

- 📖 [React Documentation](https://react.dev)
- 📖 [Vite Documentation](https://vitejs.dev)
- 📖 [Tailwind CSS](https://tailwindcss.com)
- 📖 [Framer Motion](https://www.framer.com/motion)

### Common Issues:

1. Check `QUICKSTART.md`
2. Check `PROJECT_STRUCTURE.md`
3. Check `README.md`

## ✅ Installation Checklist

- [ ] Node.js installed (v18+)
- [ ] npm/yarn/pnpm available
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Browser opens at `localhost:5173`
- [ ] Welcome screen displays correctly
- [ ] Animations working
- [ ] No console errors

---

🎉 **Congratulations!** You're ready to build with Konvo AI!

Happy Coding! 🚀
