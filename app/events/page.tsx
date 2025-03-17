"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Search, Filter } from 'lucide-react';
import CircuitAnimation from '@/components/CircuitAnimation';
import MatrixRain from '@/components/MatrixRain';
import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EventCard } from '@/components/events/EventCard';
import { events, pastEvents } from '@/lib/data/events';

export default function EventsPage() {
  const upcomingEventsRef = useRef<HTMLDivElement>(null);
  const pastEventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (upcomingEventsRef.current) {
      observer.observe(upcomingEventsRef.current);
    }
    if (pastEventsRef.current) {
      observer.observe(pastEventsRef.current);
    }

    return () => {
      if (upcomingEventsRef.current) {
        observer.unobserve(upcomingEventsRef.current);
      }
      if (pastEventsRef.current) {
        observer.unobserve(pastEventsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animations */}
      <div className="fixed inset-0 z-0">
        <CircuitAnimation />
        <MatrixRain />
        <ParticleField />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Events & Activities
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join us in exploring the future of technology
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div
            className="max-w-2xl mx-auto flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="bg-white/10 border border-white/20 rounded-full p-2 hover:bg-white/20 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={upcomingEventsRef}>
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                variant="large"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={pastEventsRef}>
            {pastEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                variant="compact"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}