// Team data structure
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  expertise?: string;
  image: string;
  wing?: string;
  github?: string;
  linkedin: string;
  twitter?: string;
  projects?: string[];
  contributions?: string[];
  company?: string;
  focus?: string;
}

export interface TeamData {
  facultyAdvisors: TeamMember[];
  headCore: TeamMember;
  coreTeam: TeamMember[];
  coordinators: TeamMember[];
  mentors: TeamMember[];
}

export const teamData: TeamData = {
  facultyAdvisors: [
    {
      id: "fa1",
      name: "Dr. Binsu J Kailath",
      role: "Faculty Advisor",
      department: "Electronics & Communication",
      expertise: "VLSI Design, Digital Signal Processing, FPGA",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      id: "fa2",
      name: "Dr. B. Sivaselvan",
      role: "Faculty Advisor",
      department: "Computer Science",
      expertise: "Embedded Systems, IoT, Digital Design",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    }
  ],
  headCore: {
    id: "hc1",
    name: "Rajiv Mehta",
    role: "Club President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    wing: "Verilog",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    expertise: "FPGA Design, System Architecture"
  },
  coreTeam: [
    {
      id: "ct1",
      name: "Maya Patel",
      role: "Verilog Wing Head",
      wing: "Verilog",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
      projects: ["FPGA-based Neural Network", "Digital Signal Processor"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "ct2",
      name: "James Wilson",
      role: "Embedded Systems Lead",
      wing: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
      projects: ["Smart Home Automation", "Industrial IoT Gateway"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "ct3",
      name: "Priya Singh",
      role: "MATLAB Division Head",
      wing: "MATLAB",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80",
      projects: ["Autonomous Vehicle Simulation", "Signal Processing Toolkit"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ],
  coordinators: [
    {
      id: "co1",
      name: "Neha Gupta",
      role: "Verilog Workshop Coordinator",
      wing: "Verilog",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&q=80",
      contributions: [
        "Organized 5 hands-on FPGA workshops",
        "Developed beginner-friendly Verilog tutorials",
        "Mentored 20+ students in hardware design"
      ],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "co2",
      name: "Arjun Reddy",
      role: "IoT Projects Coordinator",
      wing: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&q=80",
      contributions: [
        "Led campus-wide IoT implementation project",
        "Conducted Arduino and ESP32 training sessions",
        "Developed smart campus monitoring system"
      ],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ],
  mentors: [
    {
      id: "m1",
      name: "Dr. Vikram Agarwal",
      role: "Industry Mentor",
      expertise: "FPGA Architecture, ASIC Design",
      focus: "Hardware acceleration for AI applications",
      company: "Intel FPGA Division",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      id: "m2",
      name: "Samantha Lee",
      role: "Alumni Mentor",
      expertise: "Embedded Systems, IoT Security",
      focus: "Secure firmware development practices",
      company: "Tesla Autopilot Team",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    }
  ]
};