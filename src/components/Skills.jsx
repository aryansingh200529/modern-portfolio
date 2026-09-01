import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';

// Skill categories extracted from your resume
const skillCategories = [
  {
    title: "Frontend & Core Languages",
    icon: <FiLayout size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    skills: ["JavaScript (ES6+)", "Java", "React.js", "Tailwind CSS", "HTML5", "CSS3", "C"]
  },
  {
    title: "Backend & Databases",
    icon: <FiDatabase size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Flask", "SQL", "REST APIs"]
  },
  {
    title: "AI & Advanced Tech",
    icon: <FiCpu size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    skills: ["LangChain", "Google GenAI", "MediaPipe", "Facenet512", "CNN"]
  },
  {
    title: "Tools & Architecture",
    icon: <FiTool size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    skills: ["Git/GitHub", "Vite", "Cloud Computing", "Distributed Systems", "Hadoop", "VS Code"]
  }
];

const Skills = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", bounce: 0.4 } },
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-[#F8F9FF] relative px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Accent Elements */}
      <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-amber-500 opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-violet-600 font-semibold text-lg tracking-wide mb-3">
            What I Know
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Technical <span className="text-violet-600">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies, frameworks, and tools I use to build scalable and intelligent solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-300 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${category.bgColor} ${category.color} shadow-sm`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    variants={pillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-violet-50/50 text-slate-700 text-sm font-semibold rounded-full border border-violet-100 shadow-sm cursor-default hover:border-violet-400 hover:text-violet-600 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;