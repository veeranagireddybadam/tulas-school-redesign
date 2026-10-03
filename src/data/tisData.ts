import { SportItem, BoardingScheduleItem, AwardItem, DignitaryItem, TestimonialItem, CampusZone, CollaborationItem } from '../types';

export const SCHOOL_INFO = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "The Modern Gurukul",
  motto: "Let's Do It with Tula's",
  subMotto: "Imparting Education through Seamless Opportunities",
  established: 2012,
  affiliation: "CBSE Affiliated • Co-Educational Residential School (Class IV – XII)",
  campusSize: "22-Acre Pollution-Free Campus",
  ratio: "6:1 Student-to-Teacher Ratio",
  phone: "+91-9837983791",
  landline: "0135-2699444 / 0135-2699666",
  email: "info@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand, India)",
  googleRating: 4.9,
  googleReviewCount: 840,
  admissionsSession: "2025 – 2026 / 2026 – 2027",
};

export const CORE_STATS = [
  { value: "#1", label: "Co-Ed Boarding School", subtext: "In Dehradun by Education Today", icon: "Trophy" },
  { value: "#1", label: "North India Boarding", subtext: "Ranked by Outlook Magazine", icon: "Award" },
  { value: "22", suffix: "Acres", label: "Pristine Green Campus", subtext: "Unpolluted Shivalik Foothills", icon: "Trees" },
  { value: "16+", label: "Olympic Sports", subtext: "With International Mentors", icon: "Medal" },
  { value: "6:1", label: "Student-Teacher Ratio", subtext: "Hyper-Personalized Mentorship", icon: "Users" },
  { value: "100%", label: "Board Results & Placements", subtext: "Ivy League & Top Tier Enrolments", icon: "GraduationCap" },
];

export const PHILOSOPHY_PILLARS = [
  {
    id: "mind",
    badge: "Pillar 01",
    title: "Mind • Academic Brilliance",
    subtitle: "Inquiry, Einstein Robotics & NEP 2020",
    description: "Transcending rote memorization. Our pedagogical framework fosters intellectual curiosity, analytical precision, and future-ready problem solving from Class IV through XII.",
    features: [
      "CBSE Curriculum integrated with NEP 2020 experiential learning",
      "Einstein AI & Robotics Laboratories with 3D prototyping",
      "Stream Specialization: Science (PCM/PCB), Commerce & Humanities",
      "Rigorous SAT, Olympiad, NEET & JEE integrated foundation coaching"
    ],
    accent: "from-blue-600 to-cyan-500",
    glow: "rgba(0, 122, 131, 0.2)",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "body",
    badge: "Pillar 02",
    title: "Body • 16+ Olympic Disciplines",
    subtitle: "Sports is Not a Facility, It's Our Foundation",
    description: "A disciplined, resilient body fosters a tenacious mind. Students train every evening under NIS-certified professional national and international coaches.",
    features: [
      "10m Indoor Air Rifle & Pistol Shooting Range",
      "Equestrian Riding Arena with thoroughbred horses",
      "Semi-Olympic Heated Swimming Pool & Splash Diving",
      "Synthetic Lawn Tennis Courts, Squash & Billiards Salons"
    ],
    accent: "from-red-600 to-amber-500",
    glow: "rgba(185, 1, 36, 0.2)",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "soul",
    badge: "Pillar 03",
    title: "Soul • Ancient Gurukul Ethos",
    subtitle: "Pastoral Care, Mindfulness & Leadership",
    description: "Character, empathy, and integrity form the cornerstone of Tula's. The day commences with sunrise yoga and shloka chanting, grounding young minds in eternal Indian values.",
    features: [
      "Morning Meditation, Pranayama & Vedic Character Building",
      "Housemaster & Housemother pastoral care system (24/7 care)",
      "Pure vegetarian organic sattvic dining designed by nutritionists",
      "Community outreach, environmental guardianship & ethical leadership"
    ],
    accent: "from-amber-600 to-yellow-500",
    glow: "rgba(192, 157, 89, 0.2)",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
  }
];

export const SPORTS_LIST: SportItem[] = [
  {
    id: "archery",
    name: "Archery",
    category: "precision",
    image: "https://www.tirupatirushivan.com/wp-content/uploads/2021/10/Archery.jpg",
    coach: "Dronacharya Awardee Mentored Arena",
    facility: "50m Outdoor Range & Target Simulator",
    stats: "World Archery Federation compliant targets",
    description: "Master focus and breath control with recurve and compound bows under national medalists."
  },
  {
    id: "horse-riding",
    name: "Horse Riding & Equestrian",
    category: "olympic",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    coach: "Cavalry Master Instructors",
    facility: "Dedicated Sand Paddock & Stables",
    stats: "Trained thoroughbred riding horses",
    description: "Learn dressage, show jumping, and posture discipline on TIS's dedicated equestrian arena."
  },
  {
    id: "shooting",
    name: "Shooting Range",
    category: "precision",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPeKin3cd_u5c2x746jTv4sa68hTrgLdzNumw066mjw&s=10",
    coach: "National Shooting League Mentors",
    facility: "10m Air Rifle / Pistol Precision Range",
    stats: "Electronic target scoring systems",
    description: "Cultivating laser focus, breath rhythm, and competitive national medal rankings."
  },
  {
    id: "swimming",
    name: "Swimming",
    category: "olympic",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop",
    coach: "FINA Certified Swim Coaches",
    facility: "Semi-Olympic Swimming Pool",
    stats: "Ozone filtered, temperature managed",
    description: "Endurance, stroke mechanics, and lifesaving training in crystal-clear waters."
  },
  {
    id: "lawn-tennis",
    name: "Lawn Tennis",
    category: "racket",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop",
    coach: "ITF Level Certified Academy Coaches",
    facility: "All-Weather Floodlit Synthetic Courts",
    stats: "Regular inter-school tournaments",
    description: "Developing court agility, topspin power, and match temperament under stadium lighting."
  },
  {
    id: "squash",
    name: "Squash",
    category: "racket",
    image: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=800&auto=format&fit=crop",
    coach: "WSF Certified Squash Master",
    facility: "Glass-Back Indoor Wooden Courts",
    stats: "Maple wood high-impact flooring",
    description: "Fast-paced cardio agility and tactical spatial intelligence inside premium enclosed courts."
  },
  {
    id: "billiards",
    name: "Billiards & Snooker",
    category: "precision",
    image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?q=80&w=800&auto=format&fit=crop",
    coach: "State Snooker Champions",
    facility: "English Slate Championship Tables",
    stats: "Strachan 6811 tournament cloth",
    description: "Refining spatial geometry, calm calculation, cue action, and mental composure."
  },
  {
    id: "taekwondo",
    name: "Taekwondo & Karate",
    category: "combat-field",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
    coach: "Black Belt 4th Dan Kukkiwon Certified",
    facility: "Padded Martial Arts Dojo",
    stats: "Belt progression examinations",
    description: "Building unyielding self-defense, core agility, humility, and mental resilience."
  },
  {
    id: "football",
    name: "Football",
    category: "combat-field",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    coach: "AIFF Licensed Technical Staff",
    facility: "Full-Size Lush Natural Grass Turf",
    stats: "Inter-school championship winners",
    description: "Strategic field vision, high-speed stamina, and camaraderie on a pristine mountain turf."
  },
  {
    id: "cricket",
    name: "Cricket Academy",
    category: "combat-field",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
    coach: "BCCI Level 2 Certified Coaches",
    facility: "Turf Pitches & Automated Bowling Nets",
    stats: "Floodlit evening practice nets",
    description: "Batting technique, spin variations, pace bowling dynamics, and captaincy acumen."
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "racket",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    coach: "BWF Certified Badminton Mentors",
    facility: "Multi-Court Indoor Wooden Sports Hall",
    stats: "Yonex professional equipment",
    description: "Reflex speed, wrist power, and smashes in a zero-wind temperature-regulated hall."
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "combat-field",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    coach: "FIBA Asia Veteran Mentors",
    facility: "Hydraulic Hoops Acrylic Hardcourt",
    stats: "Night match floodlights",
    description: "Fast break transitions, perimeter shooting, and leadership teamwork drills."
  }
];

export const BOARDING_SCHEDULE: BoardingScheduleItem[] = [
  {
    time: "06:00 AM",
    title: "Dawn Rise & Himalayan Yoga",
    category: "wellness",
    description: "Students begin their day breathing crisp pine air overlooking the Shivalik range, practicing Surya Namaskar and mindfulness.",
    highlights: ["Mindfulness Pranayama", "Vedic Chanting", "Warm Herbal Drink"],
    icon: "Sun"
  },
  {
    time: "07:30 AM",
    title: "Nutritious Sattvic Breakfast",
    category: "pastoral",
    description: "Farm-to-table organic vegetarian breakfast designed by expert nutritionists for growing bodies and sharp intellects.",
    highlights: ["Fresh Dairy & Cereals", "Hot Indian & Continental Menu", "Superfoods & Fresh Fruits"],
    icon: "Utensils"
  },
  {
    time: "08:30 AM",
    title: "Academic Immersion & Labs",
    category: "academic",
    description: "Interactive classroom learning, smart board workshops, Einstein Robotics sessions, and advanced science laboratory experiments.",
    highlights: ["6:1 Student-Teacher Ratio", "Inquiry-Based Learning", "Interactive Workstations"],
    icon: "BookOpen"
  },
  {
    time: "03:30 PM",
    title: "16+ Olympic Sports & Conditioning",
    category: "sports",
    description: "Dedicated evening athletics training where every student participates in chosen Olympic disciplines under NIS-certified masters.",
    highlights: ["Equestrian & Shooting", "Football, Cricket & Swimming", "Fitness & Agility Coaching"],
    icon: "Trophy"
  },
  {
    time: "06:00 PM",
    title: "Prep, Mentorship & Remedial Support",
    category: "academic",
    description: "Supervised prep hour with resident subject faculty answering questions, reviewing assignments, and guiding Olympiad prep.",
    highlights: ["1-on-1 Faculty Mentorship", "Peer Discussion Circles", "Zero Homework Burden at Night"],
    icon: "Sparkles"
  },
  {
    time: "08:00 PM",
    title: "Pastoral Dinner & House Bonding",
    category: "pastoral",
    description: "Wholesome dinner with housemasters, inter-house debates, music jams, and video calls home with parents.",
    highlights: ["House Spirit Competitions", "Safe Family Calling Hours", "Pastoral Emotional Support"],
    icon: "HeartHandshake"
  },
  {
    time: "09:30 PM",
    title: "Lights Out & Restful Slumber",
    category: "wellness",
    description: "Climate-controlled dormitory rooms, 24/7 security, resident nurses, and peaceful restorative sleep for tomorrow's breakthroughs.",
    highlights: ["Air-Conditioned Rooms", "24/7 CCTV & Warden Care", "8 Hours Optimal Recovery"],
    icon: "Moon"
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "edutoday-1",
    rank: "#1",
    title: "Co-Ed Boarding School in Dehradun",
    authority: "Education Today National Rankings",
    year: "2024 - 2025",
    badge: "Gold Trophy",
    description: "Adjudged the premier residential co-educational institution for holistic development and academic infrastructure."
  },
  {
    id: "outlook-1",
    rank: "#1",
    title: "Boarding School in North India",
    authority: "Outlook Magazine Annual Survey",
    year: "2024",
    badge: "Apex Honour",
    description: "Recognized for stellar sports coaching, student pastoral security, and cutting-edge digital learning modules."
  },
  {
    id: "forbes-great",
    rank: "Featured",
    title: "Great Indian Schools of the Century",
    authority: "Forbes India Special Citation",
    year: "2023 - 2024",
    badge: "Forbes India",
    description: "Spotlighted by Forbes India for modern Gurukul pedagogical reforms and global university placements."
  },
  {
    id: "edutoday-4",
    rank: "#4",
    title: "Co-Ed Boarding School in All India",
    authority: "Education Today Pan-India Survey",
    year: "2024 - 2025",
    badge: "National Elite",
    description: "Securing national acclaim among India's top residential institutions across 28 states."
  },
  {
    id: "golden-star",
    rank: "Winner",
    title: "Best Residential School in Uttarakhand",
    authority: "Golden Star Awards & Indian School Awards (ISA)",
    year: "2023",
    badge: "Excellence Trophy",
    description: "Awarded for exceptional environmental stewardship on a 22-acre zero-emission green campus."
  }
];

export const DIGNITARIES_LIST: DignitaryItem[] = [
  {
    id: "sakshi",
    name: "Sakshi Malik",
    role: "Olympic Bronze Medalist & Padma Shri",
    accolade: "First Indian female wrestler to win Olympic medal (Rio 2016). Rajiv Gandhi Khel Ratna Awardee.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    tag: "sports"
  },
  {
    id: "vishesh",
    name: "Vishesh Bhriguvanshi",
    role: "Indian Basketball Team Captain",
    accolade: "FIBA Asia Championship Star & Asian Beach Games Gold Medal winning national captain.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    tag: "sports"
  },
  {
    id: "prakashi",
    name: "Prakashi Tomar & Chandro Tomar",
    role: "National Shooter Legends ('Shooter Dadis')",
    accolade: "Inspiring the blockbuster biopic 'Saand Ki Aankh', winners of 30+ National Championships in precision shooting.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    tag: "sports"
  },
  {
    id: "abhishek",
    name: "Abhishek Verma",
    role: "World Archery Champion & Arjuna Awardee",
    accolade: "Ranked World #6, Asian Games Gold Medalist, inspiring TIS Archery Academy students.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    tag: "sports"
  },
  {
    id: "ramesh",
    name: "Dr. Ramesh Pokhriyal 'Nishank'",
    role: "Former Union Cabinet Minister for Education",
    accolade: "Architect of NEP 2020 & Former Chief Minister of Uttarakhand, commending TIS's Gurukul model.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    tag: "governance"
  },
  {
    id: "dharmendra",
    name: "Shri Dharmendra Pradhan",
    role: "Union Minister of Education, Govt. of India",
    accolade: "Lauding Tula's for holistic skill immersion, digital classrooms, and Olympic sports integration.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    tag: "governance"
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "t1",
    parentName: "Tashi Tsering",
    relation: "Father of Jigmet Skaldon",
    studentName: "Jigmet Skaldon",
    grade: "Class X",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "I would like to convey my heartfelt gratitude to the Management and Teachers of Tula's International School for taking such dedicated care of my son. His self-confidence and discipline have blossomed exponentially.",
    verified: true,
    location: "Ladakh / Dehradun"
  },
  {
    id: "t2",
    parentName: "Namita Agarwal",
    relation: "Mother of Krishna Agarwal",
    studentName: "Krishna Agarwal",
    grade: "Class VIII",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "Tula's gives a comprehensive environment for our child to grow. The sports infrastructure, rigorous academics, and extra-curricular platforms have helped Krishna know himself better and step up as a leader.",
    verified: true,
    location: "New Delhi"
  },
  {
    id: "t3",
    parentName: "Sandeep Kumar",
    relation: "Father of Aryan",
    studentName: "Aryan Kumar",
    grade: "Class XI (Science)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "Our experience is truly phenomenal with the school. The boarding staff is extremely supportive and communicative. Aryan always speaks about how deeply invested the teachers are in his IIT-JEE prep.",
    verified: true,
    location: "Haryana"
  },
  {
    id: "t4",
    parentName: "Pinky Sharma",
    relation: "Mother of Swastik Sharma",
    studentName: "Swastik Sharma",
    grade: "Class VII",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "I am thoroughly satisfied with the wonderful transformation of my son in this school. The pastoral care, especially the housemistress and mentors, are always just a phone call away.",
    verified: true,
    location: "Jaipur"
  },
  {
    id: "t5",
    parentName: "Amit Agrawal",
    relation: "Father of Samruddhi Agrawal",
    studentName: "Samruddhi Agrawal",
    grade: "Class IX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "As parents, sending your daughter to boarding school is a monumental decision. Tula's surpassed every benchmark: 24/7 security, unmatched hygiene, nutritious meals, and balanced academics.",
    verified: true,
    location: "Mumbai"
  },
  {
    id: "t6",
    parentName: "Suresh Kumar",
    relation: "Father of Aditya Kumar",
    studentName: "Aditya Kumar",
    grade: "Class XII (Commerce)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "Tula's International School is excelling across all verticals—giving children global exposure, public speaking tournaments, and top university counseling.",
    verified: true,
    location: "Uttarakhand"
  }
];

export const CAMPUS_ZONES: CampusZone[] = [
  {
    id: "academic-hub",
    name: "Digital Workstations & Einstein Labs",
    subtitle: "Future-Ready Smart Classrooms",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    tag: "Academics",
    highlights: ["Interactive Promethean Smartboards", "Robotics & Prototyping Hub", "Central Knowledge Repository"],
    virtualTourUrl: "https://tis.edu.in/virtual-tour/"
  },
  {
    id: "sports-complex",
    name: "Olympic Sports Arena & Stables",
    subtitle: "16+ Sports on 22 Pristine Acres",
    image: "/images/sports-arena.jpg",
    tag: "Athletics",
    highlights: ["Equestrian Riding Ring", "10m Precision Shooting Range", "Full-Size Natural Grass Turf"],
    virtualTourUrl: "https://tis.edu.in/virtual-tour/"
  },
  {
    id: "residence-hostels",
    name: "Air-Conditioned Residential Suites",
    subtitle: "A Home Away From Home",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    tag: "Boarding",
    highlights: ["Houseparent Pastoral Oversight", "Biometric & 24/7 CCTV Security", "En-suite Hygienic Bathrooms"],
    virtualTourUrl: "https://tis.edu.in/virtual-tour/"
  },
  {
    id: "dining-wellness",
    name: "Organic Sattvic Dining & Medical Infirmary",
    subtitle: "Nourishment for Mind & Soul",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    tag: "Wellness",
    highlights: ["Multi-Cuisine Vegetarian Menus", "24/7 Resident Doctors & Nurses", "Sanitized Mineral Water Systems"],
    virtualTourUrl: "https://tis.edu.in/virtual-tour/"
  }
];

export const COLLABORATIONS: CollaborationItem[] = [
  { name: "Trinity College London", type: "Speech, Drama & Music", badge: "London, UK", country: "United Kingdom" },
  { name: "International Award for Young People (IAYP)", type: "Duke of Edinburgh", badge: "Global", country: "International" },
  { name: "Universidad Complutense", type: "Academic Exchange", badge: "Spain", country: "Spain" },
  { name: "INSEEC University Network", type: "Higher Ed Global Pathways", badge: "France", country: "France" },
  { name: "Lions Club International", type: "Youth Leadership & Service", badge: "Global", country: "International" },
  { name: "Trinity Guildhall", type: "Performing Arts Certification", badge: "UK", country: "United Kingdom" },
];
