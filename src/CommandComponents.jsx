import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Globe, Github, Mail, MapPin, Linkedin, GraduationCap, Calendar, Cpu, Code2, Database, Terminal as TerminalIcon, ShieldCheck, Zap, Phone, Instagram } from 'lucide-react';

// --- SHARED UI SUB-COMPONENTS ---
const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-4">
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-blue-500" />
      <h3 className="text-white font-black tracking-tighter uppercase">{title}</h3>
    </div>
    <span className="text-[10px] text-zinc-700 font-mono hidden md:block">{subtitle}</span>
  </div>
);

const MetadataFooter = ({ status = "ACTIVE" }) => (
  <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-[8px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
    <span>Integrity: {status}</span>
    <span>Checksum: 0x${Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
  </div>
);

// --- 1. ABOUT: SYSTEM ANALYSIS ---


export const HelpMenu = () => {
  const categories = [
    {
      title: "IDENT_DISCOVERY",
      commands: [
        { name: "about", desc: "Personnel identity & summary" },
        { name: "skills", desc: "Technical capabilities matrix" },
        { name: "projects", desc: "View deployed repositories" },
        { name: "education", desc: "Academic history" },
        { name: "contact", desc: "Establish communication link" },
      ]
    },
    {
      title: "SYSTEM_UTILITIES",
      commands: [
        { name: "neofetch", desc: "Display system distribution info" },
        { name: "whoami", desc: "Display current user privilege" },
        { name: "date", desc: "Sync with system clock" },
        { name: "clear", desc: "Wipe terminal buffer" },
        { name: "sudo", desc: "Request root access" },
      ]
    },
    {
      title: "SIMULATIONS",
      commands: [
        { name: "snake", desc: "Launch retro arcade module (not for mobile phones)" },
        { name: "ttt", desc: "Launch TicTacToe game" },
      ]
    }
  ];

  return (
    <div className="py-2 font-mono text-[11px] md:text-xs max-w-2xl">
      <p className="text-zinc-500 italic mb-4">
        {`>>`} PROTOCOL_HELP_v3.0: Available commands listed by sector...
      </p>

      <div className="space-y-6">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-2">
            {/* Category Header */}
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase">
                {cat.title}
              </span>
              <div className="h-[1px] flex-1 bg-zinc-900" />
            </div>

            {/* Command Grid */}
            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-1 pl-2">
              {cat.commands.map((cmd, j) => (
                <React.Fragment key={j}>
                  <span className="text-zinc-300 font-bold hover:text-blue-400 transition-colors cursor-help">
                    {cmd.name}
                  </span>
                  <span className="text-zinc-500">
                    — {cmd.desc}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hint for the 'ls -a' users */}
      {/* <div className="mt-6 p-2 border border-dashed border-zinc-800 text-[10px] text-zinc-600">
        <span className="text-blue-900 font-bold uppercase">Tip:</span> Hidden files may contain decryption keys. Use 'ls -a' to explore restricted sectors.
      </div> */}
    </div>
  );
};

export const About = () => {
  const coreStats = [
    { label: "INSTITUTION", value: "MANIT_BHOPAL", status: "B.TECH_CSE" },
    { label: "ACADEMIC_YEAR", value: "SOPHOMORE", status: "UNDERGRAD" },
    { label: "LOGIC_CORE", value: "C++ / DSA", status: "LEETCODE_ACTIVE" },
    { label: "CREATIVE_OS", value: "MUSIC_POETRY", status: "LOADED" },
  ];

  return (
    <div className="py-2 font-mono text-xs">
        <SectionHeader icon={TerminalIcon} title="System_Analysis" subtitle="ANALYTICS_MODE: DEEP_DIVE" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Middle Column: Bio & Objectives */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-950 border border-zinc-900 p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-black px-2 py-0.5 text-[8px] font-bold">
              SYSTEM_BIO
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              <span className="text-blue-500 font-bold">» SUMMARY:</span> I am a
              Computer Science sophomore at Maulana Azad National Institute of Technology. 
              Architecting at the intersection of web development and algorithmic logic, 
              he maintains a persistent drive for technical mastery and creative expression.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
              <div className="text-zinc-500">» SECTOR: B.Tech Computer Science</div>
              <div className="text-zinc-500">» PRIMARY_LANG: C++ </div>
              <div className="text-zinc-500">» INTERESTS: Web Dev / Full-Stack Architecture</div>
              <div className="text-zinc-500">» SOFT_SKILLS: Strong Communication / Persistence</div>
            </div>
          </div>

          {/* Current Mission / Training */}
          <div className="space-y-2">
            <div className="text-blue-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
              <span className="animate-pulse">●</span> Active_Development_Parameters
            </div>
            <div className="border-t border-zinc-900 pt-2 text-zinc-400 space-y-1">
              <p>{`[01] Mastering Data Structures & Algorithms (DSA) via C++ on LeetCode.`}</p>
              <p>{`[02] Engineering responsive web interfaces with modern tech stacks.`}</p>
              <p>{`[03] Harmonizing academic rigor with creative pursuits in music and poetry.`}</p>
            </div>
          </div>
        </div>

        {/* Right Column: System Metrics & Extras */}
        <div className="space-y-4">
          <div className="text-zinc-600 font-bold uppercase text-[10px] tracking-tighter border-b border-zinc-900 pb-1">
            System_Diagnostics
          </div>
          {coreStats.map((stat, i) => (
            <div key={i} className="flex justify-between items-end border-b border-zinc-900/50 pb-1 hover:bg-white/5 transition-colors p-1">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[8px]">{stat.label}</span>
                <span className="text-white font-bold">{stat.value}</span>
              </div>
              <span className="text-blue-400 text-[9px] mb-0.5">{stat.status}</span>
            </div>
          ))}

          {/* Personality Sub-process */}
          <div className="mt-6 p-3 bg-zinc-900/40 border border-zinc-800 rounded">
            <div className="text-zinc-400 text-[9px] font-bold mb-2 uppercase tracking-widest italic">Extracurricular_Threads:</div>
            <div className="text-[10px] text-zinc-500 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 italic">♫</span>
                <span>Music Synthesis & Appreciation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 italic">✎</span>
                <span>Poetic Composition & Literature</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 italic">✓</span>
                <span>Soft Skills & Group Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MetadataFooter />
    </div>
  );
};

// --- 2. SKILLS: MODULE MANIFEST ---


// --- UPDATED SKILLS COMPONENT ---
export const Skills = () => {
  const skillGroups = [
    { 
      cat: "Low_Level_Core", 
      icon: <Cpu size={14}/>, 
      items: ["C", "C++","Javascript", "DSA", "Object Oriented Programming", "Problem Solving"] 
    },
    { 
      cat: "Frontend_Vitals", 
      icon: <Code2 size={14}/>, 
      items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] 
    },
    { 
      cat: "Backend_Stack", 
      icon: <Database size={14}/>, 
      items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"] 
    }
  ];

  return (
    <div className="py-2">
      {/* Keeping your original Header */}
      <SectionHeader icon={Zap} title="Technical_Capabilities" subtitle="MODULES_LOADED: 15" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-500">
              {group.icon}
              <span className="text-[10px] font-bold uppercase tracking-widest">{group.cat}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <div key={j} className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-sm flex items-center gap-2 group hover:border-blue-500 transition-all cursor-crosshair">
                  {/* Keeping your original blue dot animation */}
                  <div className="h-1 w-1 rounded-full bg-blue-500 group-hover:animate-ping" />
                  <span className="text-[11px] text-zinc-400 font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keeping your original Footer */}
      <MetadataFooter />
    </div>
  );
};

// --- 3. PROJECTS: REPOSITORY GRID ---
import { ExternalLink, Layers } from 'lucide-react';

export const Projects = () => {
  const works = [
    { 
      name: "Typing_Mania", 
      hash: "T-MANIA", 
      tech: ["JavaScript", "Socket.io", "Next.js", "Tailwind CSS"],
      desc: "A high-speed competitive typing engine. Features real-time multiplayer synchronization, allowing users to compete in live performance benchmarks.",
      link: "https://typing-mania-one.vercel.app/",
      github: "https://github.com/Varun24-s/typing-mania",
      status: "STABLE"
    },
    { 
      name: "Episteme", 
      hash: "EPI-LOG", 
      tech: ["Next.js", "Supabase", "Clerk", "Tailwind"],
      desc: "A minimalist, editorial-first blogging platform. Features a production-grade sharing engine, secure user authentication, and real-time database management.",
      link: "https://epistemeblogg.netlify.app", 
      github: "https://github.com/Varun24-s/episteme", 
      status: "LIVE"
    },
    { 
      name: "E-Summit '26", 
      hash: "MANIT-ES", 
      tech: ["React", "Tailwind", "Framer Motion"],
      desc: "Centralized operational hub for MANIT's flagship entrepreneurship event. Engineered for high-traffic scalability with smooth interactive elements.",
      link: "https://esummit.ecellnitb.in/",
      github: "https://github.com/Naitik002/E-Summit26",
      status: "DEPLOYED"
    }
  ];

  return (
    <div className="py-4 font-mono">
      <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
        <Folder className="text-blue-500" size={20} />
        <div>
          <h2 className="text-white font-black text-xl tracking-tighter uppercase">Project_Repositories</h2>
          <p className="text-zinc-600 text-[10px] tracking-widest">USER://VARUN/MODULES/PRODUCTION</p>
        </div>
      </div>
      
      <div className="space-y-8">
        {works.map((p, i) => (
          <div key={i} className="relative group border-l-2 border-zinc-900 pl-6 py-2 hover:border-blue-500 transition-all duration-300">
            {/* Background Accent */}
            <div className="absolute left-0 top-0 h-full w-0 group-hover:w-full bg-blue-500/[0.02] transition-all duration-500 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              
              {/* Left Side: Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-700 text-[10px] font-bold">REV_{p.hash}</span>
                  <span className="h-[1px] w-8 bg-zinc-900" />
                  <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase italic">{p.status}</span>
                </div>

                <h3 className="text-white text-2xl font-black uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                  {p.name.replace('_', ' ')}
                </h3>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {p.tech.map(t => (
                    <div key={t} className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Actions */}
              <div className="flex flex-row lg:flex-col gap-3 shrink-0">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black text-[11px] font-black uppercase hover:bg-blue-500 hover:text-white transition-all group/btn"
                >
                  Live_Demo <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase hover:border-white hover:text-white transition-all"
                >
                  Source_Code <Github size={14} />
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footer System Info */}
      <div className="mt-12 flex justify-between items-center pt-4 border-t border-zinc-900">
        <div className="flex gap-6 text-[9px] text-zinc-700 font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1"><Cpu size={10} /> Sync: Optimized</span>
          <span className="flex items-center gap-1"><Layers size={10} /> Stack: Full</span>
        </div>
        <div className="text-[9px] text-zinc-800 font-bold italic">
          [END_OF_LIST]
        </div>
      </div>
    </div>
  );
};

// --- 4. EDUCATION: KNOWLEDGE ARCHIVE ---


import {ChevronRight, Terminal, Binary } from 'lucide-react';


export const Education = () => {
  const edu = [
    { 
      school: "MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY (MANIT), BHOPAL", 
      degree: "B.Tech in Computer Science & Engineering", 
      date: "2024 - 2028",
      status: "CURRENTLY_ENROLLED"
    },
  ];

  return (
    <div className="py-4 bg-black font-mono overflow-hidden">
      {/* Big Bold Header Section */}
      <div className="mb-10 relative">
        <div className="absolute -top-4 -left-2 opacity-10 blur-sm select-none pointer-events-none">
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">MANIT</h1>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white relative z-10">
          MANIT<span className="text-blue-600">.</span>
        </h1>
        
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[2px] w-10 bg-blue-600"></div>
          <span className="text-zinc-500 text-[10px] tracking-[0.4em] font-bold uppercase">
            National_Institute_Archive
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8 relative">
        {/* Subtle Background Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[80px] font-black opacity-[0.03] text-white select-none pointer-events-none -rotate-90">
          CSE_CORE
        </div>

        {edu.map((item, i) => (
          <div key={i} className="group border-l-2 border-zinc-900 pl-6 py-2 hover:border-blue-600 transition-all duration-500">
            <div className="space-y-4">
              {/* Specification Label */}
              <div className="flex items-center gap-2 text-blue-600">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black tracking-widest uppercase">Verified_Enrollment</span>
              </div>

              {/* Degree Title */}
              <div className="space-y-1">
                <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Terminal size={12} className="shrink-0" />
                  <p className="text-[11px] md:text-xs font-bold uppercase tracking-wide">
                    {item.school}
                  </p>
                </div>
              </div>

              {/* Date & Status Meta */}
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-tighter">
                  {item.date}
                </div>
                <div className="flex items-center gap-2 text-green-500 text-[9px] font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* System Metadata Footer */}
      <div className="mt-12 flex justify-between items-end border-t border-zinc-900 pt-4">
        <div className="space-y-1">
          <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest">Database: Student_Ledger_0722</p>
          <p className="text-[9px] text-zinc-800 font-bold uppercase tracking-widest">Location: Bhopal, Madhya Pradesh</p>
        </div>
        <div className="text-right italic font-black text-2xl text-zinc-900 select-none">
          2026_LOG
        </div>
      </div>
    </div>
  );
};
// --- 5. CONTACT: COMMS_CHANNEL ---

export const Contact = () => {
  const contacts = [
  { 
    icon: <Mail size={12}/>, 
    label: "user.mail", 
    val: "varunsharma2990@gmail.com", 
    href: "mailto:varunsharma2990@gmail.com",
    cmd: "SEND_PACKET" 
  },
  { 
    icon: <Phone size={12}/>, 
    label: "mobile.comm", 
    val: "+91 9302361925", 
    href: "tel:+919302361925",
    cmd: "ACCESS_PORTAL" 
  },
  { 
    icon: <Linkedin size={12}/>, 
    label: "social.link", 
    val: "in/varun24-s", 
    href: "https://linkedin.com/in/varun24-s",
    cmd: "ESTABLISH_HNDSHK" 
  },
  { 
    icon: <Github size={12}/>, 
    label: "git.vault", 
    val: "@varun24-s", // Add your github username here
    href: "https://github.com/Varun24-s",
    cmd: "CLONE_REPOS" 
  },
  { 
    icon: <Instagram size={12}/>, 
    label: "visual.feed", 
    val: "@_varun271", // Replace with your actual handle
    href: "https://instagram.com/_varun271", 
    cmd: "RENDER_IMG" 
  },
  { 
    icon: <MapPin size={12}/>, 
    label: "sys.coords", 
    val: "23°13'33.2N 77°22'58.9E", 
    href: "https://www.google.com/maps/search/?api=1&query=23.225889,77.38302",
    cmd: "LOCATE_NODE" 
  }
];

  return (
    <div className="py-6 relative overflow-hidden bg-black font-mono">
      {/* Background Grid Pattern for a "Radar" look */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        <SectionHeader 
          icon={Globe} 
          title="COMM_UPLINK_ESTABLISHED" 
          subtitle="ENCRYPTION: RSA_4096_BIT" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6">
  {contacts.map((c, i) => (
    <a 
      key={i} 
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block cursor-none" // Use custom cursor if you have one!
    >
      {/* Terminal Prompt Label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-blue-600 text-[8px] font-bold">visitor@manit:~$</span>
        <span className="text-zinc-500 text-[9px] font-mono group-hover:text-blue-400 transition-colors">
          cat {c.label}
        </span>
      </div>

      {/* Main Data Card */}
      <div className="flex items-center justify-between p-3 border border-zinc-900 bg-zinc-950/40 group-hover:border-blue-500/50 group-hover:bg-blue-500/[0.03] transition-all">
        <div className="flex items-center gap-3">
          <div className="text-zinc-600 group-hover:text-blue-500 transition-transform group-hover:scale-110 duration-300">
            {c.icon}
          </div>
          <div className="text-zinc-300 text-[11px] font-mono tracking-tight group-hover:text-white">
            {c.val || "HIDDEN_ENCRYPTED"}
          </div>
        </div>

        {/* Action Tooltip */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[7px] text-zinc-800 font-black group-hover:text-blue-900 transition-colors uppercase">
            {c.cmd}
          </span>
          <div className="w-1 h-1 bg-zinc-800 group-hover:bg-blue-500 rounded-full group-hover:animate-ping" />
        </div>
      </div>
      
      {/* Hover "Highlight" Bar */}
      <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/20 pointer-events-none transition-all" />
    </a>
  ))}
</div>

        {/* System Diagnostics Footer */}
        <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-900 pt-4 opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-[8px] text-zinc-500">
            <Terminal size={10} /> 
            <span>SHELL: /BIN/ZSH</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] text-zinc-500">
            <Cpu size={10} /> 
            <span>LATENCY: 14MS</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] text-zinc-500">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span>PORT_READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};