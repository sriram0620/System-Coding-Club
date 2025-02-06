"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Cpu, CircuitBoardIcon as Circuit, Database, Code2 } from "lucide-react"
import CircuitAnimation from "@/components/CircuitAnimation"
import MatrixRain from "@/components/MatrixRain"
import ParticleField from "@/components/ParticleField"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import EventCard from "@/components/EventCard"
import ThreeDModelViewer from "@/components/ThreeDModelViewer"

gsap.registerPlugin(ScrollTrigger)

export default function EventsPage() {
  const eventsRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!eventsRef.current || !modelRef.current) return

    gsap.from(eventsRef.current.children, {
      scrollTrigger: {
        trigger: eventsRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
    })

    gsap.from(modelRef.current, {
      scrollTrigger: {
        trigger: modelRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const events = [
    {
      title: "Verilog Workshop",
      date: "2023-09-15",
      time: "14:00 - 17:00",
      location: "Engineering Building, Room 301",
      description: "Learn the basics of Verilog HDL and FPGA programming in this hands-on workshop.",
      icon: Circuit,
    },
    {
      title: "Embedded Systems Hackathon",
      date: "2023-10-01",
      time: "09:00 - 18:00",
      location: "Innovation Lab",
      description: "24-hour hackathon focused on creating innovative embedded systems projects.",
      icon: Cpu,
    },
    {
      title: "MATLAB for Signal Processing",
      date: "2023-10-20",
      time: "15:00 - 18:00",
      location: "Virtual Event",
      description: "Explore advanced signal processing techniques using MATLAB in this online seminar.",
      icon: Database,
    },
    {
      title: "Industry Talk: Future of IoT",
      date: "2023-11-05",
      time: "16:00 - 17:30",
      location: "Auditorium",
      description: "Join us for an insightful talk on the future of IoT by industry experts.",
      icon: Code2,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animations */}
      <div className="fixed inset-0 z-0">
        <CircuitAnimation />
        <MatrixRain />
        <ParticleField />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join us for exciting workshops, hackathons, and talks!
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" ref={eventsRef}>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/20">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Our Tech</h2>
        <div className="max-w-4xl mx-auto h-[400px]" ref={modelRef}>
          <ThreeDModelViewer />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

