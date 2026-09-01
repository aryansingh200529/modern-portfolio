import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaBrain, FaAward } from 'react-icons/fa';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-10 right-10 w-8 h-8 rounded-full border-4 border-amber-500 opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-violet-600 opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading matching FolioFlix UI */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-violet-600 font-semibold tracking-wider mb-2 text-sm md:text-base">
            Discover My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left Text Column */}
          <motion.div variants={slideLeftVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 leading-snug">
              Computer Science Graduate & Software Development Engineer.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
               I am a passionate Full-Stack Software Engineer with a relentless drive for building scalable, high-impact web applications. Specializing in the MERN stack, I thrive at the intersection of logic and creativity—transforming complex engineering challenges into seamless, intuitive user experiences.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              My approach goes beyond just writing clean code. I am deeply invested in system architecture, AI integrations utilizing tools like LangChain, and responsive design with Tailwind CSS. From configuring dynamic local development environments to building decoupled API gateways, my focus is always on delivering production-grade solutions.
            </p>
            
            {/* Highlighted Achievement (FolioFlix styled card) */}
            <div className="flex items-start gap-5 p-6 bg-[#F8F9FF] border border-slate-100 rounded-2xl mt-8 shadow-sm">
              <div className="p-4 bg-white rounded-full shadow-sm text-amber-500 flex-shrink-0">
                <FaAward size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Problem Solving & Enterprise Dev</h4>
                <p className="text-slate-500 mt-1 font-medium text-sm leading-relaxed">
                  Holding a 5-Star problem-solving rating in Java on HackerRank, backed by hands-on experience transforming enterprise websites and full-stack platforms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Skills Grid (FolioFlix Services/Skills Card Style) */}
          <motion.div variants={slideRightVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div variants={cardVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-violet-600 hover:shadow-xl hover:shadow-violet-600/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                <FaCode size={24} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-violet-600 transition-colors">Frontend</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">React.js, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <FaServer size={24} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-amber-500 transition-colors">Backend</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Node.js, Express.js, Java, Python, RESTful API Design</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group mt-0 sm:mt-6">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <FaDatabase size={24} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-amber-500 transition-colors">Databases & Tools</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">MongoDB, SQL, Git, GitHub, Vercel, Postman</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={cardVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-violet-600 hover:shadow-xl hover:shadow-violet-600/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                <FaBrain size={24} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-violet-600 transition-colors">Architecture</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">System Design, LangChain, Cloud Integrations, Agile Dev</p>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;