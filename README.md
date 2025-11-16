# VyomGarud UAV Solutions - Assessment Project

Welcome to the **VyomGarud Assessment Website** - a demonstration project showcasing a modern web presence for VyomGarud, an unmanned aerial vehicle (UAV) solutions company focused on medical logistics and healthcare delivery.

## 🚁 Project Overview

This is a **dummy website** created as a solution for VyomGarud company's assessment. It is a modern, high-performance web application designed to showcase UAV capabilities and solutions for medical and humanitarian purposes. The website demonstrates how autonomous aerial systems can transform healthcare delivery by enabling rapid, reliable transportation of critical supplies to remote and hard-to-reach areas.

### Company Vision
Aerial innovation for faster, safer, and smarter healthcare access.

### Company Mission
Building high-performance drones that bring precision and impact to every flight, ensuring access to essential medical resources everywhere.

### Project Purpose
This assessment project demonstrates proficiency in:
- Modern React development with Vite
- Responsive UI design with Tailwind CSS
- Advanced animations and interactivity with Framer Motion
- Component-based architecture
- Professional web design practices

### 🌐 Live Deployment
**[View the live website](https://vyomgarud-by-nishant.vercel.app/)**

The website is deployed on Vercel and accessible at: `https://vyomgarud-by-nishant.vercel.app/`

---

## ✨ Key Features

### 📱 Responsive Design
- Fully responsive layout supporting desktop, tablet, and mobile devices
- Smooth scrolling navigation for enhanced user experience
- Modern dark and light theme components

### 🎬 Home Section
- Full-screen video background hero section
- Navigation menu with smooth anchor links
- Engaging call-to-action button
- Dynamic overlay for visual appeal

### ℹ️ About Section
- Company overview with drone imagery
- Interactive FAQ accordion component
- Comprehensive Q&A covering:
  - Specialization in UAV medical logistics
  - Healthcare supply delivery methods
  - Platform customization options
  - Unique technology advantages

### 🎯 Capabilities Section
- Showcase of three flagship drone models:
  - **AeroVision X1**: Professional aerial photography drone with 8K recording
  - **TacticalHawk Pro**: Industrial-grade inspection drone with thermal imaging
  - **SwiftRacer V2**: High-performance FPV racing drone
- Interactive product cards with specifications
- Smooth animations and hover effects
- Badge system for special offerings (Best Seller, New)

### ⭐ Highlights Section
- Four key value propositions:
  - Revolutionizing medical logistics with advanced UAV technology
  - Rapid delivery of critical healthcare supplies to remote regions
  - Innovative, reliable, and mission-ready drone systems
  - Engineering solutions bridging technology and humanitarian needs
- Interactive hover effects and emoji indicators

### 📧 Contact/Footer Section
- Complete contact information
- Multiple contact channels (email, phone, location)
- Social media integration (LinkedIn, Website)
- Company copyright and mission statement
- Professional gradient styling with glassmorphism effects

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.0** - Modern JavaScript UI library
- **React Router DOM 7.9.6** - Client-side routing
- **Vite 7.2.2** - Next-generation build tool and dev server

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.17** - Vite plugin for Tailwind CSS

### Animation & Interactivity
- **Framer Motion 12.23.24** - Advanced animation library
- **Lucide React 0.553.0** - Beautiful, customizable icon library

### Development Tools
- **ESLint 9.39.1** - Code quality and style checker
- **@vitejs/plugin-react 5.1.0** - React Fast Refresh support
- **TypeScript support** - For type safety in development

---

## 📁 Project Structure

```
vyomgarud/
├── public/
│   ├── videoBg.mp4          # Hero section video background
│   └── drone.jpg            # About section drone image
├── src/
│   ├── Components/
│   │   └── Card.jsx         # Reusable product card component
│   ├── pages/
│   │   ├── Home.jsx         # Hero and navigation section
│   │   ├── About.jsx        # Company information and FAQ
│   │   ├── Capabilities.jsx # Product showcase section
│   │   ├── Highlights.jsx   # Key value propositions
│   │   └── Footer.jsx       # Contact and footer section
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules and configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nishant1195/vyomgarud.git
   cd vyomgarud
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or another available port)

### Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 🎨 Component Details

### Card Component (`src/Components/Card.jsx`)
Reusable component for displaying drone products with:
- Animated image with hover zoom effect
- Badge system for special offerings
- Specifications grid with icons
- Call-to-action button with animations

**Props:**
- `title` - Product name
- `description` - Product description
- `image` - Product image URL
- `specs` - Array of specification objects
- `badge` - Optional badge text
- `onLearnMore` - Callback function for learn more button
- `className` - Optional custom CSS classes

### Page Components
- **Home.jsx** - Full-screen hero with video background and navigation
- **About.jsx** - Company info with expandable FAQ section
- **Capabilities.jsx** - Product showcase with framer-motion animations
- **Highlights.jsx** - Value propositions with hover effects
- **Footer.jsx** - Contact information and social links

---

## 🎯 Features by Section

### Navigation
- Smooth anchor navigation to all sections
- Fixed positioning for easy access
- Hover effects and transitions

### Interactive Elements
- Expandable FAQ accordion in About section
- Hover animations on cards and highlights
- Smooth scroll transitions
- Button hover effects

### Media
- Background video in hero section
- Product images with dynamic scaling
- Icon integration from Lucide React

---

## 📞 Contact & Information

**Company Information:**
- **Email:** info@vyomgarud.com
- **Phone:** +91 XXX XXX XXXX
- **Location:** ROLTA Incubation Centre, MANIT, Bhopal, Madhya Pradesh
- **Website:** https://vyomgarud.com
- **LinkedIn:** https://linkedin.com/company/vyomgarud

---

## 📝 License

© 2024 VyomGarud UAV Solutions. All rights reserved.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide React Icons](https://lucide.dev)

---

**Built with ❤️ by the VyomGarud team**
