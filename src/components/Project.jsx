import { PROJECTS } from '../constants/index';
import '../assets/css/Heo.css';
import { motion } from "framer-motion"; // Correctly import named export

const Projects = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="projects-section py-8">
      <motion.h2
        className="text-4xl text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <div className="project-card border border-neutral-900 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 bg-neutral-800">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-neutral-400">{project.description}</p>
              <div className="mt-2 text-neutral-400">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;