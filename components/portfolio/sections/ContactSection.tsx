"use client"

import { motion } from "framer-motion"
import { contentVariants } from "@/lib/animations"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  return (
    <motion.div variants={contentVariants}>
      <ContactForm />
    </motion.div>
  )
}
