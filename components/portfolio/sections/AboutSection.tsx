"use client"

import { motion } from "framer-motion"
import { contentVariants } from "@/lib/animations"

interface AboutSectionProps {
  description: string
}

export default function AboutSection({ description }: AboutSectionProps) {
  return (
    <motion.p variants={contentVariants} className="text-lg md:text-xl text-black leading-relaxed">
      {description}
    </motion.p>
  )
}
