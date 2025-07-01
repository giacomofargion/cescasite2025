"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { carouselImages } from "@/data/images"
import { rightColumnVariants } from "@/lib/animations"

interface ImageCarouselProps {
  isActive: boolean
}

export default function ImageCarousel({ isActive }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    if (!isActive) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length)
      }, 10000)

      return () => clearInterval(interval)
    }
  }, [isActive])

  if (isActive) return null

  return (
    <motion.div key="carousel" variants={rightColumnVariants} initial="initial" animate="animate" exit="exit">
      <div className="aspect-[4/3] overflow-hidden bg-gray-200 shadow-lg relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <img
              src={carouselImages[currentImage]?.src || "/placeholder.svg"}
              alt={`Portfolio image ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Photo Credit Overlay */}
            <div className="absolute bottom-0 right-0 bg-black/60 text-white px-3 py-1 text-xs">
              {carouselImages[currentImage]?.credit}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
