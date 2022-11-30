import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const userData = {
  githubUsername: "thirunavukkarasu",
  name: "Thirunavukkarasu",
  designation: "Full-Stack Developer and Architect",
  avatarUrl: "/avatar-2.png",
  email: "thirunavukkarasu.sam@gmail.com",
  phone: "+91 9789172265",
  address: "Bengaluru, Karnataka, India.",
  about: {
    title:
      "I'm a Prinicpal Architect & Developer that loves building products and web applications that matters",
    description: [
      `I've been developing full-stack application for the last 11 years. I didn't know what full-stack meant at that time because the term was not coined back then.`,
    ],
    currentProject: "Order Assist App",
    currentProjectUrl: "https://project10.com",
  },
  experience: [
    {
      title: "Senior Engineering Director",
      company: "BYJU's",
      year: "2021",
      companyLink: "https://byjus.com",
      desc: "Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.",
    },
    {
      title: "Engineering Director",
      company: "BYJU's",
      year: "2021",
      companyLink: "https://byjus.com",
      desc: "Developed a marketplace for tailwind web components (React, HTML and Angular) and templates.",
    },
    {
      title: "Prinicpal Architect",
      company: "BYJU's",
      year: "2021",
      companyLink: "https://byjus.com",
      desc: "Your last moment revision friend right before a Tech coding interview. Practice problems and get hired at top Product based companies.",
    },
    {
      title: "Software Development Engineer III",
      company: "Comcast",
      year: "2019",
      companyLink: "https://comcast.com",
      desc: "Developed pothole detection system with OpenCV and computer vision, detects potholes on roads and informs the driver.",
    },
  ],
  resumeUrl: "",
};

export const navLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Works",
    link: "/works",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const socialLinks = [
  {
    title: "Github",
    url: "https://github.com/thirunavukkarasu",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/thirunavukkarasu-m",
    icon: <FaLinkedin />,
  },
  /*{
    title: "Instagram",
    url: "https://instagram.com/thirunavukkarasu_ma",
    icon: <FaInstagram />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/thiruhuman",
    icon: <FaTwitter />,
  },*/
];

export const projects = [
  {
    title: "Project 1",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
  {
    title: "Project 2",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
  {
    title: "Project 3",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
  {
    title: "Project 4",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
  {
    title: "Project 5",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
  {
    title: "Project 6",
    demoUrl: "https://github.com/thirunavukkarasu",
    imageUrl: "./project1.png",
  },
];

export const works = [
  {
    title: "Order Assist",
    link: "https://oa.thirunavukkarasu.com",
    imgUrl: "/project1.png",
  },
  {
    title: "One Meet",
    link: "https://om.thirunavukkarasu.com",
    imgUrl: "/project2.png",
  },
  {
    title: "RNP",
    link: "https://rnp.thirunavukkarasu.com",
    imgUrl: "/project3.png",
  },
  {
    title: "Personal Assistant",
    link: "https://pa.thirunavukkarasu.com",
    imgUrl: "/project4.png",
  },
  {
    title: "NextJS Starter Kit",
    link: "https://pa.thirunavukkarasu.com",
    imgUrl: "/project4.png",
  },
  {
    title: "TailwindCSS Starter Kit",
    link: "https://pa.thirunavukkarasu.com",
    imgUrl: "/project4.png",
  },
];
