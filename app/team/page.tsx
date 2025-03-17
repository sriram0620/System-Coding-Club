"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import CircuitAnimation from '@/components/CircuitAnimation';
import MatrixRain from '@/components/MatrixRain';
import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TeamCard } from '@/components/team/TeamCard';
import { teamData } from '@/lib/data/team';

export default function TeamPage() {
  const sectionRefs = {
    faculty: useRef<HTMLDivElement>(null),
    headCore: useRef<HTMLDivElement>(null),
    coreTeam: useRef<HTMLDivElement>(null),
    coordinators: useRef<HTMLDivElement>(null),
    mentors: useRef<HTMLDivElement>(null)
  };

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

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
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
            Our Team
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The minds behind System Coding Club
          </motion.p>
        </div>
      </section>

      {/* Faculty Advisors Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Faculty Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center" ref={sectionRefs.faculty}>
            {teamData.facultyAdvisors.map((advisor, index) => (
              <TeamCard
                key={advisor.id}
                member={advisor}
                variant="faculty"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Head Core Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-6xl mx-auto" ref={sectionRefs.headCore}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Club President
          </h2>
          <div className="flex justify-center">
            <TeamCard
              member={teamData.headCore}
              variant="core"
              index={0}
            />
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center" ref={sectionRefs.coreTeam}>
            {teamData.coreTeam.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                variant="core"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" ref={sectionRefs.coordinators}>
            {teamData.coordinators.map((coordinator, index) => (
              <TeamCard
                key={coordinator.id}
                member={coordinator}
                variant="coordinator"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center" ref={sectionRefs.mentors}>
            {teamData.mentors.map((mentor, index) => (
              <TeamCard
                key={mentor.id}
                member={mentor}
                variant="mentor"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Passionate about electronics, programming, or system design? We're always looking for talented individuals to join our community.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            <span>Apply to Join</span>
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}