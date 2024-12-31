import project1 from "../assets/magicaldb.png";
import project2 from "../assets/BO.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/porto.png";

export const HERO_CONTENT = `I am an aspiring full stack developer with a passion for crafting robust and scalable web applications. As a student, I have been honing my skills in front-end technologies like React and Typescript, as well as back-end technologies like Node.js,python, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my growing expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024,May - Present",
    role: "Software Engineer Intern",
    company: "Bizcraft Advisors",
    description: `Implemented automated UI tests using the Playwright framework with TypeScript, improving test coverage and reliability.
Developed and executed comprehensive Jest tests for 15+ Express.js endpoints, ensuring robust backend functionality and data
integrity, which significantly reduced production issues.
Optimized AI-powered scripts using OpenAI and Azure Form Recognizer to automate data extraction from over 1,000 Form 16
tax documents, achieving 95% accuracy and reducing processing time by 80%.
Implemented a Machine Learning model for classifying over 30 categories of files by leveraging Large Language Models
(LLMs) and Hugging Face models for both text and image embeddings. Extracted and combined embeddings from text and
images using pre-trained BERT and CLIP models.
Trained a logistic regression classifier on the combined embeddings, achieving high accuracy in text and image classification
tasks with an accuracy of 87.5%`,
    technologies: ["Python-Fastapi", "Typescript", "Postgres"],
  },
  {
    year: "2023,December - present",
    role: "Developer",
    company: "SRKR College Website",
    description: `Contributed as a key member of the development team during critical accreditation inspections by NAAC and NBA, ensuring
alignment with accreditation standards and requirements.
•Spearheaded the implementation of user-centric design principles, significantly enhancing website usability and overall user
experience.
•Developed KBC (Kaun Banega Codepathy), a quiz website for programming knowledge assessment, achieving breakeven and
profitability; participated in College Fest with this website and made profits..
•Taught several courses throughout the college as part of a team, contributing to the academic community.
•Contributed numerous software solutions for BhimavaramOnline e-commerce startup and Lunch Box startup, enhancing
their operational efficiency`,
    technologies: ["HTML", "CSS", "Javascript","PHP", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "MAGICAL DB",
    image: project1, // Update with the correct image path if available
    description:
      "Developed a dynamic website for Hyderabad Central University to explore gene interactions. Used the MAGICAL DB platform to enhance data access and analysis, reducing research time by 50%. Optimized database performance and implemented essential backend features. Visualized and analyzed large datasets using Cytoscape, aiding in valuable insights and informed decision-making.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "http://www.manjarilab.com/databases/magicaldb/index.php",
  },
  {
    title: "BhimavaramOpen (Tennis Tournament)",
    image: project2, // Update with the correct image path if available
    description:
      "Architected and managed database schema for player, match, tournament schedule, and result information storage. Implemented a comprehensive player profile management system, facilitating personal detail modification, photo uploads, and match stats tracking. Conducted rigorous unit tests and comprehensive testing to debug backend code and ensure seamless cross-browser and cross-device functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://www.bhimavaramtennis.com/",
  },
  {
    title: "KBC (Kaun Banega Codepathy)",
    image: project3, // Update with the correct image path if available
    description:
      "Built a quiz website for programming knowledge assessment using HTML, CSS, JavaScript, PHP, and MySQL. Implemented user authentication, dynamic quiz generation, real-time scoring, and performance analytics. Achieved project breakeven and profitability by driving user engagement and satisfaction.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "http://kbc.free.nf/",
  },
  {
    title: "Portfolio using React",
    image: project4, // Update with the correct image path if available
    description:
      "Developed a personal portfolio website using React to showcase my projects and skills. Implemented responsive design, smooth navigation, and interactive elements to enhance user experience. Integrated with GitHub and LinkedIn for seamless access to my professional profiles.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://react-portfolio-amber-two.vercel.app/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
