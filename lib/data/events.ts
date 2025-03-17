// Events data structure
export interface EventSpeaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface EventRegistration {
  deadline: string;
  maxParticipants: number;
  currentParticipants: number;
  teamSize?: { min: number; max: number };
  prerequisites?: string[];
}

export interface EventPrize {
  position: string;
  amount: string;
  benefits?: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Verilog' | 'Embedded Systems' | 'MATLAB';
  type: 'Workshop' | 'Hackathon' | 'Competition' | 'Seminar';
  description: string;
  location: string;
  image: string;
  speakers?: EventSpeaker[];
  registration?: EventRegistration;
  prizes?: EventPrize[];
  skills?: string[];
  status: 'upcoming' | 'ongoing' | 'past';
}

export const events: Event[] = [
  {
    id: "verilog-2024",
    title: "Verilog Design Challenge",
    date: "April 15, 2024",
    time: "9:00 AM - 6:00 PM",
    category: "Verilog",
    type: "Competition",
    description: "Design and implement complex digital circuits using Verilog HDL. This challenge focuses on FPGA-based solutions for real-world problems.",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&q=80",
    registration: {
      deadline: "April 10, 2024",
      maxParticipants: 200,
      currentParticipants: 150,
      teamSize: { min: 2, max: 4 },
      prerequisites: [
        "Basic knowledge of Digital Electronics",
        "Understanding of Verilog HDL",
        "FPGA programming experience"
      ]
    },
    prizes: [
      {
        position: "First Prize",
        amount: "₹50,000",
        benefits: ["Internship opportunity at Intel", "FPGA Development Kit"]
      },
      {
        position: "Second Prize",
        amount: "₹30,000",
        benefits: ["FPGA Development Kit"]
      },
      {
        position: "Third Prize",
        amount: "₹20,000",
        benefits: ["Digital Design Software Licenses"]
      }
    ],
    skills: ["Verilog HDL", "FPGA", "Digital Design", "SystemVerilog"],
    status: "upcoming"
  },
  {
    id: "iot-hackathon",
    title: "IoT Hackathon",
    date: "April 25, 2024",
    time: "10:00 AM - 6:00 PM",
    category: "Embedded Systems",
    type: "Hackathon",
    description: "48-hour hackathon focused on building IoT solutions using Arduino and ESP32. Create innovative solutions for smart cities and industrial automation.",
    location: "Lab Complex",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&h=400&q=80",
    registration: {
      deadline: "April 20, 2024",
      maxParticipants: 150,
      currentParticipants: 120,
      teamSize: { min: 3, max: 4 },
      prerequisites: [
        "Arduino/ESP32 programming",
        "Basic electronics knowledge",
        "IoT protocols understanding"
      ]
    },
    prizes: [
      {
        position: "First Prize",
        amount: "₹40,000",
        benefits: ["IoT Development Kits", "Cloud Credits"]
      }
    ],
    skills: ["Arduino", "ESP32", "IoT Protocols", "Sensors"],
    status: "upcoming"
  },
  {
    id: "matlab-workshop",
    title: "MATLAB Workshop Series",
    date: "May 5-7, 2024",
    time: "2:00 PM - 5:00 PM",
    category: "MATLAB",
    type: "Workshop",
    description: "Three-day intensive workshop on Signal Processing and Control Systems using MATLAB. Learn from industry experts and get hands-on experience.",
    location: "Online",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&q=80",
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        role: "Senior Research Scientist",
        company: "MathWorks",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80"
      }
    ],
    registration: {
      deadline: "May 1, 2024",
      maxParticipants: 100,
      currentParticipants: 45
    },
    skills: ["Signal Processing", "Control Systems", "MATLAB", "Simulink"],
    status: "upcoming"
  }
];

export const pastEvents: Event[] = [
  {
    id: "fpga-workshop",
    title: "FPGA Programming Workshop",
    date: "March 1, 2024",
    time: "10:00 AM - 4:00 PM",
    category: "Verilog",
    type: "Workshop",
    description: "Hands-on session on FPGA programming and RTL design. Learn industry-standard practices and tools.",
    location: "Lab Complex",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&q=80",
    status: "past"
  },
  {
    id: "embedded-bootcamp",
    title: "Embedded Systems Bootcamp",
    date: "February 15, 2024",
    time: "9:00 AM - 6:00 PM",
    category: "Embedded Systems",
    type: "Workshop",
    description: "Two-day bootcamp on ARM microcontrollers and RTOS. Build real-world embedded applications.",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&h=400&q=80",
    status: "past"
  }
];