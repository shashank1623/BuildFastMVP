'use client'

import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'

const tasks = [
  { time: 4, description: 'to set up emails' },
  { time: 6, description: 'designing a landing page' },
  { time: 4, description: 'to handle Stripe webhooks' },
  { time: 2, description: 'for SEO tags' },
  { time: 1, description: 'applying for Google OAuth' },
  { time: 3, description: 'for DNS records' },
  { time: 2, description: 'for protected API routes' },
  { time: '∞', description: 'overthinking...' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function TimeTaken() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
            The Painful Reality of Building a SaaS
          </h2>
          <motion.div 
            className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {tasks.map((task) => (
                <motion.div
                  key={task.description}
                  variants={itemVariants}
                  className="flex items-center space-x-4 bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-orange-300 group-hover:text-purple-300 transition-colors">
                      {task.time} {typeof task.time === 'number' ? (task.time === 1 ? 'hr' : 'hrs') : ''}
                    </p>
                    <p className="text-gray-400 text-sm">{task.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3"
            >
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">22+ hours</span>
              <span className="text-xl text-gray-400">of headaches</span>
              <Clock className="w-8 h-8 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-400 mb-6">↓ There&apos;s an easier way</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Discover Our Solution
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

