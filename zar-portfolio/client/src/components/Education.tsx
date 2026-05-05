import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
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
      id="education"
      className="py-20 bg-background/50 relative overflow-hidden"
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
            <span className="text-white">Education</span>
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4" />
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white flex-shrink-0">
                <GraduationCap size={32} />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bohol Island State University - Calape Campus
                </h3>
                <p className="text-lg text-blue-400 font-semibold mb-4">
                  3rd Year Computer Science Student
                </p>

                <div className="space-y-3">
                  <p className="text-gray-400">
                    Pursuing a degree in Computer Science with a focus on software development, algorithms, and modern web technologies.
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Coursework & Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures',
                        'Algorithms',
                        'Web Development',
                        'Database Management',
                        'Software Engineering',
                        'Object-Oriented Programming',
                      ].map((course, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-xl"
          >
            <h4 className="text-lg font-bold text-white mb-4">Achievements</h4>
            <ul className="space-y-2">
              {[
                'Consistent Dean\'s Lister',
                'Active in tech clubs and competitions',
                'Project showcase participant',
              ].map((achievement, index) => (
                <li key={index} className="text-gray-400 flex items-start gap-2">
                  <span className="text-blue-500 mt-1">★</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-xl"
          >
            <h4 className="text-lg font-bold text-white mb-4">Learning Path</h4>
            <ul className="space-y-2">
              {[
                'Mastering full-stack development',
                'Exploring AI/ML applications',
                'Contributing to open-source projects',
              ].map((goal, index) => (
                <li key={index} className="text-gray-400 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
