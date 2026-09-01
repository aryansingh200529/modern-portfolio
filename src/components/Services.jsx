import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaServer, FaShieldAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "Building production-ready, responsive, and scalable web applications from concept to deployment using the MERN stack.",
    icon: <FaLaptopCode size={28} />
  },
  {
    title: "AI & LLM Integration",
    description: "Embedding Generative AI, LangChain frameworks, and data extraction engines into secure architectures.",
    icon: <FaBrain size={28} />
  },
  {
    title: "Backend & API Architecture",
    description: "Engineering robust RESTful APIs, optimized database schemas (MongoDB, PostgreSQL), and decoupled proxy gateways.",
    icon: <FaServer size={28} />
  },
  {
    title: "Security & Authentication",
    description: "Developing multi-layer security pipelines, stateless session management (JWT), and biometric authentication systems.",
    icon: <FaShieldAlt size={28} />
  }
];

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-white relative px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 rounded-full border-4 border-amber-500 opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-violet-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Updated Professional Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-semibold text-lg tracking-wide mb-3 block uppercase">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Building Scalable & <br className="hidden md:block" />
            <span className="text-violet-600">High-Performance</span> Web Applications
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-400 transition-all duration-300 group relative z-10"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-violet-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-base mb-6">
                {service.description}
              </p>

              {/* Action Link */}
              <a href="#contact" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-600 transition-colors">
                Read More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;