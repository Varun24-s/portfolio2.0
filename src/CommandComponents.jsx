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
export const Projects = () => {
  const works = [
    { name: "Terminal_v1", hash: "882A", tech: ["React", "Motion"] },
    { name: "Nexus_App", hash: "F21C", tech: ["Node", "Redis"] },
    { name: "Neural_Link", hash: "A491", tech: ["Python", "TF"] },
    { name: "Grid_OS", hash: "C110", tech: ["Three.js", "GLSL"] }
  ];
  return (
    <div className="py-2">
      <SectionHeader icon={Folder} title="Project_Repositories" subtitle="FETCH_LIMIT: 4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {works.map((p, i) => (
          <div key={i} className="group relative border border-zinc-900 p-3 hover:bg-white/5 transition-all cursor-pointer">
            <div className="text-zinc-700 font-mono text-[8px] mb-2">REV_{p.hash}</div>
            <h4 className="text-white font-bold text-xs uppercase tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
              {p.name}
            </h4>
            <div className="flex flex-wrap gap-1">
              {p.tech.map(t => <span key={t} className="text-[8px] text-zinc-600">#{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <MetadataFooter />
    </div>
  );
};

// --- 4. EDUCATION: KNOWLEDGE ARCHIVE ---


import {ChevronRight, Terminal, Binary } from 'lucide-react';

export const Education = () => {
  const manitBlock = `
  ███╗   ███╗ █████╗ ███╗   ██╗██╗████████╗
  ████╗ ████║██╔══██╗████╗  ██║██║╚══██╔══╝
  ██╔████╔██║███████║██╔██╗ ██║██║   ██║   
  ██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║   
  ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║   ██║   
  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
  `;

  const edu = [
    { 
      school: "MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY", 
      degree: "B.Tech in Computer Science & Engineering", 
      date: "2024-28", 
    },
  ];

  return (
    <div className="py-8 bg-black font-mono overflow-hidden">
      {/* Main Attraction: White ASCII Header */}
      <div className="mb-8 group">
        <pre className="text-white text-[5px] md:text-[9px] leading-[1.1] font-bold select-none animate-flicker">
          {manitBlock}
        </pre>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[1px] w-12 bg-blue-600"></div>
          <span className="text-blue-500 text-[10px] tracking-[0.3em] font-black uppercase">
            Institutional_Archive_07
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-6 relative">
        {/* Decorative Vertical Background Text */}
        <div className="absolute -right-4 top-0 text-[60px] font-black opacity-[0.02] text-white select-none pointer-events-none rotate-90 origin-top-right">
          CSE_MANIT
        </div>

        {edu.map((item, i) => (
          <div key={i} className="group relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-4 group-hover:border-blue-500/50 transition-colors">
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-white text-sm font-black uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                </div>
                
                <div className="flex flex-col space-y-1 pl-8">
                  <p className="text-zinc-500 text-[10px] flex items-center gap-2">
                    <Terminal size={12} className="text-blue-600" />
                    {item.school}
                  </p>
                  
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-blue-500 text-[10px] font-black italic">
                  {item.date}
                </div>
              </div>

            </div>
            
              </div>
        ))}
      </div>

      {/* System Metadata Footer */}
      <div className="mt-8 flex justify-between items-center text-[9px] text-zinc-800 font-bold pt-4">
        <div className="flex gap-4">
          <span>LOC: BHOPAL_IN</span>
          <span>NET: CSE_LAN_INTERNAL</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-900 rounded-full animate-pulse" />
          SYSTEM_STABLE
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