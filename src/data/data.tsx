
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
//  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Kaushalendra Singh | Backend Developer',
  description: 'Portfolio of Kaushalendra Singh, a backend developer specializing in Node.js, Express, and MongoDB.'
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;
export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kaushalendra Singh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A passionate <strong className="text-stone-100">Backend Developer</strong> experienced in building secure APIs and scalable systems using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/KS_resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'B.Tech CS student at PSIT with internship experience at Radius Synergies and Ericsson. I build backend systems with a focus on authentication, routing, and performance.',
  aboutItems: [
    {label: 'Location', text: 'Kanpur, India', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'DSA, Backend Projects, Debugging', Icon: SparklesIcon},
    {label: 'Study', text: 'PSIT Kanpur', Icon: AcademicCapIcon},
    {label: 'Last Employed', text: 'Backend Intern @ Radius Synergies', Icon: BuildingOffice2Icon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Backend Development',
    skills: [
      {name: 'Node.js', level: 8},
      {name: 'Express.js', level: 8},
      {name: 'MongoDB / Mongoose', level: 7},
      {name: 'JWT / bcrypt', level: 7},
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      {name: 'Postman', level: 9},
      {name: 'Git & GitHub', level: 8},
      {name: 'REST API Design', level: 8},
    ],
  },
  {
    name: 'Programming Fundamentals',
    skills: [
      {name: 'JavaScript (ES6+)', level: 6},
      {name: 'DSA', level: 8},
      {name: 'Problem Solving', level: 8},   // ✅ NEW
      {name: 'Python', level: 7},            // ✅ NEW
      {name: 'Java', level: 6},              // ✅ NEW
    ],
  },
];


export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Appointment Management System',
    description: 'Role-based appointment system for students and wardens with time-slot validation and secure JWT auth.',
    url: 'https://github.com/its-ks/Appointment-Management-System-Backend.git',
    image: heroImage,
  },
  {
    title: 'BlogList API',
    description: 'A secure CRUD backend with blog-user linking, login/signup, and ownership protection.',
    url: 'https://github.com/its-ks/Bloglist_nodeJS.git',
    image: heroImage,
  },
  {
    title: 'Phonebook API',
    description: 'Contact manager API supporting full CRUD operations, MongoDB integration, input validation, and error handling.',
    url: 'https://github.com/its-ks/PhoneBook_nodejs.git',
    image: heroImage,
  },
];


export const education: TimelineItem[] = [
  {
    date: '2021 - 2025',
    location: 'Pranveer Singh Institute of Technology (PSIT)',
    title: 'B.Tech – Computer Science ',
    content: <p>Focused on backend systems, algorithms, and machine learning basics. Graduating in 2025.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2025 – Jun 2025',
    location: 'Radius Synergies International',
    title: 'Backend Intern',
    content: <p>Built secure Express.js APIs, optimized MongoDB queries, and contributed to scalable system designs.</p>,
  },
  {
    date: 'Oct 2024 – Dec 2024',
    location: 'Ericsson India (Remote)',
    title: 'Student Intern',
    content: <p>Contributed to internal backend modules and participated in industry-grade software practices.</p>,
  },
];

// export const testimonial: TestimonialSection = {
//   imageSrc: heroImage,
//   testimonials: [],
// };

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Interested in collaborating or hiring me? Drop a message anytime.',
  items: [
    {type: ContactType.Email, text: 'its.ks6342@gmail.com', href: 'mailto:its.ks6342@gmail.com'},
    {type: ContactType.Location, text: 'Kanpur, India', href: 'https://maps.google.com?q=kanpur'},
    {type: ContactType.Github, text: 'its-ks', href: 'https://github.com/its-ks'},
    {type: ContactType.LinkedIn, text: 'kaushalendra-singh', href: 'https://www.linkedin.com/in/kaushalendra-singh-281a57215/'},
  ],
};


export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/its-ks' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kaushalendra-singh-281a57215/h' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/gopal__.singh/' }, // 👈 Add this
];

