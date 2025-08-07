import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

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
      alert(`✅ Pesan berhasil dikirim!\n\n🎉 Terima kasih ${formData.name}!\nPesan Anda telah dikirim langsung ke email saya (${emailjsConfig.toEmail}) dan akan segera direspons.\n\n📧 Anda juga akan menerima copy email sebagai konfirmasi.`);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      
      // Fallback: redirect to email client
      const subject = encodeURIComponent(`Pesan dari ${formData.name} - Portfolio`);
      const body = encodeURIComponent(`
Halo Zain,

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
      const userChoice = confirm(`❌ Gagal mengirim email otomatis.\n\n🔄 Alternatif: Buka aplikasi email untuk mengirim manual?\n\nKlik OK untuk membuka email client, atau Cancel untuk mencoba lagi.`);
      
      if (userChoice) {
        window.open(mailtoLink, '_blank');
        // Reset form after manual redirect
        setFormData({ name: '', email: '', message: '' });
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'girvanazharr@gmail.com',
      link: 'mailto:girvanazharr@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bogor Barat, Jawa Barat',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/GirvanAzharXD',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/girvanazhar',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/girvanazhar/',
      color: 'hover:text-pink-400'
    }
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Company',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      text: 'Girvan built an impressive machine learning model for our business. His understanding of data science and AI algorithms is exceptional.'
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      text: 'Working with Girvan on our data analysis project was amazing. He created insightful visualizations and predictive models that helped our business grow.'
    },
    {
      name: 'Robert Johnson',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      text: 'Professional and skilled in both web development and machine learning. Girvan delivered a smart web application with AI features that impressed our clients.'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Send me a message
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always excited to collaborate on new projects and explore innovative ideas. 
                Whether you need a website, web application, or technical consultation, 
                I'm here to help turn your vision into reality. ✨
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Follow me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    title={`Connect with me on ${social.name}`}
                    className={`p-3 bg-gray-800 text-gray-400 rounded-lg border border-gray-700 hover:bg-gray-700 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            What clients say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-left italic">
                  "{testimonial.text}"
                </p>
                <div className="flex justify-center mt-4 text-yellow-400">
                  ★★★★★
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
