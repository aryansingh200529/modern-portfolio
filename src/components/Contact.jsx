import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="contact" 
      className="pt-24 bg-[#F8F9FF] relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pb-20">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-violet-600 font-semibold text-lg tracking-wide mb-3">
            Get In Touch
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Any Questions? Feel Free <br className="hidden md:block" /> To <span className="text-violet-600">Connect</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            I am currently open to new opportunities, collaborations, or just a friendly tech conversation. Reach out directly!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12"
        >
          {/* Email Card */}
          <motion.a 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href="mailto:aryan.singh.200529@gmail.com" 
            className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex items-center gap-6 group"
          >
            <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <FiMail size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-semibold mb-1 uppercase tracking-wider">Email Me At</p>
              <p className="text-slate-700 font-bold group-hover:text-violet-600 transition-colors text-base break-all">
                aryan.singh.200529@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href="tel:+919818576251" 
            className="bg-white p-8 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex items-center gap-6 group"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <FiPhone size={26} />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-semibold mb-1 uppercase tracking-wider">Call / WhatsApp</p>
              <p className="text-slate-700 font-bold group-hover:text-amber-500 transition-colors text-lg">
                +91-9818576251
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Direct Email Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a 
            href="mailto:aryan.singh.200529@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 text-lg"
          >
            Send Direct Message <FiArrowRight size={20} />
          </a>
        </motion.div>

      </div>

      {/* Dark Footer */}
      <footer className="bg-[#1A1A2E] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center">
          
          <div className="text-4xl font-extrabold tracking-tight text-violet-500 mb-8">
            Aryan<span className="text-amber-500">.dev</span>
          </div>

          <div className="flex gap-6 mb-8">
            <a href="https://github.com/aryansingh200529" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition-all duration-300">
              <FiGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/aryan-singh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition-all duration-300">
              <FiLinkedin size={22} />
            </a>
          </div>

          <p className="text-slate-400 text-sm font-medium text-center">
            &copy; {new Date().getFullYear()} Aryan Singh. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;