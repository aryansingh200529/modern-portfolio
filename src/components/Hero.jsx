// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaEnvelope, FaJava } from 'react-icons/fa';
// import { FiAward } from 'react-icons/fi';

// const Hero = () => {
//   // Ultra-smooth, gentle slide variants with optimized duration & easing
//   const slideInLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   const slideInRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { 
//       opacity: 1, 
//       x: 0, 
//       transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
//     },
//   };

//   return (
//     <section 
//       id="home" 
//       className="relative min-h-screen flex items-center justify-center bg-[#F8F9FF] overflow-hidden px-4 sm:px-6 lg:px-12 pt-24 pb-12"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Decorative Background Elements (Abstract Shapes) */}
//       <div className="absolute top-32 left-1/4 w-4 h-4 rounded-full bg-amber-500 opacity-60 pointer-events-none"></div>
//       <div className="absolute bottom-20 right-1/4 w-8 h-8 rounded-full border-4 border-violet-500 opacity-30 pointer-events-none"></div>
//       <motion.div 
//         animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 right-10 z-0 pointer-events-none"
//         style={{ willChange: "transform" }}
//       >
//         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M20 0C8.9543 0 0 8.9543 0 20H40C40 8.9543 31.0457 0 20 0Z" fill="#F59E0B" transform="rotate(-45 20 20)"/>
//         </svg>
//       </motion.div>

//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* LEFT SIDE: Text Content */}
//         <motion.div 
//           variants={slideInLeft}
//           initial="hidden"
//           animate="visible"
//           className="order-2 lg:order-1 text-center lg:text-left pt-8 lg:pt-0"
//           style={{ willChange: "transform, opacity" }}
//         >
//           <span className="inline-block text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm md:text-base">
//             Available for New Opportunities
//           </span>
//           <h3 className="text-slate-600 text-2xl md:text-3xl font-medium mb-2">
//             Hello, I Am
//           </h3>
//           <h1 className="text-5xl md:text-7xl font-extrabold text-violet-600 mb-6 tracking-tight leading-tight">
//             Aryan Singh
//           </h1>
//           <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 font-light">
//             A passionate Full-Stack Software Engineer specializing in scalable web architectures, secure APIs, and MERN stack development.
//           </p>
          
//           {/* Call to Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-10">
//             <a 
//               href="#contact" 
//               className="bg-amber-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
//             >
//               Hire Me!
//             </a>
//             <a 
//               href="#projects" 
//               className="text-violet-600 font-bold text-lg underline decoration-2 underline-offset-8 hover:text-violet-800 transition-colors"
//             >
//               See My Work
//             </a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center lg:justify-start gap-5 text-slate-400">
//             <a href="https://github.com/aryansingh200529" target="_blank" rel="noreferrer" className="hover:text-violet-600 transition-colors transform hover:scale-110">
//               <FaGithub size={26} />
//             </a>
//             <a href="https://www.linkedin.com/in/aryan-singh-baba0a32b/" target="_blank" rel="noreferrer" className="hover:text-violet-600 transition-colors transform hover:scale-110">
//               <FaLinkedin size={26} />
//             </a>
//             <a href="mailto:aryan.singh.200529@gmail.com" className="hover:text-violet-600 transition-colors transform hover:scale-110">
//               <FaEnvelope size={26} />
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE: Image & Floating Cards */}
//         <motion.div 
//           variants={slideInRight}
//           initial="hidden"
//           animate="visible"
//           className="order-1 lg:order-2 relative flex justify-center items-center h-[380px] sm:h-[480px] lg:h-[600px] mt-10 lg:mt-0"
//           style={{ willChange: "transform, opacity" }}
//         >
//           {/* Big Purple Circle Background */}
//           <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] bg-violet-600 rounded-full shadow-xl"></div>
          
//           {/* Styled Image Container */}
//           <div className="relative z-10 w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] lg:w-[350px] lg:h-[440px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
//             <img 
//               src="src/assets/profile2.jpeg" 
//               alt="Aryan Singh"
//               className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Floating Achievement Card 1 (HackerRank) - Soft floating */}
//           <motion.div 
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-2 lg:bottom-10 left-2 sm:left-4 lg:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20 border border-slate-100"
//             style={{ willChange: "transform" }}
//           >
//             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
//               <FaJava size={22} />
//             </div>
//             <div>
//               <h4 className="text-slate-800 font-bold text-base sm:text-lg leading-tight">5-Star Java</h4>
//               <p className="text-slate-500 text-xs sm:text-sm font-medium">HackerRank</p>
//             </div>
//           </motion.div>

//           {/* Floating Achievement Card 2 (Full Stack) - Soft floating */}
//           <motion.div 
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//             className="absolute top-2 lg:top-8 right-2 sm:right-4 lg:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20 border border-slate-100"
//             style={{ willChange: "transform" }}
//           >
//             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
//               <FiAward size={22} />
//             </div>
//             <div>
//               <h4 className="text-slate-800 font-bold text-base sm:text-lg leading-tight">Certified</h4>
//               <p className="text-slate-500 text-xs sm:text-sm font-medium">MERN Stack</p>
//             </div>
//           </motion.div>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

const Hero = () => {
  // Ultra-smooth, gentle slide variants with optimized duration & easing
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    },
  };

  // Name entrance animation (Smooth scale & fade up)
  const nameAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[#F8F9FF] overflow-hidden px-4 sm:px-6 lg:px-12 pt-24 pb-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative Background Elements (Abstract Shapes) */}
      <div className="absolute top-32 left-1/4 w-4 h-4 rounded-full bg-amber-500 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-8 h-8 rounded-full border-4 border-violet-500 opacity-30 pointer-events-none"></div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 z-0 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C8.9543 0 0 8.9543 0 20H40C40 8.9543 31.0457 0 20 0Z" fill="#F59E0B" transform="rotate(-45 20 20)"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div 
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left pt-8 lg:pt-0"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="inline-block text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm md:text-base">
            Available for New Opportunities
          </span>
          <h3 className="text-slate-600 text-2xl md:text-3xl font-medium mb-2">
            Hello, I Am
          </h3>

          {/* Animated Name with smooth fade & subtle highlight effect */}
          <motion.h1 
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-extrabold text-violet-600 mb-6 tracking-tight leading-tight inline-block drop-shadow-sm"
          >
            Aryan Singh
          </motion.h1>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 font-light">
            A passionate Full-Stack Software Engineer specializing in scalable web architectures, secure APIs, and MERN stack development.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-10">
            <a 
              href="#contact" 
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Hire Me!
            </a>
            <a 
              href="#projects" 
              className="text-violet-600 font-bold text-lg underline decoration-2 underline-offset-8 hover:text-violet-800 transition-colors"
            >
              See My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-5 text-slate-400">
            <a href="https://github.com/aryansingh200529" target="_blank" rel="noreferrer" className="hover:text-violet-600 transition-colors transform hover:scale-110">
              <FaGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/aryan-singh-baba0a32b/" target="_blank" rel="noreferrer" className="hover:text-violet-600 transition-colors transform hover:scale-110">
              <FaLinkedin size={26} />
            </a>
            <a href="mailto:aryan.singh.200529@gmail.com" className="hover:text-violet-600 transition-colors transform hover:scale-110">
              <FaEnvelope size={26} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Image & Floating Cards */}
        <motion.div 
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 relative flex justify-center items-center h-[380px] sm:h-[480px] lg:h-[600px] mt-10 lg:mt-0"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Big Purple Circle Background */}
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] bg-violet-600 rounded-full shadow-xl"></div>
          
          {/* Styled Image Container */}
          <div className="relative z-10 w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] lg:w-[350px] lg:h-[440px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
            <img 
              src="src/assets/profile2.jpeg" 
              alt="Aryan Singh"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Achievement Card 1 (HackerRank) - Soft floating */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-2 lg:bottom-10 left-2 sm:left-4 lg:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20 border border-slate-100"
            style={{ willChange: "transform" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
              <FaJava size={22} />
            </div>
            <div>
              <h4 className="text-slate-800 font-bold text-base sm:text-lg leading-tight">5-Star Java</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">HackerRank</p>
            </div>
          </motion.div>

          {/* Floating Achievement Card 2 (Full Stack) - Soft floating */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-2 lg:top-8 right-2 sm:right-4 lg:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20 border border-slate-100"
            style={{ willChange: "transform" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
              <FiAward size={22} />
            </div>
            <div>
              <h4 className="text-slate-800 font-bold text-base sm:text-lg leading-tight">Certified</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">MERN Stack</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;