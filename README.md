# Konvo AI - React Dashboard

A modern, elegant React dashboard application for Konvo AI assistant with beautiful animations and theme support.

## 🚀 Features

- **Modern UI/UX**: Beautiful, professional interface with glassmorphism effects
- **Theme Support**: Light and Dark mode with smooth transitions
- **Fully Responsive**: Optimized for all screen sizes
- **Reusable Components**: Modular component architecture
- **Type Safe**: Built with TypeScript
- **Fast Performance**: Powered by Vite
- **Smooth Animations**: Framer Motion integration
- **Routing**: React Router for seamless navigation

## 📦 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation

## 📁 Project Structure

```
konvoAI React/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Layout/       # Layout components (DashboardLayout, etc.)
│   │   └── ui/           # UI components (Button, FeatureCard, etc.)
│   ├── pages/            # Page components
│   │   ├── Auth/         # Authentication pages
│   │   ├── Dashboard/    # Dashboard page
│   │   ├── Conversations/# Conversations pages
│   │   ├── KnowledgeBase/# Knowledge base pages
│   │   ├── Tenants/      # Tenant management pages
│   │   ├── Users/        # User management pages
│   │   └── Welcome/      # Welcome/Landing page
│   ├── context/          # React Context (ThemeContext)
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── package.json          # Dependencies

```

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd konvoAI-React
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌈 Features Overview

### Pages

- **Welcome Page** - Landing page with elegant animations
- **Login Page** - User authentication
- **Dashboard** - Main dashboard with stats and quick actions
- **Conversations** - Manage AI conversations
- **Knowledge Base** - Manage knowledge base collections
- **Users** - User management system
- **Tenants** - Multi-tenant management
- **Onboard Tenant** - New tenant onboarding

### Components

- **DashboardLayout** - Consistent layout with sidebar navigation
- **ThemeProvider** - Light/Dark theme management
- **Button** - Reusable button component with variants
- **FeatureCard** - Animated feature cards
- And many more reusable components...

## 🎯 Theme Support

The application supports both light and dark modes:

- Click the sun/moon icon in the sidebar to toggle themes
- Theme preference is saved to localStorage
- All components automatically adapt to theme changes

## 🔧 Configuration

### Path Aliases

The project uses path aliases for cleaner imports:

- `@/` - src directory
- `@components/` - src/components
- `@pages/` - src/pages
- `@hooks/` - src/hooks
- `@utils/` - src/utils
- `@styles/` - src/styles
- `@types/` - src/types

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Backend Integration

This is a frontend application. To integrate with backend:

1. Update API endpoints in your service files
2. Add authentication tokens/headers
3. Configure CORS settings
4. Set up environment variables for API URLs

## 🚀 Deployment

### Vercel

```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify

```bash
npm run build
# Deploy dist folder to Netlify
```

## 👥 Team

- **Frontend Team** - React/TypeScript development
- **Backend Team** - API integration
- **Design Team** - UI/UX design

## 📄 License

This project is proprietary software for Konvo AI.

## 📞 Support

For support, email suneel@codeology.solutions or contact the development team.

---

Built with ❤️ by Konvo AI Team
