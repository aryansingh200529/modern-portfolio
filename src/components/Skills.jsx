import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiDatabase, FiServer, FiCode, FiCloud, FiCpu } from 'react-icons/fi';

const skillCategories = [
  {
    title: "Core Languages & Foundations",
    icon: <FiCode size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "hover:shadow-blue-500/10",
    groups: [
      { name: "Java / C++ (DSA Focus)", items: ["OOPs Principles", "Memory Management", "Collections Framework", "Multithreading"] },
      { name: "TypeScript (Production)", items: ["Generics", "Type Narrowing", "Interfaces", "Utility Types"] },
      { name: "JavaScript (ES6+)", items: ["Event Loop", "Call Stack", "Microtasks", "Closures", "Prototypal Inheritance"] }
    ]
  },
  {
    title: "Backend & System Engineering",
    icon: <FiServer size={24} />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    hoverBorder: "hover:border-violet-300",
    hoverShadow: "hover:shadow-violet-500/10",
    groups: [
      { name: "Node.js & Express", items: ["Non-blocking I/O", "Streams & Buffers", "Worker Threads", "Middleware Pipeline"] },
      { name: "API Architecture", items: ["RESTful Standards", "Idempotency", "Versioning", "Pagination Patterns"] },
      { name: "Security & Real-Time", items: ["Stateless JWT", "OAuth 2.0", "RBAC", "Rate Limiting", "WebSockets / SSE"] }
    ]
  },
  {
    title: "Data Layer & Caching",
    icon: <FiDatabase size={24} />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-emerald-500/10",
    groups: [
      { name: "PostgreSQL (Relational)", items: ["ACID Properties", "Normalization", "B-Tree Indexing", "Joins", "Connection Pooling"] },
      { name: "MongoDB (NoSQL)", items: ["Schema Design", "Aggregation Pipeline", "Compound Indexes", "Sharding Basics"] },
      { name: "Redis (In-Memory)", items: ["Cache-aside Pattern", "TTL", "Session Storage", "Distributed Locks", "Pub/Sub"] }
    ]
  },
  {
    title: "Modern Frontend Architecture",
    icon: <FiLayout size={24} />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    hoverBorder: "hover:border-pink-300",
    hoverShadow: "hover:shadow-pink-500/10",
    groups: [
      { name: "React.js & Next.js", items: ["App Router", "Server-Side Rendering (SSR)", "Server Components", "Custom Hooks"] },
      { name: "State & Data Fetching", items: ["TanStack Query (React Query)", "Zustand", "Context API"] },
      { name: "Styling & Optimization", items: ["Tailwind CSS", "Core Web Vitals", "Lazy Loading", "Code Splitting"] }
    ]
  },
  {
    title: "DevOps, Cloud & Tooling",
    icon: <FiCloud size={24} />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    hoverBorder: "hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-500/10",
    groups: [
      { name: "Containerization", items: ["Docker", "Multi-stage Builds", "Docker Compose", "Image Optimization"] },
      { name: "CI/CD & Version Control", items: ["Git & GitHub", "GitHub Actions", "Trunk-based Dev", "PR Reviews"] },
      { name: "Cloud & Observability", items: ["AWS (S3, EC2)", "Vercel / Render", "Postman Automation", "Structured Logging"] }
    ]
  },
  {
    title: "CS Fundamentals & AI",
    icon: <FiCpu size={24} />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-300",
    hoverShadow: "hover:shadow-indigo-500/10",
    groups: [
      { name: "System Design (LLD/HLD)", items: ["SOLID Principles", "Design Patterns", "CAP Theorem", "Load Balancing"] },
      { name: "Computer Networks", items: ["TCP vs UDP", "3-Way Handshake", "DNS Resolution", "TLS/HTTPS"] },
      { name: "AI & Vision Integrations", items: ["LangChain", "Google GenAI", "MediaPipe", "CNN Workflows"] }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
      id="skills" 
      // Update: py-24 hata kar pt-24 aur pb-12 kar diya gaya hai (bottom spacing kam karne ke liye)
      className="pt-24 pb-12 bg-[#F8F9FF] relative px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Accent Elements */}
      <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-amber-500 opacity-40"></div>
      <div className="absolute bottom-5 left-10 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"></div>

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
            What I Know (Engineering Depth)
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
            Technical <span className="text-violet-600">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A deep dive into the internal mechanics, scalable architectures, and production-grade tools I use to build enterprise-ready solutions.
          </p>
        </motion.div>

        {/* 
          Update: Grid me `items-start content-start` add kiya hai 
          Isse cards neeche tak stretch nahi honge agar screen height badi ho 
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start content-start"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm transition-all duration-300 h-fit ${category.hoverShadow} ${category.hoverBorder}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${category.bgColor} ${category.color} shadow-sm shrink-0`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Sub-Groups (The "Must-Know" Details) */}
              <div className="space-y-6">
                {category.groups.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-bold text-slate-700 mb-3 border-b border-slate-100 pb-1.5 uppercase tracking-wide">
                      {group.name}
                    </h4>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {group.items.map((skill, i) => (
                        <motion.span 
                          key={i} 
                          variants={pillVariants}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-3 py-1.5 ${category.bgColor} text-slate-700 text-xs font-semibold rounded-lg border border-transparent shadow-sm cursor-default transition-colors hover:bg-white ${category.hoverBorder}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
