"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronRight, Code2 } from 'lucide-react';
import { TeamMember } from '@/lib/data/team';

interface TeamCardProps {
  member: TeamMember;
  variant: 'faculty' | 'core' | 'coordinator' | 'mentor';
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  })
};

export function TeamCard({ member, variant, index }: TeamCardProps) {
  const getWingColor = (wing?: string) => {
    switch (wing) {
      case 'Verilog':
        return '#3B82F6';
      case 'Embedded Systems':
        return '#8B5CF6';
      case 'MATLAB':
        return '#EC4899';
      default:
        return '#6366F1';
    }
  };

  const renderFacultyCard = () => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
      style={{ width: "320px", height: "400px" }}
    >
      <div className="relative h-1/2">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <a href={member.linkedin} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
        <p className="text-blue-400 mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm mb-3">{member.department}</p>
        <div className="bg-blue-500/10 px-3 py-2 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="text-blue-400 font-medium">Expertise:</span> {member.expertise}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderCoreCard = () => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
      style={{ width: "280px", height: "360px" }}
    >
      <div className="relative h-1/2">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {member.github && (
            <a href={member.github} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
          <a href={member.linkedin} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            <Linkedin className="w-4 h-4 text-white" />
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        {member.wing && (
          <div className="absolute bottom-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `linear-gradient(135deg, ${getWingColor(member.wing)}50%, transparent)`
              }}
            >
              {member.wing}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        <p className="text-blue-400 text-sm mb-3">{member.role}</p>
        {member.projects && (
          <div className="space-y-1">
            {member.projects.map((project, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs">{project}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderCoordinatorCard = () => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)" }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
      style={{ width: "300px", height: "380px" }}
    >
      <div className="relative h-1/3">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {member.github && (
            <a href={member.github} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
          <a href={member.linkedin} className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            <Linkedin className="w-4 h-4 text-white" />
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        {member.wing && (
          <div className="absolute bottom-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `linear-gradient(135deg, ${getWingColor(member.wing)}50%, transparent)`
              }}
            >
              {member.wing}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        <p className="text-purple-400 text-sm mb-3">{member.role}</p>
        {member.contributions && (
          <div className="space-y-2">
            {member.contributions.map((contribution, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs">{contribution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderMentorCard = () => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
      style={{ width: "340px", height: "420px" }}
    >
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-1 relative">
          <div className="absolute inset-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-70" />
          </div>
        </div>
        <div className="col-span-2 p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-blue-400 text-sm">{member.role}</p>
            <p className="text-gray-400 text-xs mt-1">{member.company}</p>
          </div>
          
          <div className="flex-grow space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Expertise</h4>
              <p className="text-gray-400 text-sm">{member.expertise}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Mentoring Focus</h4>
              <p className="text-gray-400 text-sm">{member.focus}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <a 
              href={member.linkedin} 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  switch (variant) {
    case 'faculty':
      return renderFacultyCard();
    case 'core':
      return renderCoreCard();
    case 'coordinator':
      return renderCoordinatorCard();
    case 'mentor':
      return renderMentorCard();
    default:
      return null;
  }
}