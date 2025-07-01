"use client"

import { motion } from "framer-motion"
import { sectionsData } from "@/data/sections"
import { rightColumnVariants, contentVariants } from "@/lib/animations"
import AboutSection from "./sections/AboutSection"
import PerformancesSection from "./sections/PerformancesSection"
import CompositionsSection from "./sections/CompositionsSection"
import FargionsSection from "./sections/FargionsSection"
import ContactSection from "./sections/ContactSection"
import type { PerformanceItem, CompositionItem, FargionItem } from "@/types/portfolio"

interface ContentAreaProps {
  activeSection: string
}

export default function ContentArea({ activeSection }: ContentAreaProps) {
  const section = sectionsData[activeSection]

  const renderSectionContent = () => {
    switch (section.type) {
      case "links":
        return <PerformancesSection items={section.items as PerformanceItem[]} />
      case "composition-list":
        return <CompositionsSection items={section.items as CompositionItem[]} />
      case "fargion-list":
        return <FargionsSection items={section.items as FargionItem[]} />
      case "form":
        return <ContactSection />
      default:
        return <AboutSection description={section.description || ""} />
    }
  }

  return (
    <motion.div
      key={`content-${activeSection}`}
      variants={rightColumnVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-[400px] flex items-start">
        <div className="w-full">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.1,
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 sm:mb-8"
          >
            {section.title}
          </motion.h3>
          <motion.div variants={contentVariants} initial="initial" animate="animate" exit="exit">
            {renderSectionContent()}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
