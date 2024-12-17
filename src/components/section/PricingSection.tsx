'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Join the waitlist and get started',
    features: [
      'Nextjs Boiler Plate',
      'Basic MVP code only waitlist',
      'Community support',
    ],
  },
  {
    name: 'Gold',
    price: '$49',
    description: 'Everything in Free, plus extended features',
    features: [
      'Access to join waitlist code',
      'Extended MVP boilerplate code',
      '10 landing page design access',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: '$199',
    description: 'Full access with premium support',
    features: [
      'Everything in Gold tier',
      '1 month extended support',
      'Assistance in setup',
      'Direct DM access',
      'Unlimited design access',
    ],
    mostPopular: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function PricingSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-white">
            Choose Your Plan
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400">
            Select the perfect plan to launch your SaaS and start scaling today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center -mx-4"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className={`h-full rounded-lg overflow-hidden ${
                tier.mostPopular 
                  ? 'bg-gradient-to-br from-orange-500 to-purple-600' 
                  : 'bg-gray-900'
              }`}>
                <div className={`h-full p-1 ${tier.mostPopular ? '' : 'bg-gray-900'}`}>
                  <div className="bg-gray-900 rounded-lg p-6 flex flex-col h-full">
                    {tier.mostPopular && (
                      <div className="text-center mb-4">
                        <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-orange-500 text-white">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      {tier.name !== 'Free' && <span className="text-gray-400">/one-time</span>}
                    </div>
                    <p className="text-gray-400 mb-6">{tier.description}</p>
                    <ul className="mb-6 space-y-2 flex-grow">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2 px-4 rounded ${
                      tier.mostPopular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    } transition duration-200`}>
                      {tier.name === 'Free' ? 'Join Waitlist' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

