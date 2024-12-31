import profilePic from "../assets/Abhi3.png";
import { HERO_CONTENT } from "../constants/index";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaGit, FaBlender, FaDocker, FaPhp } from 'react-icons/fa';
import { SiFastapi, SiMysql, SiPostgresql, SiSupabase, SiFirebase, SiNestjs, SiTypescript, SiExpress, SiPostman } from 'react-icons/si';
import '../assets/css/Heo.css';
import { motion } from "framer-motion";
import Typing from 'react-typing-effect';

const Hero = () => {
  const skills = [
    { icon: <FaHtml5 className="text-4xl" /> },
    { icon: <FaCss3Alt className="text-4xl" /> },
    { icon: <FaJs className="text-4xl" /> },
    { icon: <FaReact className="text-4xl" /> },
    { icon: <FaPython className="text-4xl" /> },
    { icon: <FaJava className="text-4xl" /> },
    { icon: <FaNodeJs className="text-4xl" /> },
    { icon: <SiFastapi className="text-4xl" /> },
    { icon: <SiMysql className="text-4xl" /> },
    { icon: <SiPostgresql className="text-4xl" /> },
    { icon: <SiSupabase className="text-4xl" /> },
    { icon: <SiFirebase className="text-4xl" /> },
    { icon: <FaGit className="text-4xl" /> },
    { icon: <FaBlender className="text-4xl" /> },
    { icon: <FaDocker className="text-4xl" /> },
    { icon: <SiExpress className="text-4xl" /> },
    { icon: <SiPostman className="text-4xl" /> },
    { icon: <SiNestjs className="text-4xl" /> },
    { icon: <SiTypescript className="text-4xl" /> },
    { icon: <FaPhp className="text-4xl" /> },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 pt-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Right Column (Image) */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center items-start lg:items-center">
          <motion.div
            className="sound-wave-container"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80"
              src={profilePic}
              alt="Profile Picture"
            />
          </motion.div>
        </div>

        {/* Left Column (Text and Social Media) */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-8 lg:pb-16 text-5xl font-thin tracking-tight lg:text-7xl"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Hi, I am
              <br />
              <span className="text-violet-500">
                <Typing text={['ABHINAY GEDELA']} speed={100} eraseDelay={1000} />
              </span>
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://www.linkedin.com/in/abhinay-gedela-65836628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <FaLinkedin size={30} />
              </motion.a>
              <motion.a
                href="https://github.com/Abhii200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <FaGithub size={30} />
              </motion.a>
              <motion.a
                href="https://x.com/abhi___o1?t=IdClexta91nUVAS-8qDTkg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <FaTwitter size={30} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/a_b_h_i__o1?igsh=MWU2NXg0MXdpM3QwNA==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <FaInstagram size={30} />
              </motion.a>
            </div>
            {/* Move Resume button to left column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="mt-8"
            >
              <a
                href="../assets/final resume.pdf"
                download="final resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Tech Stack</h2>
        <div className="overflow-hidden">
          <div className="ticker flex gap-8 animate-ticker">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;