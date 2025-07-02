"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h4 className="text-2xl font-light text-black mb-2">Message Sent!</h4>
        <p className="text-lg text-black/70 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
        <Button
          onClick={() => setStatus("idle")}
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Name *
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-black/20 focus:border-black focus:ring-black"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email *
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-black/20 focus:border-black focus:ring-black"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
          Subject *
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-black/20 focus:border-black focus:ring-black"
          placeholder="Commission, Collaboration, Performance..."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="border-black/20 focus:border-black focus:ring-black resize-none"
          placeholder="..."
        />
      </div>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-red-600 text-sm"
        >
          <AlertCircle className="w-4 h-4 mr-2" />
          {errorMessage}
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-black text-white hover:bg-black/80 disabled:opacity-50"
      >
        {status === "loading" ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </div>
        )}
      </Button>

      {/* <p className="text-xs text-black/60 text-center">
        Thanks for your message. I'll get back to you as soon as possible.
      </p> */}
    </form>
  )
}
