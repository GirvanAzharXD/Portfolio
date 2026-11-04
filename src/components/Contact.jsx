import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import { Reveal, SectionHeader } from './ui';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Template parameters for EmailJS (sesuai dengan template di dashboard)
      const templateParams = {
        from_name: formData.name,     // {{from_name}}
        from_email: formData.email,   // {{from_email}}
        message: formData.message,    // {{message}}
        reply_to: formData.email,     // Untuk Reply To field
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Show success message
      alert(`Pesan berhasil dikirim!\n\nTerima kasih ${formData.name}!\nPesan Anda telah dikirim langsung ke email saya (${emailjsConfig.toEmail}) dan akan segera direspons.\n\nAnda juga akan menerima copy email sebagai konfirmasi.`);

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);

      // Fallback: redirect to email client
      const subject = encodeURIComponent(`Pesan dari ${formData.name} - Portfolio`);
      const body = encodeURIComponent(`
Halo Girvan,

Saya ${formData.name} ingin menghubungi Anda melalui portfolio website.

Detail kontak saya:
Email: ${formData.email}

Pesan:
${formData.message}

---
Pesan ini dikirim dari form contact portfolio website.
      `);

      const mailtoLink = `mailto:${emailjsConfig.toEmail}?subject=${subject}&body=${body}`;

      // Show error message with fallback option
      const userChoice = confirm(`Gagal mengirim email otomatis.\n\nAlternatif: Buka aplikasi email untuk mengirim manual?\n\nKlik OK untuk membuka email client, atau Cancel untuk mencoba lagi.`);

      if (userChoice) {
        window.open(mailtoLink, '_blank');
        // Reset form after manual redirect
        setFormData({ name: '', email: '', message: '' });
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'girvanazharr@gmail.com',
      link: 'mailto:girvanazharr@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Bogor Barat, Jawa Barat',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/GirvanAzharXD'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/girvanazhar'
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/girvanazhar/'
    }
  ];

  const inputClassName = 'w-full border border-line bg-surface px-4 py-3 text-paper placeholder:text-muted focus:border-accent focus:outline-none';

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="06"
          label="Contact"
          title="Let's connect"
          blurb="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <Reveal>
            <h3 className="font-display text-2xl text-paper">
              Send me a message
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              I&rsquo;m always excited to collaborate on new projects and explore innovative ideas.
              Whether you need a website, web application, or technical consultation,
              I&rsquo;m here to help turn your vision into reality.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs tracking-[0.2em] text-muted">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs tracking-[0.2em] text-muted">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-[0.2em] text-muted">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClassName} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 bg-paper px-6 py-3.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-white disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                ) : (
                  <>
                    Send message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Contact Info & Social */}
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl text-paper">
              Get in touch
            </h3>
            <div className="mt-6 space-y-0 border-t border-line">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-center gap-4 border-b border-line py-5"
                >
                  <span className="text-muted">{info.icon}</span>
                  <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-muted">
                      {info.title.toUpperCase()}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="mt-1 block text-paper underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-paper">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl text-paper">
              Follow me
            </h3>
            <div className="mt-5 flex flex-wrap gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  title={`Connect with me on ${social.name}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-paper"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
