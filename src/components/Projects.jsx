import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiDatabase, FiLayout } from 'react-icons/fi';

const projectsList = [
  {
    title: "Zero-Trust Biometric Auth System",
    description: "Engineered a 5-step fail-fast authentication pipeline to optimize compute load. Integrated a custom 5-layer CNN and MediaPipe for EAR sequence analysis to prevent 3D mask and replay spoofing. Enforced stateless JWT session management.",
    tech: ["React", "Flask", "PostgreSQL", "MediaPipe", "CNN"],
    github: "https://github.com/aryansingh200529",
    live: "#",
    icon: <FiCpu size={24} />
  },
  {
    title: "AI-Driven Transcript Extraction",
    description: "Architected a scalable data engine using LangChain to parse and isolate semantic transcripts from streaming video payloads. Designed a decoupled proxy API gateway to cleanly partition frontend interfaces from backend heavy-compute logic.",
    tech: ["LangChain", "Node.js", "Express", "React", "Vite"],
    github: "https://github.com/aryansingh200529",
    live: "#",
    icon: <FiDatabase size={24} />
  },
  {
    title: "Generative AI Image Orchestrator",
    description: "Developed a full-stack generative AI application by integrating Google's Gemini models within a secure backend architecture. Implemented asynchronous processing streams for real-time image rendering while strictly masking API credentials.",
    tech: ["Google GenAI", "Node.js", "Express", "React"],
    github: "https://github.com/aryansingh200529/AI-Image-Generator",
    live: "#",
    icon: <FiLayout size={24} />
  },
  {
    title: "Micro-Rental Property Dashboard",
    description: "Engineered a comprehensive MERN stack application tailored for micro-rental properties. Formulated highly efficient data models in MongoDB, optimizing document indexing and minimizing query latency across complex database transactions.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/aryansingh200529",
    live: "#",
    icon: <FiDatabase size={24} />
  },
  {
    title: "Distributed CRUD Architecture",
    description: "Architected a scalable resource management application featuring Role-Based Access Control (RBAC). Optimized backend routing logic and integrated RESTful APIs to facilitate seamless, asynchronous data fetching and state synchronization.",
    tech: ["JavaScript (ES6+)", "Node.js", "REST APIs", "CSS"],
    github: "https://github.com/aryansingh200529/crud-app",
    live: "#",
    icon: <FiCpu size={24} />
  },
  {
    title: "Real-Time Keystroke Analytics",
    description: "Developed an asynchronous typing analytics engine utilizing event-driven JavaScript. Implemented custom logic to calculate WPM and accuracy metrics in real-time, leveraging optimized DOM manipulation to ensure zero UI rendering latency.",
    tech: ["Vanilla JS", "DOM API", "HTML5", "CSS3"],
    github: "https://github.com/aryansingh200529/TypeSpeed",
    live: "#",
    icon: <FiLayout size={24} />
  }
];

const Projects = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-white relative px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-1/4 w-5 h-5 rounded-full bg-amber-500 opacity-40"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-[90px] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading (Matching FolioFlix Style) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-violet-600 font-semibold text-lg tracking-wide mb-3">
            Creative Works
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Check My <span className="text-violet-600">Portfolio</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Complex, data-driven applications focused on scalable architectures, AI integration, and secure backend routing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-300 transition-all duration-300 flex flex-col group relative z-10"
            >
              <div className="flex justify-between items-center mb-6">
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {project.icon}
                </div>
                {/* Links */}
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors cursor-pointer">
                    <FiGithub size={22} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors cursor-pointer">
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-violet-600 transition-colors leading-snug">
                {project.title}
              </h3>
              
              <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-violet-50/50 text-violet-700 text-xs font-semibold rounded-full border border-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;