import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const experiences = [
  {
    role: "Full-stack Developer Intern",
    company: "Accion Labs",
    duration: "July 2025 - Nov 2025",
    points: [
      "Architected End-to-End Solutions: Engineered a comprehensive, production-ready MERN stack application tailored for micro-rental properties.",
      "Optimized API Integration: Implemented robust RESTful APIs and structured backend routing logic using Node.js and Express.js.",
      "Database Schema Design: Formulated highly efficient data models in MongoDB, optimizing document indexing."
    ]
  },
  {
    role: "Full Stack Web Developer Trainee",
    company: "RCPL (Ritusha Consultants Pvt. Ltd.)",
    duration: "September 2024 - November 2024",
    points: [
      "Full-Stack Development: Built responsive front-end components and secure backend logic using Object-Oriented JavaScript.",
      "API Integration: Integrated RESTful APIs with client-side interfaces for real-time data exchange.",
      "Database Optimization: Designed structured database schemas and optimized SQL queries."
    ]
  }
];

const Experience = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24 bg-[#F8F9FF] relative px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-6 h-6 rounded-full border-4 border-amber-500 opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-violet-600 opacity-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-slate-500 text-lg md:text-xl font-medium mb-2">
            My Journey
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Work <span className="text-violet-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 relative"
        >
          {/* Vertical Line for Timeline (Violet) */}
          <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-violet-200 hidden md:block rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-6 md:gap-8 group"
            >
              {/* Timeline Icon */}
              <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-white border-4 border-violet-100 rounded-full items-center justify-center text-violet-600 shadow-sm z-10 group-hover:border-violet-400 group-hover:bg-violet-50 group-hover:scale-110 transition-all duration-300">
                <FaBriefcase size={20} />
              </div>

              {/* Experience Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 flex-grow border border-slate-100 relative overflow-hidden">
                
                {/* Subtle Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-snug">{exp.role}</h3>
                    <div className="flex items-center text-violet-600 font-semibold text-lg mb-2">
                      <FaBuilding className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 font-medium bg-[#F8F9FF] px-4 py-2 rounded-full border border-slate-200 shadow-sm h-fit">
                    <FaCalendarAlt className="mr-2 text-amber-500" />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-4 mt-6 border-t border-slate-100 pt-6">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 leading-relaxed font-light">
                      {/* Amber Custom Bullet */}
                      <span className="text-amber-500 mr-3 mt-1.5 text-lg leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;