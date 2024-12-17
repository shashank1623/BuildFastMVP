'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, Clock, Brain, TrendingUp } from 'lucide-react'
import shashank from "@/assets/shashank.jpeg"

const features = [
  {
    icon: Clock,
    title: 'Save time',
    description: 'and focus on what matters: building a business'
  },
  {
    icon: Brain,
    title: 'Avoid headaches',
    description: 'like emails ending in spam or handling Stripe subscriptions'
  },
  {
    icon: TrendingUp,
    title: 'Get profitable fast',
    description: 'the more you ship, the more you learn, the more you earn'
  }
]

export default function AboutSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Gradient decorations */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column with photo and award badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 max-w-md mx-auto lg:mx-0">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src={shashank}
                  alt="Shashank's Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
                <motion.div 
                  className="absolute -right-4 -bottom-4 bg-amber-400 rounded-full p-3 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 15 }}
                >
                  <BadgeCheck className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Shashank</h3>
                <p className="text-gray-600">Founder of BuildFast</p>
              </div>
            </div>
          </motion.div>

          {/* Right column with content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hey, it&apos;s Shashank aka TheGhost 👋
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>
                I&apos;ve started my coding journey in 2020, I greatly inspired by Mark Zuckerberg, Launch a startup in 2022, and got failed...
              </p>
              <p>
                A few years after my burnout, I restarted the journey differently: as a Freelancer where I built MVP&apos;s for more than 
                —<Link href="#" className="text-blue-400 hover:text-blue-300 underline"> 5+ startups</Link>.
                Now I&apos;m building BuildFast, a tool to help you launch your startup quickly.
              </p>
              <p>
                I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks,
                design pricing section... So I built BuildFast for 3 reasons:
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-purple-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-gray-300"
            >
              <p>
                <Link href="#" className="text-blue-400 hover:text-blue-300">300+ people</Link> trust me on Twitter,
                <Link href="#" className="text-blue-400 hover:text-blue-300"> 10+ solopreneurs</Link> are using BuildFast
                to launch MVP&apos;s quickly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

