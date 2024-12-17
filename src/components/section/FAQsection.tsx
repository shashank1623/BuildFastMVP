'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: "What do I get exactly?",
    answer: "You get a complete Next.js boilerplate with authentication, payments, and a database setup. Everything you need to launch your SaaS fast - from user management to recurring payments."
  },
  {
    question: "Javascript or Typescript?",
    answer: "BuildFast is built with TypeScript for better development experience and fewer bugs in production."
  },
  {
    question: "/app router or /pages router?",
    answer: "We use the new App Router (/app) as it's the future of Next.js. It offers better performance, more features, and improved developer experience."
  },
  {
    question: "Is it a website template?",
    answer: "No, it's much more than that. It's a full-stack boilerplate with authentication, payments, and database integration. Everything is production-ready and fully customizable."
  },
  {
    question: "How is BuildFast better than other boilerplates?",
    answer: "BuildFast is built by indie makers for indie makers and startups. We focus on what matters: shipping fast and making money. No bloat, no unnecessary features, just what you need to launch."
  },
  {
    question: "Are there any other costs associated?",
    answer: "The only additional costs are your hosting and third-party services (like Stripe for payments). We're transparent about costs and provide guides to minimize them."
  },
  {
    question: "How often is BuildFast updated?",
    answer: "We update BuildFast weekly with new features, security patches, and dependency updates. You get lifetime access to all updates."
  }
]

export default function FAQSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Gradient decorations */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-white/10 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:bg-white/5 transition-colors [&[data-state=open]>div]:bg-white/5">
                      <div className="flex items-center w-full px-2 py-2 rounded-md transition-colors">
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center text-gray-400"
          >
            <p className="flex items-center justify-center gap-2">
              Have another question? Contact me on{' '}
              <Link 
                href="https://twitter.com" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Twitter className="w-4 h-4 mr-1" />
                Twitter
              </Link>
              {' '}or by{' '}
              <Link 
                href="mailto:contact@example.com" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1" />
                email
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

