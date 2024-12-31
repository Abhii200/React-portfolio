import { EXPERIENCES } from '../constants/index';
import '../assets/css/Heo.css';
import { motion } from "framer-motion"; // Correctly import named export

const Experience = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="experience-section py-8">
      <motion.h2
        className="text-4xl text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        Experience
      </motion.h2>
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-wrap lg:flex-nowrap"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <p className="text-violet-500 text-lg">{experience.year}</p>
          </div>
          <div className="w-full lg:w-3/4">
            <h3 className="text-2xl font-bold text-violet-500">{experience.role}</h3>
            <p className="text-violet-500 text-lg">{experience.company}</p>
            <p className="mt-2">{experience.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 border border-violet-500 text-violet-500 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;