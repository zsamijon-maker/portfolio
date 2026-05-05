import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  image?: string;
  github?: string;
  live?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'School Voting System for Elections & Pageant Processes',
      description:
        'A web-based system designed to manage and automate student elections and pageant voting with accuracy, transparency, and real-time results.',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
      features: [
        'Secure login and role-based access (admin, voter)',
        'Real-time vote counting and result visualization',
        'Candidate and event management system',
        'Automated validation to prevent duplicate voting',
      ],
    },
    {
      title: 'Driver Alertness Detector',
      description:
        'An AI-based application that monitors driver behavior and detects signs of drowsiness to help prevent accidents.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras'],
      features: [
        'Real-time face and eye detection',
        'Drowsiness alert system with sound notification',
        'Continuous monitoring using webcam input',
        'Lightweight and efficient detection model',
      ],
    },
  ];

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
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Projects</span>
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4" />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 lg:h-auto rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">
                      {index === 0 ? '🗳️' : '🚗'}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {index === 0 ? 'Voting System' : 'AI Detection'}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
