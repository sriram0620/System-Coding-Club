"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { BrainCircuit as Circuit, Code2, Cpu, Database, Rocket, Users, Github, Linkedin, Twitter, Menu, X, Trophy, Medal, Star, Award } from 'lucide-react';
import CircuitAnimation from '@/components/CircuitAnimation';
import MatrixRain from '@/components/MatrixRain';
import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!statsRef.current) return; // Ensure ref is not null
    // Existing animations
    const stats = statsRef.current.children;
    gsap.from(stats, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });

    gsap.from(introRef.current, {
      scrollTrigger: {
        trigger: introRef.current,
        start: "top center",
        end: "center center",
        scrub: 1
      },
      opacity: 0,
      y: 30,
      duration: 1
    });

  if (!achievementsRef.current) return; // Ensure ref is not null before accessing children
    // New animations for achievements
    const achievements = achievementsRef.current.children;
    gsap.from(achievements, {
      scrollTrigger: {
        trigger: achievementsRef.current,
        start: "top center",
        end: "center center",
        scrub: 1
      },
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: "National Robotics Championship",
      description: "First place in the Advanced Category at IRC 2023",
      year: "2023"
    },
    {
      icon: Medal,
      title: "Smart India Hackathon",
      description: "Winners in Hardware Implementation Category",
      year: "2023"
    },
    {
      icon: Star,
      title: "IEEE Recognition",
      description: "Best Student Chapter Award for Technical Excellence",
      year: "2022"
    },
    {
      icon: Award,
      title: "Industry Connect Program",
      description: "Successfully launched collaboration with 5 leading tech companies",
      year: "2023"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Connor",
      role: "Faculty Advisor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Alex Chen",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Maya Patel",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "James Wilson",
      role: "Research Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  ];

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
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            System Coding Club
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Innovate • Automate • Elevate
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105">
              Join Us
            </button>
            <button className="px-8 py-3 border border-blue-500 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105">
              Explore More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 px-4" ref={introRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            The Systems Coding Club at IIITDM Kancheepuram is a hub of innovation where passionate developers and engineers come together to explore the fascinating world of embedded systems and advanced programming. Our mission is to bridge the gap between theoretical knowledge and practical implementation.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" ref={achievementsRef}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <achievement.icon className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 mb-2">{achievement.description}</p>
                  <span className="text-blue-400 text-sm">{achievement.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-400 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      <a href={member.github} className="text-white hover:text-blue-400 transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href={member.linkedin} className="text-white hover:text-blue-400 transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      {/* <a href={member.twitter} className="text-white hover:text-blue-400 transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Circuit, title: "Verilog Programming", description: "Master hardware description language and FPGA development" },
            { icon: Cpu, title: "Embedded Systems", description: "Hands-on experience with microcontrollers and IoT" },
            { icon: Database, title: "MATLAB for Industry", description: "Industrial-grade simulation and analysis" },
            { icon: Code2, title: "Hackathons", description: "Regular coding challenges and competitions" },
            { icon: Rocket, title: "Research Support", description: "Guidance for academic research projects" },
            { icon: Users, title: "Community", description: "Network with like-minded tech enthusiasts" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8" ref={statsRef}>
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "20+", label: "Hackathons Hosted" },
            { number: "200+", label: "Active Members" },
            { number: "15+", label: "Industry Partners" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}