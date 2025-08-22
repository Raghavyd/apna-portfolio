import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Github, Linkedin, Mail, MapPin, ExternalLink, Phone, Download,
  Sparkles, Cpu, Code2, Layers, Rocket
} from "lucide-react";
import "./index.css";

const profile = {
  name: "Aman Kumar",
  title: "Full-Stack Developer | React • Node.js",
  summary:
    "B.Tech student at Netaji Subhas Engineering College. Strong frontend, solid backend with Node/Express. Clear communicator, shipper of real projects.",
  location: "Kolkata (from Patna)",
  email: "amankumar900651@gmai.com",      // TODO: replace
  phone: "+91-86030 19925",       // TODO: replace
  resumeUrl: "https://drive.google.com/file/d/1TOlHLdQqdePo4I1xjoac0nki5hjUhH7P/view?usp=drive_link",                 // TODO: add Google Drive/Cloud link
  github: "https://github.com/Raghavyd",     // TODO: replace
  linkedin: "https://www.linkedin.com/in/aman-yadav-218b2a288/", // TODO: replace
};

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "TailwindCSS", "Framer Motion"],
  backend: ["Node.js", "Express", "REST APIs", "JWT/Auth"],
  database: ["MongoDB", "Mongoose"],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "Railway"],
  cs: ["DSA in C/C++", "Computer Architecture", "DAA", "Turing Machines", "VHDL Basics"],
};

const projects = [
  {
    name: "Genix AI",
    blurb:
      "AI-powered web app with a colorful brand system. Built modern UI, integrated AI workflows, and deployed on Vercel.",
    tags: ["React", "Vite", "Tailwind", "Vercel"],
    live: "https://genix-ai-nu.vercel.app/",
    code: "https://github.com/your-handle/genix-ai", // TODO: replace if available
    highlight: true,
  },
  {
    name: "Real Estate Website",
    blurb:
      "Property listing platform with clean cards, filters, and responsive grid. Focus on UX and fast load times.",
    tags: ["React", "Vite", "Tailwind"],
    live: "https://estate-aman.vercel.app/",
    code: "https://github.com/your-handle/real-estate", // TODO: replace if available
  },
  
];

const experience = [
  {
    role: "Builder — Jarvis-like AI Agent",
    org: "Personal Project",
    period: "2025",
    points: [
      "Built a desktop agent that answers real-time queries and opens apps like YouTube, Notepad, Camera, Chrome.",
      "Codebase in VS Code; planning a real-time web version with scalable API layer.",
    ],
  },
  {
    role: "Freelance / Open-source",
    org: "Self-directed",
    period: "2024–2025",
    points: [
      "Shipped multiple React apps with Vite, Tailwind, and Express backends.",
      "Deployed on Vercel/Railway, set up CI basics and environment secrets.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "Netaji Subhas Engineering College",
    period: "2022 – 2026 (expected)",
    points: [
      "Core: Computer Architecture, Pipelining, Memory Hierarchy, ILP, Multiprocessors, Non-Von Neumann.",
      "Theory: Turing Machines, Undecidability, Rice’s Theorem, Reductions.",
      "Labs: VHDL circuits, DAA programs in C/C++.",
    ],
  },
];

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

function Pill({ children }: { children: any }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function Section(props: { id: string; title: string; icon?: any; children: any }) {
  const Icon = props.icon;
  return (
    <section id={props.id} className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={variants.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          {Icon ? <Icon className="h-6 w-6" /> : null}
          <h2 className="text-2xl md:text-3xl font-semibold">{props.title}</h2>
        </div>
        {props.children}
      </motion.div>
    </section>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/70 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Aman Kumar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-200/10 px-3 py-2 text-sm hover:bg-zinc-200/20">
                <Download className="h-4 w-4" /> Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.15),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(244,63,94,.12),transparent_25%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs md:text-sm">
              <MapPin className="h-4 w-4" /> {profile.location}
            </div>
            <h1 className="mt-6 text-3xl md:text-6xl font-extrabold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 md:mt-4 text-lg md:text-xl text-zinc-300 max-w-2xl">{profile.title}</p>
            <p className="mt-4 max-w-2xl text-zinc-400">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:opacity-90">
                  See Projects <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <a href="#contact">
                <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900/50">
                  Contact <Mail className="h-4 w-4" />
                </button>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4">
        {/* About */}
        <Section id="about" title="About" icon={Code2}>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-zinc-300 leading-relaxed">
            I enjoy building fast, accessible web apps. On the frontend I’m comfortable with React, Vite, and Tailwind.
            On the backend I work with Node.js and Express to ship clean APIs. I care about clarity, performance, and
            good developer ergonomics.
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={Cpu}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Frontend" items={skills.frontend} />
            <Card title="Backend" items={skills.backend} />
            <Card title="Database" items={skills.database} />
            <Card title="Tools" items={skills.tools} />
            <Card className="md:col-span-2" title="Computer Science" items={skills.cs} />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={Layers}>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p.name}
                variants={variants.fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 ${p.highlight ? "ring-1 ring-zinc-700" : ""}`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    {p.highlight ? (
                      <span className="rounded-full bg-zinc-200/10 px-2 py-0.5 text-xs">Featured</span>
                    ) : null}
                  </div>
                  <p className="text-zinc-300">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={p.live} target="_blank" rel="noreferrer">
                      <button className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-3 py-2 text-sm font-medium hover:opacity-90">
                        Live <ExternalLink className="h-4 w-4" />
                      </button>
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer">
                      <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 text-sm font-medium hover:bg-zinc-900/50">
                        Code <Github className="h-4 w-4" />
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={Rocket}>
          <div className="grid gap-6">
            {experience.map((e) => (
              <div key={e.role} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-sm text-zinc-400">{e.period}</span>
                </div>
                <p className="text-sm text-zinc-400">{e.org}</p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-300">
                  {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          {education.map((ed) => (
            <div key={ed.school} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{ed.degree}</h3>
                <span className="text-sm text-zinc-400">{ed.period}</span>
              </div>
              <p className="text-sm text-zinc-400">{ed.school}</p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-300">
                {ed.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                </div>
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a>
                </div>
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <Github className="h-4 w-4" />
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <Linkedin className="h-4 w-4" />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                </div>
              </div>
              <form className="space-y-3">
                <div>
                  <label className="text-sm text-zinc-400">Name</label>
                  <input className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Let’s build something."></textarea>
                </div>
                <button type="button" className="w-full rounded-xl bg-white text-black px-4 py-2 font-medium hover:opacity-90">
                  Send
                </button>
              </form>
            </div>
          </div>
        </Section>

        <footer className="py-16 text-center text-zinc-500 text-sm">
          © {year} {profile.name}. Built with React, Vite, and Tailwind.
        </footer>
      </main>
    </div>
  );
}

function Card({
  title,
  items,
  className = "",
}: { title: string; items: string[]; className?: string }) {
  return (
    <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 ${className}`}>
      <h3 className="mb-3 text-base font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </div>
  );
}
