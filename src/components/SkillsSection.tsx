import React from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Code2, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react';

export function SkillsSection() {
  const skillData = [
    { skill: 'Frontend', value: 95 },
    { skill: 'Backend', value: 88 },
    { skill: 'UI/UX', value: 90 },
    { skill: 'Mobile', value: 82 },
    { skill: 'DevOps', value: 78 },
    { skill: 'Database', value: 85 },
  ];

  const skillIcons = [
    { icon: Code2, name: 'React/Next.js', level: 'Expert', color: 'from-cyan-400 to-blue-500' },
    { icon: Server, name: 'Node.js/Express', level: 'Advanced', color: 'from-green-400 to-emerald-500' },
    { icon: Database, name: 'MongoDB/PostgreSQL', level: 'Advanced', color: 'from-purple-400 to-pink-500' },
    { icon: Palette, name: 'Figma/Design', level: 'Expert', color: 'from-orange-400 to-red-500' },
    { icon: Smartphone, name: 'React Native', level: 'Intermediate', color: 'from-blue-400 to-indigo-500' },
    { icon: Cloud, name: 'AWS/Azure', level: 'Advanced', color: 'from-teal-400 to-cyan-500' },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl text-center mb-6 text-cyan-400">
                Technical Proficiency
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={skillData}>
                  <PolarGrid stroke="#6366f1" strokeOpacity={0.3} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: '#94a3b8', fontSize: 14 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: '#64748b' }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10"
              />
            </div>
          </motion.div>

          {/* Skill Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {skillIcons.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateZ: 5,
                  y: -10,
                }}
                className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
                
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white rounded-xl"
                  />
                </motion.div>

                <h4 className="relative text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="relative px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs inline-block">
                  {skill.level}
                </span>

                {/* Floating particle */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center mb-8 text-purple-400">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Vue.js',
              'Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Redis',
              'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'GitHub Actions',
              'Tailwind CSS', 'Framer Motion', 'Three.js', 'WebGL', 'GraphQL',
              'REST API', 'Microservices', 'CI/CD', 'Agile', 'Scrum'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(6, 182, 212, 0.2)',
                }}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-purple-500/30 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-pointer text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
