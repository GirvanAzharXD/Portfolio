# 🌟 Portfolio Website - Mochamad Girvan Azhar

Modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

**🔗 [View Live Portfolio](https://your-portfolio-url.vercel.app)**

## ✨ Features

- 🎨 **Modern Design**: Clean, professional, and eye-catching with dark theme
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast loading
- 🎭 **Smooth Animations**: Framer Motion for beautiful transitions and micro-interactions
- 📧 **Working Contact Form**: Direct email integration with EmailJS (no backend required)
- 🌙 **Dark Theme**: Elegant dark theme with blue, purple, cyan gradient accents
- ♿ **Accessible**: WCAG compliant design principles

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.6
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel

## 📋 Portfolio Sections

1. **🏠 Hero/Home** - Personal introduction with animated MGA logo and call-to-action
2. **👨‍💻 About** - Background, interests, and professional overview  
3. **🚀 Projects** - Showcase of development projects with live demos and source code
4. **⚡ Skills** - Technical skills and technologies with interactive displays
5. **🎓 Journey** - Professional timeline, education, and career milestones
6. **📧 Contact** - Working contact form with direct email integration

## 🎯 Key Highlights

### 🎨 Design Features
- **Custom Logo**: "MGA" typography with gradient effects and connection lines
- **Responsive Header**: Smooth scrolling navigation with mobile hamburger menu
- **Typography**: Inter font family for modern, clean readability
- **Color Scheme**: Professional blue, purple, cyan gradient theme
- **Layout**: Mobile-first responsive design approach

### ⚡ Performance & Functionality
- **Bundle Size**: Optimized ~376KB (gzipped: ~115KB)
- **EmailJS Integration**: Contact form sends emails directly without backend
- **Smooth Animations**: GPU-accelerated animations with Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GirvanAzharXD/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup EmailJS for contact form**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Edit .env.local with your EmailJS credentials
   # Visit https://emailjs.com for setup instructions
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## 📧 EmailJS Contact Form Setup

The contact form uses **EmailJS** to send emails directly without a backend server.

### Quick Setup:
1. **Create account**: https://emailjs.com (free: 1000 emails/month)
2. **Create email service** (connect with Gmail/Outlook)
3. **Create email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Get credentials**: Service ID, Template ID, Public Key
5. **Update**: `src/config/emailjs.js` with your credentials

📖 **Setup guide**: Visit https://emailjs.com for complete documentation

## 🌐 Deployment

This project is optimized for **Vercel** deployment with automatic CI/CD:

### Deploy to Vercel:
1. **Push to GitHub** (already done ✅)
2. **Import to Vercel**: https://vercel.com/import
3. **Configure**:
   - Framework: `Vite` (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Add Environment Variables** (optional for EmailJS security)
5. **Deploy** 🚀

📖 **Deployment guide**: Visit https://vercel.com/docs for complete instructions

### Other Platforms:
- **Netlify**: Drag & drop `dist` folder after `npm run build`
- **GitHub Pages**: Use GitHub Actions workflow
- **Firebase Hosting**: `firebase deploy` after build

## 📁 Project Structure

```
Portfolio/
├── public/                    # Static assets
│   ├── certificates/          # Certificate PDFs & images
│   └── vite.svg              # Vite logo
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx        # Navigation with MGA logo
│   │   ├── Contact.jsx       # EmailJS contact form
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── ProjectSection.jsx # Projects display
│   │   └── ...              # Other components
│   ├── config/              # Configuration files
│   │   └── emailjs.js       # EmailJS settings
│   ├── assets/              # Images, fonts, icons
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── docs/                    # Documentation (if any)
├── vercel.json              # Vercel configuration
├── .env.example             # Environment variables template
└── README.md                # This file
```

## 🎨 Customization

### Update Personal Information:
- **Contact details**: `src/components/Contact.jsx`
- **About section**: Update bio, skills, interests
- **Projects**: Add your own projects with links
- **Journey**: Professional timeline and achievements
- **Social links**: GitHub, LinkedIn, email

### Styling:
- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Fonts**: Change imports in `src/index.css`
- **Logo**: Modify MGA logo in `src/components/Header.jsx`
- **Animations**: Adjust Framer Motion settings

### Content:
- **Images**: Replace in `src/assets/images/`
- **Certificates**: Update PDFs in `public/certificates/`
- **Resume**: Add/update CV file in `public/`

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)  
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Issues:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### EmailJS Issues:
- Check credentials in `src/config/emailjs.js`
- Verify domain settings in EmailJS dashboard
- Check browser console for errors

### Development Issues:
```bash
# Restart dev server
npm run dev
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)  
5. **Open** a Pull Request

## 📞 Contact & Author

**Mochamad Girvan Azhar**
- 📧 Email: girvanazharr@gmail.com
- 💼 LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/girvanazhar/)
- 🐙 GitHub: [@GirvanAzharXD](https://github.com/GirvanAzharXD)
- 📸 Instagram: [@girvanazhar](https://www.instagram.com/girvanazhar/)
- 🌐 Portfolio: [Live Website](https://your-portfolio-url.vercel.app)

---

## 🎉 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion community examples
- **Email Service**: EmailJS for serverless contact forms
- **Deployment**: Vercel platform for seamless hosting

---

⭐ **If you like this portfolio, please give it a star!** ⭐

Made with ❤️ by Mochamad Girvan Azhar
