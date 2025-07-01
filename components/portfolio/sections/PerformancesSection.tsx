"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { contentVariants, itemVariants } from "@/lib/animations"
import type { PerformanceItem } from "@/types/portfolio"

interface PerformancesSectionProps {
  items: PerformanceItem[]
}

export default function PerformancesSection({ items }: PerformancesSectionProps) {
  return (
    <motion.div variants={contentVariants} className="space-y-8">
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants} className="">
          <div className="block text-black transition-all duration-300 ease-out">
            <div className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="flex-1 text-lg md:text-xl">{item.title}</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-black/60">
                  <span>{item.year}</span>
                  {item.venue && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{item.venue}</span>
                    </>
                  )}
                </div>
                {item.description && <p className="mt-2 text-base text-black/80 leading-relaxed">{item.description}</p>}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
