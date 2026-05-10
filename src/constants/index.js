export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
  },
  {
    title: "React Native Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
  },
  {
    title: "Backend Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
  },
  {
    title: "AIML Enthusiast",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Learning)",
    company_name: "Self-Project",
    icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
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
    description:
      "A comprehensive web-based platform that allows users to learn Japanese through interactive lessons, quizzes, and vocabulary tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/src/assets/japanese-learning.png",
    source_code_link: "https://jmaster.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
