import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Zap, Brain, Globe } from 'lucide-react';

export function AboutSection() {
  const skills = [
    { icon: Code2, title: 'Full-Stack Development', description: 'Building scalable applications with modern frameworks' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive user experiences' },
    { icon: Rocket, title: 'Performance Optimization', description: 'Ensuring lightning-fast load times and smooth interactions' },
    { icon: Zap, title: 'Modern Technologies', description: 'Leveraging cutting-edge tools and best practices' },
    { icon: Brain, title: 'AI Integration', description: 'Incorporating intelligent features into applications' },
    { icon: Globe, title: 'Web3 & Blockchain', description: 'Exploring decentralized technologies' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-4"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="relative rounded-2xl overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNjY2MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="relative rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl mb-4 text-cyan-400">
                Innovator. Creator. Problem Solver.
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate developer with expertise in creating modern, high-performance web applications. 
                With a focus on user experience and cutting-edge technology, I transform ideas into reality.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in tech has been driven by curiosity and a relentless pursuit of excellence. 
                I specialize in full-stack development, UI/UX design, and emerging technologies like AI and Web3.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 mb-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50"
              >
                <skill.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h4 className="relative text-xl mb-2 text-cyan-400">
                {skill.title}
              </h4>
              <p className="relative text-gray-400 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
