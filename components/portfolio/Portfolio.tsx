"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { socialLinks } from "@/data/social-links"
import NavigationSidebar from "./NavigationSidebar"
import ImageCarousel from "./ImageCarousel"
import ContentArea from "./ContentArea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (sectionKey: string) => {
    if (activeSection === sectionKey) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionKey)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-black leading-tight">
            FRANCESCA FARGION
          </h1>
          <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-sm md:text-base text-black mb-3">Composer | Performer</p>

            {/* Social Media Icons */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-all duration-300 ease-out"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="w-full h-px bg-black mt-8 origin-left"
        />
      </motion.header>

      {/* Main Content - Side by Side Layout */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-24">
          {/* Left Column - Navigation Sections */}
          <NavigationSidebar activeSection={activeSection} onSectionClick={handleSectionClick} />

          {/* Right Column - Image Carousel or Content */}
          <div className="lg:pl-8">
            <div className="sticky top-4 sm:top-8">
              <AnimatePresence mode="wait">
                {!activeSection ? (
                  <ImageCarousel key="carousel" isActive={!!activeSection} />
                ) : (
                  <ContentArea key={`content-${activeSection}`} activeSection={activeSection} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
