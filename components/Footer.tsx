"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Events', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <motion.h3
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ElectroCode
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of system developers and innovators.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="col-span-1">
              <motion.h4
                className="text-lg font-semibold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.1) }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="col-span-1">
            <motion.h4
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <MapPin className="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span>IIITDM Kancheepuram, Chennai, Tamil Nadu, India</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span>contact@electrocode.org</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span>+91 123 456 7890</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>© 2024 ElectroCode. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}