import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaGit, FaBlender } from 'react-icons/fa';
import { SiFastapi, SiMysql, SiPostgresql, SiNestjs, SiSupabase, SiFirebase } from 'react-icons/si';
import { AiOutlineRobot } from 'react-icons/ai'; // Importing a generic icon for ChatGPT, Claude, and Mistral

const Technologies = () => {
  const programmingLanguages = [
    { name: 'Python', icon: <FaPython className="text-4xl" /> },
    { name: 'Java', icon: <FaJava className="text-4xl" /> },
  ];

  const frameworks = [
    { name: 'React', icon: <FaReact className="text-4xl" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-4xl" /> },
  ];

  const webDevelopment = [
    { name: 'HTML', icon: <FaHtml5 className="text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-4xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-4xl" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-4xl" /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGit className="text-4xl" /> },
    { name: 'Blender', icon: <FaBlender className="text-4xl" /> },
    { name: 'ChatGPT', icon: <AiOutlineRobot className="text-4xl" /> },
    { name: 'Claude', icon: <AiOutlineRobot className="text-4xl" /> },
    { name: 'Mistral', icon: <AiOutlineRobot className="text-4xl" /> },
  ];

  return (
    <div className="py-8">
      <h2 className="text-4xl text-center mb-8">Technologies & Skills</h2>
      <div className="mb-8">
        <h3 className="text-3xl mb-4">Programming Languages</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {programmingLanguages.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-xl">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-3xl mb-4">Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {frameworks.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-xl">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-3xl mb-4">Web Development</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {webDevelopment.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-xl">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-3xl mb-4">Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-xl">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;