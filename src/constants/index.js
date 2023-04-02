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
  chatgpt,
  learn,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blog,
} from "../assets";

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
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
  {
    name: "Node JS",
    icon: nodejs,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "ChatGPT Article App",
    company_name: "Mern Stack",
    icon: chatgpt,
    iconBg: "#383E56",
    date: "E-Learning web App",
    points: [
      "Designed and Developed this  web applications using React.js and other related technologies.",
      "This Web application explains completely about the ChatGPT openAI and its Features.",
      "Express.js is used to connect with the Database to store the Contact details.",
      "UI for this website was designed in Figma and Adobe XD",
    ],
  },
  {
    title: "Portfolio",
    company_name: "Mern Stack",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "3D Portfolio",
    points: [
      "Designed and Developed this portfolio using React.js and other related technologies.",
      "Three.js is used in this website for running 3D objects and 3D Backgrounds.",
      "This website consists of 3D models, Animations and Interative components.  ",
      "Express.js is used to connect with the MongoDB to store the Contact the details.",
    ],
  },
  {
    title: "E-Learning Website",
    company_name: "React.js",
    icon: learn,
    iconBg: "#383E56",
    date: "Educational Website",
    points: [
      "This Learning website provides the fundamental understanding of full-stack web development",
      "HTML, CSS, Bootstrap5 and Javascript were all used in its construction.",
      "This website is completely responsive and interactive. And UI for this website was designed in Figma and Adobe XD ",
      "This Website consists of an animation blob which changes its position according to the cursor movement.",
    ],
  },
  {
    title: "Odessa Web UI",
    company_name: "Figma and XD",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "UI Design for Odessa Web",
    points: [
      "Designed an complete UI template for Odessa Home page.",
      "Wireframes for this design was completely done manually in papers and converted into virtual wireframe.",
      "Used figma to its core for designing this webpage. Glass morphism concepts are used. ",
      "Used AI tool for backgrounds and color pallette",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Seeking an entry-level opportunity with an esteemed organization where I can maximize my abilities and aid in the expansion of the company. Capable of mastering new technologies.",
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Completed various certifications and participated in several reputed workshops and webinars related to web development.",
    name: "Certification and Events.",
    // designation: "Drive",
    // company: "Link",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "My Github profile page tells people the story of my work through the repositories which i have created.",
    name: "Github Profile",
    designation: "-",
    company: "naveen4555",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "My Linkedin profile explains about the technical skills and educational qualification of mine in it.",
    name: "Linkedin Profile",
    designation: "-",
    company: "Naveenkumar S",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ChatGPT Article App",
    description:
      "This Web application explains completely about the ChatGPT openAI and its Features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/naveen4555/chatgpt-article/tree/master",
  },
  {
    name: "E-Learning Website",
    description:
      "This Learning website provides the fundamental understanding of full-stack web development",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/naveen4555/infoblog",
  },
  {
    name: "UI for Odessa",
    description:
      "This Interface consists of SVGs and AI components to enrich the outlook of the Web page.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Illustrators",
        color: "green-text-gradient",
      },
      {
        name: "Mid-Journey",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.figma.com/file/EFLdoDK8IbNdLlo0Y13UTb/Untitled?t=CWm4UMP6PmKarKht-6",
  },
  {
    name: "Musify App",
    description:
      "Designed an Music mobile application with exciting color grading and glass morphism concepts.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Mid-Journey",
        color: "green-text-gradient",
      },
      {
        name: "XD",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.figma.com/file/0IArTGAf4VuLlZQmdeky2L/Musify?t=CWm4UMP6PmKarKht-6",
  },
];

export { services, technologies, experiences, testimonials, projects };
