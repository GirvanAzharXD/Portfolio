# 📧 Setup EmailJS untuk Form Contact

Form contact pada portfolio ini menggunakan **EmailJS** untuk mengirim email langsung tanpa backend/database.

## 🚀 Setup Cepat

### 1. Daftar EmailJS (Gratis)
- Kunjungi: https://emailjs.com
- Daftar akun gratis (1000 email/bulan)
- Verifikasi email Anda

### 2. Buat Email Service
1. **Dashboard → Email Services → Add New Service**
2. Pilih provider email Anda:
   - **Gmail** (Recommended)
   - Outlook
   - Yahoo
   - Custom SMTP
3. **Connect Account** dan ikuti instruksi
4. **Catat Service ID** (contoh: `service_abcd123`)

### 3. Buat Email Template
1. **Dashboard → Email Templates → Create New Template**
2. **Template Name**: `Contact Form Portfolio`
3. **Template ID**: `template_contact` (bisa custom)
4. **Subject**: `Pesan Baru dari Portfolio - {{from_name}}`
5. **Content**: Copy template di bawah ini

#### Template HTML untuk Email:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px;">
  <h2 style="color: #3b82f6;">📧 Pesan Baru dari Portfolio</h2>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Detail Pengirim:</h3>
    <p><strong>Nama:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Waktu:</strong> {{sent_date}}</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
    <h3>Pesan:</h3>
    <p>{{message}}</p>
  </div>
  
  <p style="color: #666; font-size: 14px;">
    Email otomatis dari portfolio website. Reply untuk membalas.
  </p>
</div>
```

6. **Save Template**

### 4. Dapatkan Public Key
1. **Dashboard → Account → General**
2. Copy **Public Key** (contoh: `abcd1234567890`)

### 5. Update Konfigurasi
Edit file `src/config/emailjs.js`:

```javascript
export const emailjsConfig = {
  serviceID: 'service_abcd123',      // Ganti dengan Service ID Anda
  templateID: 'template_contact',    // Ganti dengan Template ID Anda  
  publicKey: 'abcd1234567890',       // Ganti dengan Public Key Anda
  toEmail: 'your-email@gmail.com',   // Ganti dengan email Anda
  toName: 'Nama Anda'                // Ganti dengan nama Anda
};
```

### 6. Test Form
1. Restart development server: `npm run dev`
2. Buka website dan test form contact
3. Cek email masuk di inbox Anda

## 🎯 Fitur yang Sudah Diimplementasi

✅ **Auto Email Sending**: Pesan langsung masuk ke email Anda  
✅ **Form Validation**: Validasi input sebelum kirim  
✅ **Loading State**: Loading indicator saat mengirim  
✅ **Success/Error Messages**: Feedback yang jelas untuk user  
✅ **Fallback System**: Buka email client jika gagal otomatis  
✅ **Email Formatting**: Template email yang rapi dan profesional  
✅ **Reply-to Setup**: User bisa langsung direply dari email  

## 🔧 Troubleshooting

### Error "EmailJS is not initialized"
- Pastikan Public Key sudah benar
- Cek network connection

### Email tidak masuk
- Cek spam folder
- Pastikan Service ID dan Template ID benar
- Cek quota EmailJS (max 1000/bulan untuk free)

### CORS Error di production
- EmailJS otomatis handle CORS
- Pastikan domain production sudah didaftarkan di EmailJS dashboard

## 📊 Monitoring

- **Dashboard EmailJS**: Monitor email yang terkirim
- **Browser Console**: Cek log error jika ada masalah
- **Email Analytics**: Lihat statistik pengiriman

## 🎨 Customization

### Ubah Template Email
Edit di dashboard EmailJS atau update template di `src/config/emailjs.js`

### Ubah Success Message
Edit di `handleSubmit` function di `Contact.jsx`

### Tambah Field Form
1. Update `formData` state
2. Tambah input field di JSX
3. Update `templateParams` di handleSubmit
4. Update template EmailJS

---

**🎉 Setup selesai!** Form contact Anda sekarang akan mengirim email langsung ke inbox tanpa perlu database atau backend.
