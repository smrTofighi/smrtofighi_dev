import {
  Code2,
  Code,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Settings,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram,FiSend } from "react-icons/fi";
import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend & Mobile",
    icon: Code2,
    description: "Building responsive web & mobile applications",
    skills: [
      { name: "Flutter", level: 90, color: "bg-blue-500" },
      { name: "Android", level: 50, color: "bg-rose-500" },
      { name: "React JS", level: 75, color: "bg-cyan-500" },
      { name: "Next JS", level: 10, color: "bg-slate-500" },
      { name: "Tailwind CSS", level: 65, color: "bg-indigo-500" },
      { name: "Bootstrap", level: 40, color: "bg-purple-500" },

    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Languages I use for development",
    skills: [
      { name: "Dart", level: 90, color: "bg-blue-500" },
      { name: "JavaScript", level: 75, color: "bg-yellow-400" },
      { name: "TypeScript", level: 50, color: "bg-blue-700" },
      { name: "Python", level: 60, color: "bg-green-500" },
      //{ name: "Java", level: 15, color: "bg-red-600" },
      //{ name: "Kotlin", level: 100, color: "bg-red-600" },
      //{ name: "GoLang", level: 5, color: "bg-cyan-700" },
    ],
  },
  {
    title: "Flutter State Management",
    icon: Settings,
    description: "Mastering various state management approaches in Flutter",
    skills: [
      { name: "GetX", level: 85, color: "bg-purple-500" },
      { name: "Bloc", level: 70, color: "bg-cyan-500" },
      { name: "Riverpod", level: 35, color: "bg-blue-500" },
      { name: "Provider", level: 35, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Creating scalable backend services",
    skills: [
      { name: "Express.js", level: 80, color: "bg-green-700" },
      { name: "Nest.js", level: 10, color: "bg-yellow-600" },
      { name: "REST API", level: 90, color: "bg-rose-500" },
      { name: "Socket IO", level: 35, color: "bg-red-500" },
      
      
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing structured and unstructured data",
    skills: [
      { name: "MongoDB", level: 85, color: "bg-green-500" },
      { name: "SQL (Basics)", level: 60, color: "bg-blue-500" },
      { name: "HIVE (NoSQL - Flutter)", level: 75, color: "bg-violet-500" },
    ],
  },
  {
    title: "Backend-as-a-Service (BaaS)",
    icon: Server,
    description: "Integrating cloud-based backend platforms",
    skills: [
      { name: "Appwrite", level: 80, color: "bg-pink-600" },
      { name: "Supabase", level: 75, color: "bg-green-500" },
      { name: "Firebase", level: 70, color: "bg-orange-500" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 30, color: "bg-blue-600" },
      { name: "Git", level: 80, color: "bg-orange-700" },
      { name: "CI/CD", level: 10, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Stack Overflow",
];

export const STATS = [
  { number: "5+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A powerful task management system built with React, featuring intuitive UI and seamless user experience for productivity.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind CSS", "Node.Js"],
    liveUrl: "#",
    githubUrl: "https://github.com/smrTofighi/task_management_web",
    featured: false,
    category: "FullStack",
  },
  {
    id: 2,
    title: "Todo Infinity App",
    description:
      "A scalable Todo app developed using Flutter with GetX state management and Appwrite backend for real-time data syncing.",
    image: PROJECT_IMG_2,
    tags: ["Flutter", "GetX", "Appwrite"],
    liveUrl: "#",
    githubUrl: "https://github.com/smrTofighi/todo_infinity_app",
    featured: true,
    category: "Mobile",
  },
  {
    id: 3,
    title: "Spotify App",
    description:
      "A music player app built with Flutter and Firebase for seamless music playback and user authentication.",
    image: PROJECT_IMG_3,
    tags: ["Flutter", "BloC", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/smrTofighi/spotify_flutter_app",
    featured: true,
    category: "Mobile",
  },
  {
    id: 4,
    title: "Blog Web",
    description:
      "A blog web app with admin dashboard built with React, Node.Js, MonogDB, and Tailwind CSS.",
    image: PROJECT_IMG_4,
    tags: ["React", "Tailwind CSS", "Node.Js"],
    liveUrl: "#",
    githubUrl: "https://github.com/smrTofighi/blog_web_react",
    featured: true,
    category: "FullStack",
  },
];
export const JOURNEY_STEPS = [
  {
    year: "2022",
    title: "Started Flutter Development",
    company: "Self-taught",
    description:
      "Began building mobile apps using Flutter, mastering widgets and state management like GetX, Bloc, Riverpod, and Provider.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2023(Sep)",
    title: "Started Backend Development with Node.js",
    company: "Self-taught / Freelance",
    description:
      "Dived into Node.js and Express, building RESTful APIs and working with MongoDB and SQL databases for backend projects.",
    icon: Server,
    color: "bg-green-500",
  },

  {
    year: "2024",
    title: "Exploring React Js",
    company: "Self-learning",
    description:
      "Began deepening React skills and explored Vania framework to broaden frontend capabilities.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    year: "2025(Now)",
    title: "Recently Learning TypeScript, Next.js & Nest.js",
    company: "Self-learning",
    description:
      "Expanded skills with TypeScript for better code quality, explored Next.js for React SSR apps, and started backend development with Nest.js.",
    icon: Rocket,
    color: "bg-purple-500",
  },
];
export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/smrTofighi",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/smrTofighi",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com/smrTofighi",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Instagram",
    icon: FiInstagram,  // مطمئن شو این آیکون وارد شده باشه
    url: "https://instagram.com/smrTofighi",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-500/10",
  },
  {
    name: "Telegram",
    icon: FiSend, // اگر آیکون تلگرام ندارید، می‌تونید اینو یا هر آیکون مناسب بذارید
    url: "https://t.me/VornaCode",
    color: "hover:text-cyan-400",
    bgColor: "hover:bg-cyan-500/10",
  },
];
export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Iran, Qom",
    },
    {
        icon: Mail,
        label: "Email",
        value: "mrtofxn@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+98 (920) 085-4532",
    },
];