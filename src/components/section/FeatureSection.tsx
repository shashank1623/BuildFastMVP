'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Layers, Database, Shield, Folder, Mail, CreditCard, Search, Paintbrush, Rocket, Check } from 'lucide-react'
import Image from 'next/image'
import NextLogo from "@/assets/nextjs.webp"
import trpcLogo from "@/assets/_trpc.webp"
import ReactQueryLogo from "@/assets/react-query.webp"
import PostgresLogo from "@/assets/postgres.svg"
import PrismaLogo from "@/assets/file-type-light-prisma.svg"
import NextAuthLogo from "@/assets/logo-sm.png"
import AwsS3Logo from "@/assets/s3.webp"
import resendLogo from "@/assets/resend-icon-black.svg"
import stripeLogo from "@/assets/Stripe_id7qRMcZ8P_1.png"
import tailwindLogo from "@/assets/Tailwind CSS_idNx_0wkQY_1.png"

const features = [
  {
    name: 'Full Stack',
    icon: Layers,
    color: 'text-orange-500',
    details: {
      title: 'Full Stack',
      features: [
        'Next.js 14 with app directory',
        'Optimized for Server Components',
        'Powerful data fetching with React Query',
        'End to end type safe API with tRPC'
      ],
      logos: [
        { src: NextLogo , alt: 'NextJS', text: 'with NextJS' },
        { src: trpcLogo, alt: 'tRPC', text: 'with tRPC' },
        { src: ReactQueryLogo, alt: 'React Query', text: 'with React Query' }
      ]
    }
  },
  {
    name: 'Database',
    icon: Database,
    color: 'text-gray-400',
    details: {
      title: 'Database',
      features: [
        'PostgreSQL database setup',
        'Prisma ORM integration',
        'Automatic migrations',
        'Type-safe database queries'
      ],
      logos: [
        { src: PostgresLogo, alt: 'PostgreSQL', text: 'with PostgreSQL' },
        { src: PrismaLogo, alt: 'Prisma', text: 'with Prisma' }
      ]
    }
  },
  {
    name: 'Auth',
    icon: Shield,
    color: 'text-gray-400',
    details: {
      title: 'Authentication',
      features: [
        'NextAuth.js integration',
        'Multiple auth providers',
        'Protected API routes',
        'Role-based access control'
      ],
      logos: [
        { src: NextAuthLogo, alt: 'NextAuth', text: 'with NextAuth.js' }
      ]
    }
  },
  {
    name: 'File Storage',
    icon: Folder,
    color: 'text-gray-400',
    details: {
      title: 'File Storage',
      features: [
        'S3-compatible storage',
        'Image optimization',
        'Secure file uploads',
        'CDN integration'
      ],
      logos: [
        { src: AwsS3Logo, alt: 'S3', text: 'with S3' }
      ]
    }
  },
  {
    name: 'Emails',
    icon: Mail,
    color: 'text-gray-400',
    details: {
      title: 'Email System',
      features: [
        'Transactional emails',
        'Email templates',
        'SMTP integration',
        'Email analytics'
      ],
      logos: [
        { src: resendLogo, alt: 'Resend', text: 'with Resend' }
      ]
    }
  },
  {
    name: 'Payments',
    icon: CreditCard,
    color: 'text-gray-400',
    details: {
      title: 'Payment System',
      features: [
        'Stripe integration',
        'Subscription management',
        'Usage-based billing',
        'Invoice generation'
      ],
      logos: [
        { src: stripeLogo, alt: 'Stripe', text: 'with Stripe' }
      ]
    }
  },
  {
    name: 'SEO',
    icon: Search,
    color: 'text-gray-400',
    details: {
      title: 'SEO Optimization',
      features: [
        'Meta tags management',
        'Sitemap generation',
        'OpenGraph support',
        'Structured data'
      ],
      logos: [
        { src: NextLogo, alt: 'Next SEO', text: 'with Next SEO' }
      ]
    }
  },
  {
    name: 'Styling',
    icon: Paintbrush,
    color: 'text-gray-400',
    details: {
      title: 'Styling System',
      features: [
        'Tailwind CSS setup',
        'Dark mode support',
        'Component library',
        'Custom themes'
      ],
      logos: [
        { src: tailwindLogo, alt: 'Tailwind', text: 'with Tailwind CSS' }
      ]
    }
  }
]

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Launch, Monetize & Scale
            </h2>
            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-orange-500 animate-bounce" />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto"
          >
            Bring your SaaS concept into a profitable reality with our starter kit, packed with all the tools you need to launch, monetize, and succeed.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 mb-16">
            {features.map((feature) => (
              <motion.button
                key={feature.name}
                onClick={() => setSelectedFeature(feature)}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gray-800/50 
                    group-hover:bg-gray-800 transition-colors
                    ${selectedFeature.name === feature.name ? 'ring-2 ring-orange-500' : ''}`}
                >
                  <feature.icon className={`w-8 h-8 ${selectedFeature.name === feature.name ? 'text-orange-500' : 'text-gray-400'}`} />
                </div>
                <span className={`font-medium ${selectedFeature.name === feature.name ? 'text-orange-500' : 'text-gray-300'}`}>
                  {feature.name}
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{selectedFeature.details.title}</h3>
              <div className="grid gap-4 mb-8">
                {selectedFeature.details.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {selectedFeature.details.logos.map((logo) => (
                  <div key={logo.alt} className="flex items-center gap-2">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">{logo.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Gradient decorations */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  )
}

