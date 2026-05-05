import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      label: 'Email',
      value: 'zarkenneth95@gmail.com',
      link: 'mailto:zarkenneth95@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      value: 'GitHub Profile',
      link: '#',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: '#',
      color: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In Touch</span>
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mx-auto" />
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              target={method.link !== 'mailto:zarkenneth95@gmail.com' ? '_blank' : undefined}
              rel={method.link !== 'mailto:zarkenneth95@gmail.com' ? 'noopener noreferrer' : undefined}
              className="glass p-8 rounded-2xl text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-4 bg-gradient-to-r ${method.color} rounded-lg text-white mx-auto mb-4 w-fit`}
              >
                {method.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">
                {method.label}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <div className="glass p-12 rounded-2xl text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, I'd love to hear from you.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="mailto:zarkenneth95@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Send Me an Email
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Response time: Usually within 24 hours
          </p>
          <div className="flex justify-center gap-6">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
            ].map((link, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
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
        </motion.div>
      </motion.div>
    </section>
  );
}
