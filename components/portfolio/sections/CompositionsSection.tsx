"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { contentVariants, compositionItemVariants } from "@/lib/animations"
import type { CompositionItem } from "@/types/portfolio"

interface CompositionsSectionProps {
  items: CompositionItem[]
}

export default function CompositionsSection({ items }: CompositionsSectionProps) {
  return (
    <motion.div variants={contentVariants} className="space-y-10 md:space-y-8">
      {items.map((item, index) => (
        <motion.div key={index} variants={compositionItemVariants} className="flex flex-col md:flex-row gap-4 md:gap-6">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-44 h-44 md:w-56 md:h-44 lg:w-64 lg:h-52 object-cover shadow-sm"
            />
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-xl md:text-2xl font-light text-black">{item.title}</h4>
              <span className="text-sm text-black/60">({item.year})</span>
              {item.url && item.url !== "#" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-black transition-colors"
                  aria-label={`Open ${item.title} in new tab`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-black/70 mb-2 italic">{item.instrumentation}</p>
            <p className="text-base md:text-lg text-black leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
