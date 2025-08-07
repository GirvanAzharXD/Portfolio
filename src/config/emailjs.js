// EmailJS Configuration
// Daftarkan akun di https://emailjs.com untuk mendapatkan credentials

export const emailjsConfig = {
  // Service ID dari EmailJS Dashboard
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Template ID dari EmailJS Dashboard  
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  
  // Public Key dari EmailJS Dashboard
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  
  // Email tujuan (email Anda)
  toEmail: import.meta.env.VITE_PORTFOLIO_EMAIL,
  
  // Nama Anda
  toName: 'Mochamad Girvan Azhar',
};

// Template untuk email yang akan dikirim
export const emailTemplate = {
  // Subjek email
  subject: 'Pesan Baru dari Portfolio Website',
  
  // Template HTML untuk email
  htmlTemplate: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3b82f6;">📧 Pesan Baru dari Portfolio</h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Detail Pengirim:</h3>
        <p><strong>Nama:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Waktu:</strong> {{sent_date}}</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Pesan:</h3>
        <p style="line-height: 1.6; color: #374151;">{{message}}</p>
      </div>
      
      <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
        <p style="margin: 0; color: #065f46;">
          <strong>💡 Tip:</strong> Anda bisa langsung reply email ini untuk membalas pesan.
        </p>
      </div>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <p style="color: #6b7280; font-size: 14px; text-align: center;">
        Email ini dikirim otomatis dari portfolio website Anda.
      </p>
    </div>
  `
};

/*
SETUP INSTRUKSI:

1. Daftar di https://emailjs.com (gratis)

2. Buat Service:
   - Pilih email provider (Gmail, Outlook, dll)
   - Hubungkan dengan akun email Anda

3. Buat Template:
   - Subject: {{subject}}
   - Content: Gunakan template HTML di atas
   - Atau buat template sederhana dengan parameter:
     * {{from_name}}
     * {{from_email}} 
     * {{message}}
     * {{to_name}}

4. Ambil Credentials:
   - Service ID
   - Template ID  
   - Public Key

5. Update konfigurasi di atas dengan credentials Anda

6. Test form contact di website
*/
