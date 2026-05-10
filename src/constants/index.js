import project1 from "../assets/japanese-learning.png";

export const navLinks = [
  { id: "about",   title: "About" },
  { id: "work",    title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer",       icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png" },
  { title: "React Developer",     icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" },
  { title: "Backend Developer",   icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png" },
  { title: "AIML Enthusiast",     icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
];

// 18 technologies split across 3 rows (6 each)
export const techRow1 = [
  { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Postman",    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export const techRow2 = [
  { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel",     icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Render",     icon: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_477db83f923a7a5b9d1a1f5c4d7e6e5a/render.png" },
  { name: "Netlify",    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
];

export const techRow3 = [
  { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Shadcn UI",  icon: "https://ui.shadcn.com/favicon.ico" },
  { name: "DaisyUI",    icon: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" },
  { name: "Bootstrap",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Motion",     icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  { name: "Node JS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const technologies = [...techRow1, ...techRow2, ...techRow3];

const experiences = [
  {
    title: "Full Stack Developer (Learning)",
    company_name: "Self-Project",
    icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "AIML Student",
    company_name: "Education",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Learning Artificial Intelligence and Machine Learning fundamentals.",
      "Building small-scale AI models and integrating them into web applications.",
      "Studying data structures, algorithms, and database management.",
    ],
  },
];

const projects = [
  {
    name: "Japanese Mastery",
    description: "A comprehensive web-based platform that allows users to learn Japanese through interactive lessons, quizzes, and vocabulary tracking. Built with React and Node.js.",
    tags: [
      { name: "React", color: "#61DAFB" },
      { name: "MongoDB", color: "#4DB33D" },
      { name: "Tailwind", color: "#38BDF8" },
    ],
    image: project1,
    github_link: "https://github.com/Rohan-Shinde24",
    live_link: "https://jmaster.netlify.app/",
  },
  {
    name: "AI Crop Advisor",
    description: "Machine learning powered crop recommendation system built with Python, Streamlit, and Random Forest Classifier. Provides farming insights based on soil and weather data.",
    tags: [
      { name: "Python", color: "#FFD43B" },
      { name: "Streamlit", color: "#FF4B4B" },
      { name: "ML", color: "#A855F7" },
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
    github_link: "https://github.com/Rohan-Shinde24",
    live_link: "#",
  },
];

export const MY_EMAIL = "rohanshinde2406@gmail.com";

export { services, technologies, experiences, projects };
