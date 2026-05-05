import { motion } from 'framer-motion';

export default function About() {
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

  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4" />
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl"
        >
          <div className="glass p-8 rounded-2xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Computer Science student with a strong foundation in software development and problem-solving. Skilled in building responsive and user-focused applications using modern technologies such as React, TypeScript, and JavaScript.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Experienced in developing projects that combine clean code, functionality, and practical design. Continuously learning and improving to adapt to new technologies and real-world challenges, with the goal of creating efficient and impactful digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing code that is not just functional, but elegant and maintainable. My approach combines technical excellence with a user-centric mindset to deliver solutions that make a real difference.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { label: 'Projects Completed', value: '5+' },
            { label: 'Technologies', value: '10+' },
            { label: 'Years Learning', value: '3+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
