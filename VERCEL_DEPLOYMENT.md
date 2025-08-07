# 🚀 Deploy Portfolio ke Vercel - Checklist Lengkap

## ✅ **Pre-deployment Checklist**

### 1. 📦 **Pastikan Project Siap Deploy**
- [x] Dependencies sudah terinstall (`npm install`)
- [x] EmailJS sudah dikonfigurasi dengan benar
- [x] Build berhasil tanpa error (`npm run build`)
- [ ] Test semua fitur berfungsi (`npm run dev`)

### 2. 🔐 **Environment Variables (Opsional)**
Untuk keamanan yang lebih baik, Anda bisa pindahkan EmailJS config ke environment variables:

#### Buat file `.env.local`:
```bash
VITE_EMAILJS_SERVICE_ID=service_bode97n
VITE_EMAILJS_TEMPLATE_ID=template_3wg6nxh
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### Update `src/config/emailjs.js`:
```javascript
export const emailjsConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_bode97n',
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3wg6nxh',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  toEmail: 'girvanazharr@gmail.com',
  toName: 'Mochamad Girvan Azhar',
};
```

### 3. 📝 **Buat file konfigurasi Vercel (Opsional)**

#### `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🌐 **Deployment ke Vercel**

### **Method 1: Deploy via GitHub (Recommended)**

#### Step 1: Push ke GitHub
```bash
# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit ready for deployment"

# Connect to GitHub repository
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

#### Step 2: Deploy via Vercel Dashboard
1. **Kunjungi**: https://vercel.com
2. **Login** dengan akun GitHub
3. **Import Project** → Pilih repository portfolio Anda
4. **Configure Project**:
   - Framework: `Vite` (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables** (jika menggunakan):
   - Add: `VITE_EMAILJS_SERVICE_ID`
   - Add: `VITE_EMAILJS_TEMPLATE_ID` 
   - Add: `VITE_EMAILJS_PUBLIC_KEY`
6. **Deploy** 🚀

### **Method 2: Deploy via Vercel CLI**

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login dan Deploy
```bash
# Login ke Vercel
vercel login

# Deploy project
vercel

# Follow prompts:
# ? Set up and deploy "Portfolio"? [Y/n] y
# ? Which scope? (your-username)
# ? Link to existing project? [y/N] n
# ? What's your project's name? portfolio
# ? In which directory is your code located? ./
```

---

## ⚙️ **Post-Deployment Setup**

### 1. 🔗 **Update EmailJS Domain Settings**
1. **EmailJS Dashboard** → **Account** → **Security**
2. **Add your Vercel domain**: `your-portfolio.vercel.app`
3. **Save settings**

### 2. 🌐 **Custom Domain (Opsional)**
1. **Vercel Dashboard** → Project → **Settings** → **Domains**
2. **Add custom domain** (contoh: `yourname.com`)
3. **Configure DNS** sesuai instruksi Vercel

### 3. 📊 **Analytics & SEO**
1. **Add Vercel Analytics** (gratis)
2. **Update meta tags** di `index.html`
3. **Add sitemap** dan **robots.txt**

---

## 🐛 **Troubleshooting Common Issues**

### Build Error: "Module not found"
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### EmailJS CORS Error
- Pastikan domain Vercel sudah ditambahkan di EmailJS settings
- Check browser console untuk error details

### 404 Error pada refresh
- Pastikan ada rewrite rules di `vercel.json`
- Atau configure di Vercel dashboard

### Environment Variables tidak terbaca
- Pastikan prefix `VITE_` untuk Vite
- Restart deployment setelah add env vars

---

## 📱 **Testing Checklist Post-Deploy**

- [ ] Website loading dengan benar
- [ ] Responsive design berfungsi di mobile
- [ ] Form contact bisa mengirim email
- [ ] Semua animasi berjalan smooth
- [ ] Navigation menu berfungsi
- [ ] Links eksternal (GitHub, LinkedIn) bekerja
- [ ] Logo dan images loading dengan benar

---

## 🎯 **Performance Optimization**

### 1. **Image Optimization**
```bash
# Install sharp untuk optimasi image
npm install sharp

# Atau gunakan Vercel Image Optimization
import Image from 'next/image' // Untuk Next.js
```

### 2. **Bundle Analysis**
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

### 3. **Lighthouse Score**
- Test di: https://pagespeed.web.dev
- Target: 90+ untuk semua metrics

---

## 🎉 **Final Steps**

1. **Update README.md** dengan live URL
2. **Share portfolio link** di social media
3. **Add to CV/resume**
4. **Monitor analytics** dan feedback

---

**🚀 Ready to deploy!** 

Pilih method deployment yang Anda prefer dan ikuti steps di atas. Setelah deploy, jangan lupa test form contact untuk memastikan EmailJS berfungsi di production!
