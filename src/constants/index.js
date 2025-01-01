import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Experience",
  // },

  // {
  //   id: "work",
  //   title: "Experience",
  // },

  {
    id: "tech",
    title: "Tech",
  },

  {
    id: "pro",
    title: "Works",
  },

  // {
  //   id: "certi",
  //   title: "feedbacks",
  // },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Full Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Btech CSE",
    company_name: "Sharda University",
    icon: starbucks,
    iconBg: "E6DEDD",
    date: "October 2021 - June 2025",
    points: [
      // "8.2 Current CGPA",
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intermediate Education",
    company_name: "Happy Model School Varanasi",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2020 - March 2021",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Matriculation Exam",
    company_name: "Happy Model School Varanasi",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2018 -  March 2019",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const certifications = [
  {
    certification:
      "This feedbacks provides a comprehensive introduction to programming using the Java language. It is designed to equip us with foundational skills necessary to understand and write basic Java programs.",
    name: "Java Fundamentals",
    designation: " ",
    company: "Oracle Academy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    certification:
      "It Builds on foundational knowledge and delevers deeper into the Java programming language, focusing on more advanced concepts and techniques. It designed to enhance programming skills. ",
    name: "Java Programmming",
    designation: " ",
    company: "Oracle Academy",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    certification:
      "It Provides a comprehensive introduction to web development, focusing on the core technologies used to create modern, responsive websites ! ",
    name: "Web Design",
    designation: "With HTML/CSS",
    company: "Tech-Gyan",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Website",
    description:
      "Web-based platform that allows users to search, share experiences and explore thoughts of other to related fields and being up to date.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "3D_Portfolio",
    description:
      "Created a stunning and interactive 3D portfolio that showcases my work in a unique and engaging way..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/arpit103/3D_Portfolio",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, certifications, projects };
