"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { sectionsData } from "@/data/sections"

interface NavigationSidebarProps {
  activeSection: string | null
  onSectionClick: (sectionKey: string) => void
}

export default function NavigationSidebar({ activeSection, onSectionClick }: NavigationSidebarProps) {
  return (
    <motion.div className="space-y-0">
      {Object.entries(sectionsData).map(([key, section], index) => (
        <motion.div
          key={key}
          layout
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
            layout: {
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.5,
            },
          }}
          className="py-3 sm:py-4 md:py-6 lg:py-5 xl:py-6"
        >
          <motion.button
            layout
            onClick={() => onSectionClick(key)}
            className="flex items-center justify-between w-full text-left group min-w-0"
            transition={{
              layout: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.5,
              },
            }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-black group-hover:opacity-70 transition-all duration-300 ease-out flex-1 pr-4 min-w-0 break-words">
              {section.title}
            </h2>
            <motion.div
              animate={{ rotate: activeSection === key ? 180 : 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="flex-shrink-0 mt-1"
            >
              {activeSection === key ? (
                <Minus className="w-6 h-6 md:w-8 md:h-8 text-black" />
              ) : (
                <Plus className="w-6 h-6 md:w-8 md:h-8 text-black" />
              )}
            </motion.div>
          </motion.button>

          {/* Left side description - appears when clicked */}
          <AnimatePresence mode="wait">
            {activeSection === key && section.leftDescription && (
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 16,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.5,
                    opacity: {
                      duration: 0.3,
                      delay: 0.1,
                    },
                    height: {
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 0.5,
                    },
                    layout: {
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 0.5,
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    duration: 0.4,
                    opacity: {
                      duration: 0.2,
                    },
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      duration: 0.4,
                    },
                    layout: {
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      duration: 0.4,
                    },
                  },
                }}
                className="overflow-hidden"
              >
                <p className="text-base md:text-lg text-black/70 leading-relaxed pr-0 md:pr-8">
                  {section.leftDescription}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )
}
