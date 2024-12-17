'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'
import FeaturedLogos from "@/components/section/FeaturedLogos"
import AvatarCirclesDemo from "@/components/section/AvatarCirclesDemo"
import TechLogosBlob from './TechLogosBlob'
import Link from 'next/link'
import { useToast } from "@/hooks/use-toast"
import { useInView } from 'react-intersection-observer'

const HeroSection = () => {
  const { toast } = useToast();
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Here you would typically send the email to your backend
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      toast({
        title: "Success",
        description: "You're on the list! Check your inbox for updates.",
      });
      setEmail("");
    } catch (error) {
      console.error("Failed to join waitlist", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">
      {/* Grid background with custom color and dual circles */}
      <div
        className="absolute inset-0 w-full h-full bg-repeat pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 80 80'%3E%3Cg%20fill='none'%20stroke='%23475569'%20stroke-width='1'%3E%3Cpath%20d='M0%2079.5h80'%2F%3E%3Cpath%20d='M.5%200v80'%2F%3E%3C%2Fg%3E%3Cg%20fill='%230E1116'%3E%3Ccircle%20cx='0'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='6'%20/%3E%3C/g%3E%3Cg%20fill='%23475569'%3E%3Ccircle%20cx='0'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='3'%20/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      {/* Spotlight feature */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 lg:-top-60 lg:left-0 xl:left-60"
        fill="white"
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-600 leading-tight">
            Deploy your MVP in hours at Warp Speed.
          </h1>
          <p className="text-lg sm:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
            The NextJs boilerplate with all you need to build $1M SaaS, AI tool, or any other web app and make your first $ online, fast.
          </p>

          <Link href={'/sign-in'} >
            <motion.button
              key="join-waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[16rem] bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </Link>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <AvatarCirclesDemo />
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <div className="text-base text-gray-200">
                <span className="font-semibold text-white">10</span> Builders already Joined!
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Logos Blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <TechLogosBlob />
        </motion.div>
      </div>

      {/* Featured logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8"
      >
        <FeaturedLogos />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
    </section>
  )
}

export default HeroSection

