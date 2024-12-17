'use client'

import { motion } from 'framer-motion'
import { Crown, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Crown icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
            className="flex justify-center mb-6"
          >
            <Crown className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent"
          >
            Boost your app, launch, earn
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Don&apos;t waste time on Stripe subscriptions or designing a pricing section...
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative inline-block group"
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-600 rounded-full hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
                <path fill="#fff" fillRule="evenodd"
                  d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
                  clipRule="evenodd"></path>
              </svg>
              Get BuildFast
            </Link>
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                Go to BuildFast Checkout
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

