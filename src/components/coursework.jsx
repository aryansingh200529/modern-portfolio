import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiDatabase, FiGlobe, FiLayers, FiTerminal, FiMessageSquare } from 'react-icons/fi';

const courseworkData = [
  {
    title: "Design & Analysis of Algorithms",
    icon: <FiTerminal size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    hoverShadow: "hover:shadow-blue-500/10",
    hoverBorder: "hover:border-blue-300",
    topics: ["Asymptotic Notation (O, Ω, Θ)", "Dynamic Programming", "Graph Traversals (BFS, DFS)", "Heaps", "Greedy Algorithms", "Sliding Window"],
    question: "How would you optimize the worst-case time complexity of this solution from O(N) to O(log N) without utilizing additional memory?"
  },
  {
    title: "Operating Systems & Concurrency",
    icon: <FiCpu size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-500",
    hoverShadow: "hover:shadow-violet-500/10",
    hoverBorder: "hover:border-violet-300",
    topics: ["Process vs Thread", "Context Switching", "Deadlock Conditions", "Mutex vs Semaphore", "Race Conditions", "Virtual Memory & Paging"],
    question: "If two separate threads are concurrently updating the same database balance, how would you architect the system to prevent race conditions?"
  },
  {
    title: "Database Architecture & Internals",
    icon: <FiDatabase size={24} />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    hoverShadow: "hover:shadow-emerald-500/10",
    hoverBorder: "hover:border-emerald-300",
    topics: ["B-Tree vs B+ Tree", "Transaction Isolation Levels", "MVCC", "Write-Ahead Logging (WAL)", "Deadlock Handling"],
    question: "Why does adding an index typically accelerate search queries but concurrently slow down write operations?"
  },
  {
    title: "Computer Networks & Protocols",
    icon: <FiGlobe size={24} />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-500",
    hoverShadow: "hover:shadow-pink-500/10",
    hoverBorder: "hover:border-pink-300",
    topics: ["TCP 3-Way Handshake", "TCP vs UDP", "Flow & Congestion Control", "DNS Resolution Flow", "HTTP/1.1 vs HTTP/2", "TLS/HTTPS Handshake"],
    question: "Describe the exact sequence of events at the network layer from the moment a URL is typed into a browser until the page renders."
  },
  {
    title: "Low-Level Design (LLD)",
    icon: <FiLayers size={24} />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    hoverShadow: "hover:shadow-amber-500/10",
    hoverBorder: "hover:border-amber-300",
    topics: ["SOLID Principles", "Design Patterns", "Schema Design", "Load Balancing", "Caching Strategy", "CAP Theorem"],
    question: "Design a clean, scalable object-oriented class architecture for a Parking Lot system or a URL Shortener."
  }
];

const Coursework = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: "spring", bounce: 0.4 } },
  };

  return (
    <section 
      id="coursework" 
      // pt-12 taaki Skills section ke baad zyada lamba gap na bane
      className="pt-12 pb-24 bg-[#F8F9FF] relative px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Accents */}
      <div className="absolute top-40 left-[-5%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 rounded-full bg-violet-400 opacity-20"></div>

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
            CS Fundamentals & Architecture
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Engineering <span className="text-violet-600">Coursework</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Core subjects that build the foundation of my engineering mindset, focusing on system mechanics, memory efficiency, and scalable architectures.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start content-start"
        >
          {courseworkData.map((course, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              // Last card (LLD) ko large screens par dono columns cover karne ke liye condition laga di gayi hai
              className={`bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm transition-all duration-300 h-fit ${course.hoverShadow} ${course.hoverBorder} ${index === 4 ? "lg:col-span-2 lg:w-3/4 lg:mx-auto" : ""}`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${course.bgColor} ${course.color} shadow-sm shrink-0`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  {course.title}
                </h3>
              </div>

              {/* Core Topics Tested */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">
                  Core Topics Tested
                </h4>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {course.topics.map((topic, i) => (
                    <motion.span 
                      key={i} 
                      variants={pillVariants}
                      className={`px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 cursor-default transition-colors hover:bg-white hover:${course.borderColor}`}
                    >
                      {topic}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Interview Question Box */}
              <div className={`mt-auto bg-slate-50 rounded-r-xl border-l-4 ${course.borderColor} p-4`}>
                <div className="flex items-start gap-3">
                  <FiMessageSquare className={`mt-1 shrink-0 ${course.color}`} size={18} />
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider mb-1 ${course.color}`}>
                      Real-World Query
                    </h5>
                    <p className="text-slate-700 font-medium text-sm italic">
                      "{course.question}"
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Coursework;