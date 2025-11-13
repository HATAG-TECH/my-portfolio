import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 bg-gray-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center space-x-2"
          >
            <span>© 2025 HATAG Tech. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and cutting-edge tech</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1, color: '#06b6d4' }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
      </div>
    </footer>
  );
}
