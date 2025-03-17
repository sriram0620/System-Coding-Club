"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award, ChevronRight, Cpu, BrainCircuit, Waves } from 'lucide-react';
import { Event } from '@/lib/data/events';

interface EventCardProps {
  event: Event;
  variant?: 'large' | 'compact';
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

export function EventCard({ event, variant = 'large', index }: EventCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Verilog':
        return BrainCircuit;
      case 'Embedded Systems':
        return Cpu;
      case 'MATLAB':
        return Waves;
      default:
        return ChevronRight;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
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

  const CategoryIcon = getCategoryIcon(event.category);
  const categoryColor = getCategoryColor(event.category);

  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={index}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
      >
        <div className="relative h-48">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${categoryColor}50%, transparent)`
                }}
              >
                {event.category}
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                {event.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2">
            <CategoryIcon className="w-5 h-5" style={{ color: categoryColor }} />
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `linear-gradient(135deg, ${categoryColor}50%, transparent)`
              }}
            >
              {event.category}
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs mb-2 inline-block">
            {event.type}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-6">{event.description}</p>
        
        {event.registration && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Registration Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Deadline</span>
                </div>
                <p className="text-gray-300">{event.registration.deadline}</p>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Participants</span>
                </div>
                <p className="text-gray-300">
                  {event.registration.currentParticipants} / {event.registration.maxParticipants}
                </p>
              </div>
            </div>
          </div>
        )}

        {event.prizes && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Prizes</h4>
            <div className="space-y-3">
              {event.prizes.map((prize, index) => (
                <div key={index} className="flex items-start gap-3 bg-purple-500/10 rounded-lg p-4">
                  <Award className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-purple-400">{prize.position}</p>
                    <p className="text-2xl font-bold text-white mb-1">{prize.amount}</p>
                    {prize.benefits && (
                      <ul className="text-sm text-gray-400">
                        {prize.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ChevronRight className="w-3 h-3" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {event.skills && (
          <div className="flex flex-wrap gap-2">
            {event.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}