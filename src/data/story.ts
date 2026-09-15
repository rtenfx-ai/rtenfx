/**
 * Editorial content for the Rashidul Sikder "About Me" story.
 * Chapters double as anchors on the landing page and as the ids used by the
 * authenticated Reading Room, so keep `id` values stable.
 */

export const profile = {
  name: "Rashidul Sikder",
  shortName: "Rashidul",
  age: 19,
  nationality: "Bangladeshi",
  flag: "🇧🇩",
  religion: "Islam",
  academicLevel: "Higher Secondary",
  bloodGroup: "B Positive (B+)",
  motto: "Learn. Create. Improve. Inspire.",
  visionLine:
    "To combine technology, creativity, and innovation to build meaningful work and a meaningful future.",
  location: "Bangladesh",
  // Portrait. Leave empty to use a file dropped into public/ named
  // `rashidul-sikder.jpg` (or .jpeg/.png/.webp). Otherwise paste a public
  // image URL here, e.g. "https://example.com/rashidul.jpg".
  photoUrl: "",
  masthead: "An About Me in Thirteen Chapters",
  issue: "Vol. I — No. 01",
  edition: "Higher Secondary Edition",
  dateLine: "Bangladesh · Updated 2026",
} as const;

export const facts = [
  { label: "Name", value: profile.name },
  { label: "Age", value: `${profile.age}` },
  { label: "Nationality", value: `${profile.nationality} ${profile.flag}` },
  { label: "Religion", value: profile.religion },
  { label: "Academic level", value: profile.academicLevel },
  { label: "Blood group", value: profile.bloodGroup },
] as const;

export type Chapter = {
  id: string;
  numeral: string;
  title: string;
  kicker: string;
  summary: string;
};

export const chapters: Chapter[] = [
  {
    id: "the-person",
    numeral: "I",
    title: "The Person",
    kicker: "Personal Profile",
    summary:
      "A Bangladeshi Higher Secondary student with a strong interest in technology, creativity, design, innovation, leadership, and continuous learning.",
  },
  {
    id: "education",
    numeral: "II",
    title: "Education",
    kicker: "Academic Foundation",
    summary:
      "Pursuing Higher Secondary education while building practical, professional skills alongside academic study.",
  },
  {
    id: "interests",
    numeral: "III",
    title: "Interests",
    kicker: "Technology · Design · Literature",
    summary:
      "Technology, visual and digital design, and Bengali literature — the three fields that shape how I think and make.",
  },
  {
    id: "skills",
    numeral: "IV",
    title: "Skills",
    kicker: "Technical · Creative · Professional",
    summary:
      "Programming fundamentals, design craft, and the professional habits that turn ideas into finished work.",
  },
  {
    id: "experience",
    numeral: "V",
    title: "Experience & Affiliations",
    kicker: "A Working Record",
    summary:
      "Fourteen roles and affiliations — from founding Rongin Torongo to volunteering, ambassadorship, and editorial work.",
  },
  {
    id: "aim-and-goals",
    numeral: "VI",
    title: "Aim & Goals",
    kicker: "Direction",
    summary:
      "Combining technology, design, creativity, innovation, and leadership — with clear short-term and long-term goals.",
  },
  {
    id: "vision",
    numeral: "VII",
    title: "Vision",
    kicker: "The Long View",
    summary:
      "A future built around technology, creativity, innovation, and work that creates genuine value for people.",
  },
  {
    id: "learning-philosophy",
    numeral: "VIII",
    title: "Learning Philosophy",
    kicker: "Method",
    summary:
      "Learning should go beyond textbooks: learn, practice, create, analyze, improve — and stay curious for life.",
  },
  {
    id: "leadership",
    numeral: "IX",
    title: "Leadership & Teamwork",
    kicker: "Working With People",
    summary:
      "What effective leadership means to me — communication, responsibility, and helping people grow together.",
  },
  {
    id: "personal-development",
    numeral: "X",
    title: "Personal Development",
    kicker: "Knowledge · Skills · Character",
    summary:
      "Three areas I keep improving: academic and technical foundations, practical ability, and character.",
  },
  {
    id: "future-plans",
    numeral: "XI",
    title: "Future Plans",
    kicker: "Five Phases",
    summary:
      "From completing Higher Secondary education to building products and ventures of my own.",
  },
  {
    id: "success",
    numeral: "XII",
    title: "What Success Means",
    kicker: "A Definition",
    summary:
      "Not money, recognition, or titles — but becoming capable, independent, knowledgeable, creative, and useful.",
  },
  {
    id: "mission-and-values",
    numeral: "XIII",
    title: "Mission & Core Values",
    kicker: "The Constitution",
    summary:
      "Learn continuously, create meaningfully, improve consistently, lead responsibly, contribute positively.",
  },
];

export const profileParagraphs = [
  "I am Rashidul Sikder, a Bangladeshi Higher Secondary student with a strong interest in technology, creativity, design, innovation, leadership, and continuous learning.",
  "I enjoy exploring new ideas, developing practical skills, working with people, and turning creative concepts into meaningful outcomes. My interests span both technical and creative fields — particularly software development, Flutter, graphic design, UI/UX, digital technology, branding, and content creation.",
  "I believe in learning through both education and practical experience. I continuously try to improve myself by experimenting with new ideas, taking on responsibilities, collaborating with others, and learning from challenges.",
];

export const educationFocus = [
  "Programming",
  "Software and mobile app development",
  "Graphic design",
  "UI/UX design",
  "Digital technology",
  "Communication",
  "Leadership",
  "Teamwork",
  "Project coordination",
];

export const educationNote =
  "My goal is to combine academic knowledge with practical experience so that I can be prepared for future study and professional opportunities.";

export const interests: Array<{
  id: string;
  glyph: string;
  title: string;
  intro: string;
  items: string[];
}> = [
  {
    id: "technology",
    glyph: "01",
    title: "Technology",
    intro:
      "Technology is one of my primary areas of interest. I am especially interested in understanding how technology can be used to solve problems and create useful products.",
    items: [
      "Programming",
      "Python",
      "Flutter",
      "Mobile application development",
      "Software development",
      "Artificial intelligence",
      "Web technologies",
      "Digital products",
      "Emerging technologies",
    ],
  },
  {
    id: "design",
    glyph: "02",
    title: "Design & Creativity",
    intro:
      "I have a strong interest in visual and digital design. I particularly appreciate designs that are aesthetic, professional, clean, polished, and purposeful.",
    items: [
      "Graphic design",
      "UI/UX design",
      "Poster design",
      "Branding",
      "Visual identity",
      "Typography",
      "Social media graphics",
      "Editorial design",
      "Creative visual concepts",
    ],
  },
  {
    id: "literature",
    glyph: "03",
    title: "Literature",
    intro:
      "I also have an interest in Bengali literature, including the works of writers such as Rabindranath Tagore, Bibhutibhushan Bandyopadhyay, and Pramatha Chowdhury.",
    items: [],
  },
];

export const skillGroups: Array<{ title: string; items: string[] }> = [
  {
    title: "Technical",
    items: [
      "Programming fundamentals",
      "Python",
      "Flutter and mobile development",
      "UI development",
      "Basic web technologies",
      "Digital technology",
      "Technology research",
      "Problem-solving",
    ],
  },
  {
    title: "Creative",
    items: [
      "Graphic design",
      "UI design",
      "Poster design",
      "Branding",
      "Visual composition",
      "Typography",
      "Social media design",
      "Creative direction",
    ],
  },
  {
    title: "Professional",
    items: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Project coordination",
      "Organization",
      "Creative thinking",
      "Problem-solving",
      "Self-learning",
      "Responsibility",
    ],
  },
];

export const skillsNote =
  "I am continuously developing these skills through learning, practice, and real-world involvement.";

export type Experience = {
  organisation: string;
  native?: string;
  role: string;
  period: string;
  description?: string;
};

export const experience: Experience[] = [
  {
    organisation: "Rongin Torongo",
    native: "রঙিন তরঙ্গ",
    role: "Founder & CEO",
    period: "Jan 2023 – Present",
    description:
      "Founder and CEO of Rongin Torongo, with involvement in organizational development, team structure, recruitment, creative work, branding, communication, and project coordination.",
  },
  {
    organisation: "Wikipedia",
    role: "Contributor",
    period: "Jan 2023 – Present",
    description:
      "Contributing to Wikipedia and developing experience with collaborative knowledge-sharing.",
  },
  {
    organisation: "Python Development",
    role: "Python Developer / Student",
    period: "Apr 2024 – Present",
    description:
      "Developing programming knowledge and practical experience with Python.",
  },
  {
    organisation: "International Youth Conference",
    role: "General Member",
    period: "Dec 2024 – Present",
    description:
      "Participating as a general member in an international youth-focused platform.",
  },
  {
    organisation: "Ignite Global Foundation",
    role: "Volunteer",
    period: "Nov 2025 – Present",
    description:
      "Contributing as a volunteer to organizational and community-oriented activities.",
  },
  {
    organisation: "WhiteBoard Initiatives",
    role: "VN",
    period: "Nov 2025 – Present",
    description:
      "Associated with WhiteBoard Initiatives in the role of VN.",
  },
  {
    organisation: "UN Volunteers",
    role: "Volunteer",
    period: "Dec 2025 – Present",
    description: "Participating as a volunteer with UN Volunteers.",
  },
  {
    organisation: "Microsoft Azure",
    role: "Student Ambassador",
    period: "Mar 2026 – Present",
    description:
      "Engaged as a Microsoft Azure Student Ambassador with an interest in cloud technology and the developer ecosystem.",
  },
  {
    organisation: "Google for Developers",
    role: "General Member & Learner",
    period: "Apr 2026 – Present",
    description:
      "Learning and participating as a member of the Google for Developers community.",
  },
  {
    organisation: "Replit",
    role: "AI Developer",
    period: "Apr 2026 – Present",
    description:
      "Exploring AI development and software creation through Replit.",
  },
  {
    organisation: "Sohopathi",
    role: "Campus Hero & Editor",
    period: "Aug 2026 – Present",
    description: "Working as a Campus Hero and Editor.",
  },
  {
    organisation: "Saifur's",
    role: "Student",
    period: "May 25, 2025 – Aug 30, 2025",
    description: "Student at Saifur's during this period.",
  },
  {
    organisation: "Science Club of BSHS",
    role: "President",
    period: "Jan 2023 – Feb 2025",
    description:
      "Served as President and gained experience in leadership, organization, teamwork, and coordinating club activities.",
  },
  {
    organisation: "Bangladesh Mathematics and Science Olympiad",
    role: "Former Member",
    period: "Previously",
    description: "Previously participated as a member.",
  },
];

export const aimStatements = [
  "Technology",
  "Design",
  "Creativity",
  "Innovation",
  "Leadership",
];

export const aimBody =
  "My aim is to become a highly skilled technology and creative professional. I want to develop the ability to understand an idea from its beginning, design it properly, develop it with technology, and turn it into something useful.";

export const goals = {
  shortTerm: [
    "Successfully complete my Higher Secondary education.",
    "Strengthen my programming fundamentals.",
    "Improve my Python and Flutter skills.",
    "Develop stronger UI/UX and graphic design abilities.",
    "Build a professional portfolio.",
    "Gain more practical experience.",
    "Improve communication and presentation skills.",
    "Continue developing leadership and teamwork abilities.",
    "Explore modern technologies such as AI and cloud computing.",
  ],
  longTerm: [
    "Become an experienced software and application developer.",
    "Develop advanced skills in UI/UX and digital design.",
    "Build useful digital products.",
    "Work on innovative technology projects.",
    "Establish a strong professional identity.",
    "Work with talented people from different fields.",
    "Lead technology and creative teams.",
    "Build something of my own.",
    "Use technology and creativity to solve real-world problems.",
    "Create meaningful opportunities for myself and others.",
  ],
};

export const visionParagraphs = [
  "My vision is to build a future around technology, creativity, innovation, and meaningful work.",
  "I want to become a person who understands both the technical and creative sides of digital products.",
  "Ultimately, I want my skills and work to create genuine value for people.",
];

export const visionQualities = [
  "Useful",
  "Innovative",
  "Well-designed",
  "User-friendly",
  "Technically strong",
  "Meaningful",
];

export const learningLoop = [
  "Learn",
  "Practice",
  "Create",
  "Analyze",
  "Improve",
];

export const learningParagraphs = [
  "I believe that learning should go beyond textbooks.",
  "I believe curiosity is one of the most important qualities for personal growth. Technology is constantly changing, so I want to remain adaptable and continue learning throughout my life.",
  "I also believe that mistakes and challenges can become valuable learning experiences when approached with the right mindset.",
];

export const leadershipIntro =
  "Through my organizational involvement, particularly with Rongin Torongo and the Science Club of BSHS, I have developed an interest in leadership and team management. I believe effective leadership involves:";

export const leadershipTraits = [
  "Clear communication",
  "Listening to others",
  "Taking responsibility",
  "Delegating tasks",
  "Supporting team members",
  "Coordinating activities",
  "Solving problems",
  "Encouraging creativity",
  "Working toward shared goals",
];

export const leadershipOutro =
  "I want to become a leader who not only manages people but also helps people grow and work together effectively.";

export const developmentAreas = [
  {
    title: "Knowledge",
    body: "Building strong academic and technical foundations.",
  },
  {
    title: "Skills",
    body: "Turning knowledge into practical abilities through projects and experience.",
  },
  {
    title: "Character",
    body: "Developing responsibility, discipline, communication, leadership, and integrity.",
  },
];

export const developmentOutro =
  "I believe long-term success requires development in all three.";

export const futurePhases = [
  {
    phase: "Phase 1",
    title: "Education",
    body: "Complete my Higher Secondary education and establish a strong academic foundation.",
  },
  {
    phase: "Phase 2",
    title: "Skill Development",
    body: "Deepen my knowledge of programming, Python, Flutter, UI/UX, graphic design, AI, and modern technologies.",
  },
  {
    phase: "Phase 3",
    title: "Portfolio & Experience",
    body: "Build a strong professional portfolio and continue gaining practical experience through meaningful work and collaboration.",
  },
  {
    phase: "Phase 4",
    title: "Professional Growth",
    body: "Pursue higher education and develop professional-level expertise in my chosen field.",
  },
  {
    phase: "Phase 5",
    title: "Innovation",
    body: "Work on meaningful technology and creative initiatives and eventually build products or ventures of my own.",
  },
];

export const successParagraphs = [
  "For me, success is not only about money, recognition, or professional titles.",
  "Success means becoming capable, independent, knowledgeable, creative, and useful.",
  "I want to reach a point where I can take an idea, acquire the necessary knowledge, build it, improve it, and create something that genuinely helps people.",
];

export const missionStatements = [
  "Learn continuously.",
  "Create meaningfully.",
  "Improve consistently.",
  "Lead responsibly.",
  "Contribute positively.",
];

export const missionOutro =
  "I want to use my knowledge and skills to create meaningful work and make a positive contribution to the people and communities around me.";

export const coreValues = [
  { name: "Creativity", body: "Exploring new ideas and approaches." },
  { name: "Learning", body: "Staying curious and continuously improving." },
  { name: "Discipline", body: "Remaining consistent with my goals." },
  { name: "Responsibility", body: "Taking ownership of my work." },
  { name: "Teamwork", body: "Believing in collaboration and shared success." },
  { name: "Innovation", body: "Looking for better ways to solve problems." },
  { name: "Integrity", body: "Maintaining honesty and responsibility." },
  { name: "Growth", body: "Always trying to become better than before." },
];
