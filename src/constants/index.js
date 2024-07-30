import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "November 2021 - December 2022",
    role: "Associate Software Consultant ",
    company: "Bristlecone",
    description: `Developed a web-based Industrial IoT (IIoT) monitoring system for real-time tracking and management of manufacturing equipment. The system enables factory operators and managers to monitor equipment performance, track operational metrics, and receive alerts for maintenance needs.`,
    technologies: [
      "React.js",
      "Redux",
      "HTML",
      "CSS (Bootstrap, Tailwind CSS)",
      "D3.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RESTful APIs",
      "MQTT protocol",
      "Sensors for temperature, humidity, pressure, and vibration",
      "AWS (EC2, RDS, S3, CloudWatch)",
      "Docker",
      "CI/CD pipeline (GitHub Actions)",
      "Cypress",
      "Jest",
    ],
  },
  {
    year: "October 2019 - November 2021",
    role: "Full Stack Web Developer",
    company: "Soul of Pluto",
    description: `Developed a scalable and secure cloud-based ERP system for a mid-sized company, integrating core business operations, streamlining data flow, and enhancing operational efficiency.`,
    technologies: ["React",
    "Redux",
    "HTML",
    "CSS",
    "Material-UI",
    "Ant Design",
    "Chart.js",
    "D3.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "GraphQL",
    "Microservices architecture",
    "Docker",
    "Kubernetes",
    "CI/CD pipeline",
    "AWS (EC2, S3, SQS)",
    "Infrastructure as Code (IaC)",
    "Scrum"
  ],
  },
  {
    year: "June 2018 - September 2019",
    role: "Junior Software Developer",
    company: "Nendrasys Technologies",
    description: `Developed a scalable MERN stack e-commerce platform for a sustainable clothing brand. The user-friendly React frontend facilitates eco-conscious shopping while the Node.js backend and MongoDB database ensure efficient product management and scalability through Agile methodologies resulting in a robust and efficient application that promotes eco-conscious shopping.`,
    technologies: ["React.js",
    "HTML",
    "CSS (LESS/SASS)",
    "JavaScript (ES6+)",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "AWS (EC2, S3, SQS)",
    "CI/CD pipeline",
    "Scrum"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "3800 Pebble Creek Ct, Plano, TX-75023 ",
  phoneNo: "+1 6812414569 ",
  email: "srikarkrishnag@gmail.com",
};
