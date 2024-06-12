// import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Jr. Software Engineer (Programmer Analyst) at Cognizant.
I am a person with a learning attitude, always ready to improve & add new skills to my bucket.
Currently I am looking for an opportunity in Java (Spring Architecture) and also having good understanding & hands-on experience in Spring-Framework, MVC, JPA, SpringBoot, Rest-APIs, Maven, GitHub, XML & JSON, Databases, core & advance concepts of Java Programming and related technologies.
I am also aware of Cloud concepts & terminology, also completed AZ900 & AWS Cloud Practitioner certifications.`
;

export const ABOUT_TEXT = `Jr. Software Engineer (Programmer Analyst) at Cognizant.
I am a person with a learning attitude, always ready to improve & add new skills to my bucket.
Currently I am looking for an opportunity in Java (Spring Architecture) and also having good understanding & hands-on experience in Spring-Framework, MVC, JPA, SpringBoot, Rest-APIs, Maven, GitHub, XML & JSON, Databases, core & advance concepts of Java Programming and related technologies.
I am also aware of Cloud concepts & terminology, also completed AZ900 & AWS Cloud Practitioner certifications.`;

export const PROJECTS = [
  {
    title: "Smart Contact Manager",
    image: project2,
    description:
      "A project for managing the contacts.",
    technologies: ["Spring", "SpringBoot", "Java-Pogramming", "AWS"],
    demoLink: 'https://github.com/ritesh6916/SmartContactManager-2.0',
    githubLink: 'https://github.com/ritesh6916/SmartContactManager-2.0'
  },
  {
    title: "Hostel Management System",
    image: project4,
    description:
      "A standalone application for a hostel management system that was capable of doing all functionalities that are required to regulate a hostel properly.",
    technologies: ["Java", "AWT", "Swing", "XAMPP","MySQL"],
    demoLink: 'https://github.com/ritesh6916/SmartContactManager-2.0',
    githubLink: 'https://github.com/ritesh6916/SmartContactManager-2.0'
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    demoLink: 'https://www.riteshsingh.info',
    githubLink: 'https://github.com/ritesh6916/Portfolio'
  },
];

export const EXPERIENCES = [
  {
    title: "Jr. Software Engineer",
    company: "Cognizant",
    startDate: "December 2021",
    endDate: "Present",
    descriptions: [
          `
          At present I am working for an American client i.e. Esi-Cigna that provides back-end support and data management for healthcare service providers throughout the America.
          `,
          `
          We use "Job Control Language" for job scheduling, COBOL programming 
          language to control functionalities, IBM-Db2 as a database, and tools like Snow, Jenkins, Expeditor and many portals for smooth transactions.
          `,
          `
          We process, transform & control overall flow of data that flows through client’s sites and tools which are being used by customers.
          `
    ],
    technologies: ["Mainframe", "JCL", "COBOL", "VSAMs", "DB2", "ServiceNow", "Endeavour","Expeditor", "Jenkins", "Abend-handling", "CA-07", "PICS", "TeraData"],
  }
]

export const EDUCATIONS = [
  {
    duration: "Aug 2022 - Present",
    collegeName: "M.C.A, Manipal University Jaipur, Online",
    sem: "3rd Semester Completed",
    description: "Passed with 8.75 CGPA",
  },
  {
    duration: "Aug 2018 - Aug 2021",
    collegeName: "B.C.A, Aryabhatta Knowledge University, Patna",
    sem: "",
    description: "Passed with 8.69 CGPA",
  },
]

export const CERTIFICATES = [
  {
    name: "Microsoft azure Fundamentals (AZ- 900), Microsoft",
    duration: "January 2023",
    verifyLink: "https://www.credly.com/badges/dd323480-6123-4d2d-b21e-2c218461c0f8/public_url",
  },
  {
    name: "AWS Certified Cloud Practitioner. Amazon Web Service",
    duration: "July 2023 – July 2026",
    verifyLink: "https://www.credly.com/badges/73178891-d452-4514-90ce-bf80108b77c8/public_url",
  },
  {
    name: "Programming in java, IIT Kharagpur (NPTEL)",
    duration: "September 2020 – December 2020",
    verifyLink: "",
  },
  {
    name: "Data Structure and algorithm using java, IIT Kharagpur (NPTEL)",
    duration: "September 2020 – December 2020",
    verifyLink: "",
  },
]

export const CONTACT = {
  address: "Gopalganj, Bihar, India, 841428 ",
  phoneNo: "+91-8002208399",
  email: "riteshsingh0500@gmail.com",
};
