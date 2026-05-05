import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Zar Kenneth
            </h3>
            <p className="text-gray-400 text-sm">
              Computer Science Student & Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
              ].map((link) => (
                <motion.button
                  key={link.label}
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {[
                { icon: '📧', label: 'Email', link: 'mailto:zarkenneth95@gmail.com' },
                { icon: '💻', label: 'GitHub', link: '#' },
                { icon: '🔗', label: 'LinkedIn', link: '#' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target={social.link !== 'mailto:zarkenneth95@gmail.com' ? '_blank' : undefined}
                  rel={social.link !== 'mailto:zarkenneth95@gmail.com' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-2xl hover:text-blue-400 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Zar Kenneth C. Samijon. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              title="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
