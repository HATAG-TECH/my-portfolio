import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, TrendingUp, Target } from 'lucide-react';
import { Progress } from './ui/progress';

export function ExperienceSection() {
  const experiences = [
    {
      icon: Briefcase,
      year: '2023 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        { skill: 'React/Next.js', progress: 95 },
        { skill: 'Node.js/Express', progress: 90 },
        { skill: 'Cloud (AWS/Azure)', progress: 85 },
      ],
    },
    {
      icon: Award,
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Creative Digital Studio',
      description: 'Specialized in creating stunning UI/UX experiences and interactive animations.',
      achievements: [
        { skill: 'UI/UX Design', progress: 92 },
        { skill: 'Animation (Framer)', progress: 88 },
        { skill: 'TypeScript', progress: 90 },
      ],
    },
    {
      icon: TrendingUp,
      year: '2019 - 2021',
      title: 'Web Developer',
      company: 'StartUp Ventures',
      description: 'Built responsive websites and contributed to multiple successful product launches.',
      achievements: [
        { skill: 'JavaScript', progress: 93 },
        { skill: 'Responsive Design', progress: 95 },
        { skill: 'API Integration', progress: 87 },
      ],
    },
    {
      icon: Target,
      year: '2018 - 2019',
      title: 'Junior Developer',
      company: 'Code Academy',
      description: 'Started career learning modern web technologies and building foundational skills.',
      achievements: [
        { skill: 'HTML/CSS', progress: 98 },
        { skill: 'Git/GitHub', progress: 90 },
        { skill: 'Problem Solving', progress: 85 },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience & Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-0`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-16 pl-20 md:pl-0' : 'md:pl-16 pl-20 md:pr-0'
                  } mb-8 md:mb-0`}
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {exp.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl mb-2 text-white">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 mb-6">
                      {exp.description}
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500 mb-3">Key Skills & Progress:</p>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300">{achievement.skill}</span>
                            <span className="text-sm text-cyan-400">{achievement.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${achievement.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative overflow-hidden"
                            >
                              <motion.div
                                animate={{
                                  x: ['-100%', '100%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
