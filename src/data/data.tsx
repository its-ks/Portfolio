
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
  title: 'Kaushalendra Singh | Data Engineer & Backend Developer',
  description: 'Portfolio of Kaushalendra Singh, a data engineer and backend developer working with PySpark, Azure Databricks, ETL pipelines, Node.js and MongoDB.'
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
        A <strong className="text-stone-100">Data Engineer</strong> and Backend Developer who builds ETL pipelines on <strong>Azure</strong> with <strong>PySpark</strong> and <strong>Databricks</strong>, and secure APIs with <strong>Node.js</strong> and <strong>MongoDB</strong>.
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
    'B.Tech Computer Science (AI&ML) graduate from PSIT, now working as an LLM Engineer at Turing on AI training data. I build data pipelines with PySpark and Azure Databricks, and backend systems with a focus on authentication, routing, and performance.',
  aboutItems: [
    {label: 'Location', text: 'Kanpur, India', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Data Engineering, DSA, Backend Projects', Icon: SparklesIcon},
    {label: 'Study', text: 'B.Tech CS (AI&ML), PSIT Kanpur', Icon: AcademicCapIcon},
    {label: 'Currently', text: 'LLM Engineer @ Turing', Icon: BuildingOffice2Icon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Data Engineering',
    skills: [
      {name: 'Apache Spark / PySpark', level: 6},
      {name: 'Databricks', level: 6},
      {name: 'ETL / ELT Pipelines', level: 7},
      {name: 'Medallion Architecture, Parquet', level: 6},
    ],
  },
  {
    name: 'Azure & BI',
    skills: [
      {name: 'Azure Data Factory', level: 6},
      {name: 'ADLS, Azure SQL Database', level: 6},
      {name: 'Azure Databricks', level: 6},
      {name: 'Power BI', level: 6},
    ],
  },
  {
    name: 'Languages & Data Science',
    skills: [
      {name: 'Python', level: 7},
      {name: 'SQL', level: 7},
      {name: 'Pandas / NumPy', level: 7},
      {name: 'Java, C, C++, JavaScript', level: 6},
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {name: 'Node.js / Express.js', level: 8},
      {name: 'MongoDB / Mongoose', level: 7},
      {name: 'REST APIs, JWT', level: 8},
    ],
  },
  {
    name: 'AI Data',
    skills: [
      {name: 'LLM / VLM Datasets, Annotation', level: 8},
      {name: 'Data QA & Validation', level: 8},
    ],
  },
  {
    name: 'Tools & Fundamentals',
    skills: [
      {name: 'Git & GitHub, Jupyter, Linux', level: 8},
      {name: 'DSA, OOPs, Operating Systems', level: 8},
    ],
  },
];


export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Retail Data Engineering Pipeline on Azure',
    description: 'End-to-end Medallion (Bronze, Silver, Gold) pipeline: Azure Data Factory ingests Azure SQL Database and REST API data into ADLS as Parquet, Azure Databricks (PySpark) cleans and joins it, and Power BI shows sales KPIs and trends.',
    url: 'https://github.com/its-ks',
    image: heroImage,
  },
  {
    title: 'Appointment Management System',
    description: 'Role-based appointment system with booking, scheduling and cancellation, time-slot validation to prevent conflicts, and secure JWT auth.',
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
    date: 'Nov 2021 - Jun 2025',
    location: 'Pranveer Singh Institute of Technology (PSIT)',
    title: 'B.Tech – Computer Science (AI&ML)',
    content: <p>CGPA 8.15 / 10. Scored 100/100 in Computer Science, Operating Systems and Computer Networks in the SHL/AMCAT assessment. Certified English proficiency at CEFR C1 level.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2025 – Present',
    location: 'Turing',
    title: 'LLM Engineer (AI Data & Agent Training)',
    content: (
      <p>
        Build structured training datasets for LLMs, VLMs and Computer-Use Agents through annotation workflows, generate
        multimodal interaction data from desktop and web environments, and run data quality assurance and validation to
        keep datasets accurate, consistent and compliant.
      </p>
    ),
  },
  {
    date: 'Jul 2025 – Aug 2025',
    location: 'UNQUE Cloudbook Pvt. Ltd.',
    title: 'Backend Developer Intern',
    content: (
      <p>
        Developed backend services and RESTful APIs for a salon appointment and scheduling platform using Node.js,
        Express.js and MongoDB, designed scalable database models and business logic, and optimized API performance.
      </p>
    ),
  },
  {
    date: 'Feb 2025 – Jun 2025',
    location: 'Radius Synergies International Pvt. Ltd.',
    title: 'Software Development Intern',
    content: (
      <p>
        Developed scalable backend APIs, optimized MongoDB queries, contributed to a modular backend architecture and
        implemented automated testing workflows to ensure software quality and reliability.
      </p>
    ),
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/its-ks'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kaushalendra-singh-281a57215/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/gopal__.singh/'},
];

