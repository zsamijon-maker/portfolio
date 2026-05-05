import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  Wrench,
  Brain,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={24} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Zap size={24} />,
      skills: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Supabase', 'REST APIs'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Other Skills',
      icon: <Brain size={24} />,
      skills: ['Problem-solving', 'Debugging', 'Responsive Design', 'UI/UX Basics', 'Version Control', 'Team Collaboration'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      className="py-20 bg-background/50 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Skills</span>
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4" />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl"
            >
              <div className={`flex items-center gap-3 mb-6`}>
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency visualization */}
        <motion.div
          variants={itemVariants}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { skill: 'React & TypeScript', level: 85 },
              { skill: 'JavaScript & Web Development', level: 90 },
              { skill: 'Python & Problem Solving', level: 80 },
              { skill: 'UI/UX Design Principles', level: 75 },
              { skill: 'Database & Backend', level: 70 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-blue-400">{item.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
