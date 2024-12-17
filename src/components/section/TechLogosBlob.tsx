'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import NextLogo from "@/assets/Logo.png"
import TailwindLogo from "@/assets/Tailwind CSS_idNx_0wkQY_1.png"
import NextAuthLogo from "@/assets/logo-sm.png"
import StripeLogo from "@/assets/Stripe_id7qRMcZ8P_1.png"
import SupabaseLogo from "@/assets/idsfIhEopt_logos.png"
import ResendLogo from "@/assets/resend-icon-black.svg"
import PrismaLogo from "@/assets/file-type-light-prisma.svg"

const logos = [
  {
    name: 'Next.js',
    src: NextLogo,
    position: 'top-[5%] left-[10%] sm:top-[8%] sm:left-[12%]'
  },
  {
    name: 'Tailwind',
    src: TailwindLogo,
    position: 'top-[5%] right-[10%] sm:top-[8%] sm:right-[12%]'
  },
  {
    name: 'Prisma',
    src: PrismaLogo,
    position: 'top-[25%] left-[5%] sm:top-[28%] sm:left-[8%]'
  },
  {
    name: 'Resend',
    src: ResendLogo,
    position: 'bottom-[20%] right-[5%] sm:bottom-[23%] sm:right-[8%]'
  },
  {
    name: 'Stripe',
    src: StripeLogo,
    position: 'bottom-[10%] left-[10%] sm:bottom-[12%] sm:left-[12%]'
  },
  {
    name: 'NextAuth',
    src: NextAuthLogo,
    position: 'top-[40%] right-[8%] sm:top-[42%] sm:right-[10%]'
  },
  {
    name: 'Supabase',
    src: SupabaseLogo,
    position: 'top-[40%] left-[40%] sm:top-[35%] sm:left-[35%] md:top-[30%] md:left-[30%]'
  }
];



export default function TechLogosBlob() {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square mx-auto">
      <motion.div
        className="w-full h-full"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Dashed blob SVG */}
        <svg
          className="w-full h-full"
          viewBox="0 0 186 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M136.029 16.6624C148.445 25.5111 156.115 38.8896 165.366 51.7413C174.74 64.5931 185.696 77.0234 184.965 89.1378C184.357 101.252 172.062 112.945 162.81 126.007C153.558 139.07 147.472 153.291 135.663 164.879C123.977 176.361 106.569 184.999 89.1614 184.999C71.7536 185.104 54.3457 176.361 38.0335 167.196C21.5995 157.926 6.26113 148.235 2.24394 135.172C-1.89499 122.215 5.28727 105.782 9.30446 91.4553C13.4434 77.2341 14.539 64.9091 17.4606 50.2665C20.5039 35.624 25.6167 18.6639 37.9117 9.81517C50.0851 0.861095 69.6841 0.0183531 88.0658 1.70383C106.326 3.49464 123.612 7.81367 136.029 16.6624Z"
            stroke="rgba(255,255,255,0.2)"
            strokeMiterlimit="3.97115"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Tech logos */}
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          className={`absolute ${logo.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-xl p-2 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
