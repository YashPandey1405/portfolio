"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Database,
  Cpu,
  Code2,
  ExternalLink,
  ChevronRight,
  Server,
  Network,
  Braces,
  Download,
  ShieldCheck,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";

// Types
interface Project {
  name: string;
  desc: string;
  tech: string[];
  link?: string;
}

interface SkillCategory {
  title: string;
  items: string[];
}

// Import data from your existing file
import { skills, projects, achievements, experiences } from "@/details";

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-sky-500/30 selection:text-sky-200 font-sans overflow-x-hidden">
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[600px] bg-sky-500 opacity-[0.08] blur-[120px] rounded-full"></div>
      </div>

      <FloatingNav />

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 pt-20 lg:pt-0">
          <motion.div
            style={{ opacity: heroOpacity }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              System Architecture & GenAI
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              YASH <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-sky-500">
                PANDEY
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Engineering <span className="text-white">resilient backends</span>{" "}
              and
              <span className="text-white"> intelligent agents</span> for the
              next generation of web-scale applications.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-all hover:scale-105 active:scale-95"
              >
                Explore Work
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex gap-2">
                <SocialButton
                  href="https://github.com/YashPandey1405"
                  icon={<Github size={18} />}
                />
                <SocialButton
                  href="https://linkedin.com/in/yashpandey29"
                  icon={<Linkedin size={18} />}
                />
              </div>
            </div>
          </motion.div>

          {/* CODE TERMINAL VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-3xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.03]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="mx-auto text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                  System_Manifest.v2
                </div>
              </div>
              <div className="p-8 space-y-4 font-mono text-sm leading-relaxed">
                <div className="flex gap-3 text-sky-400/80">
                  <span className="text-gray-600">01</span>
                  <span>{`{`}</span>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">02</span>
                  <p>
                    <span className="text-purple-400">status</span>:{" "}
                    <span className="text-green-400">
                      &quot;Active_Scaling&quot;
                    </span>
                    ,
                  </p>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">03</span>
                  <p>
                    <span className="text-purple-400">stack</span>: [
                    <span className="text-yellow-400">&quot;Redis&quot;</span>,{" "}
                    <span className="text-yellow-400">&quot;AWS&quot;</span>,{" "}
                    <span className="text-yellow-400">&quot;NextJS&quot;</span>
                    ],
                  </p>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">04</span>
                  <p>
                    <span className="text-purple-400">genAI</span>:{" "}
                    <span className="text-blue-400">true</span>,
                  </p>
                </div>
                <div className="flex gap-3 pl-6">
                  <span className="text-gray-600">05</span>
                  <p>
                    <span className="text-purple-400">dsa_solved</span>:{" "}
                    <span className="text-orange-400">700</span>
                  </p>
                </div>
                <div className="flex gap-3 text-sky-400/80">
                  <span className="text-gray-600">06</span>
                  <span>{`}`}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ENHANCED EXECUTIVE SUMMARY */}
        <section className="py-24 border-y border-white/5 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-sky-500/[0.02] to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/4">
                <div className="sticky top-32">
                  <h2 className="font-mono text-sky-500 text-xs tracking-[0.3em] uppercase mb-2">
                    / Biography
                  </h2>
                  <div className="h-px w-12 bg-sky-500/40" />
                </div>
              </div>
              <div className="md:w-3/4 space-y-6">
                <p className="text-gray-200 leading-relaxed text-xl font-light">
                  I am a{" "}
                  <span className="text-white font-semibold">
                    Backend Engineer and System Designer
                  </span>{" "}
                  dedicated to architecting the invisible infrastructure that
                  powers modern digital experiences. My engineering philosophy
                  is rooted in the belief that software should not only be
                  functional but{" "}
                  <span className="text-sky-400">
                    resilient, observable, and built to scale
                  </span>
                  . With a deep specialization in the MERN and Next.js
                  ecosystems, I specialize in crafting robust APIs and real-time
                  systems that leverage Redis-based pub/sub and horizontally
                  scaled WebSocket architectures.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  Beyond traditional backend engineering, I am actively
                  pioneering{" "}
                  <span className="text-white">Agentic AI workflows</span>. By
                  integrating Retrieval-Augmented Generation (RAG) and
                  vector-search optimization, I transform static data into
                  intelligent, conversational assets. My technical intuition is
                  sharpened by solving over{" "}
                  <span className="text-sky-400">
                    700+ Data Structures and Algorithms
                  </span>{" "}
                  challenges, ensuring that every line of code is optimized for
                  efficiency. Whether I am deploying cloud-native solutions on
                  AWS or fine-tuning CI/CD pipelines, my goal remains: to bridge
                  the gap between complex system requirements and elegant code.
                </p>
                <div className="pt-6">
                  <Link
                    href="mailto:pandeyyash041@gmail.com"
                    className="text-sm font-mono text-sky-400 flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    GET_IN_TOUCH <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPIRENCE SECTION */}
        <section id="experience" className="pt-32">
          <SectionHeader
            title="Professional Tenure"
            subtitle="Building scalable infrastructure and financial systems."
          />

          <div className="relative flex flex-col gap-12 mt-16 px-4">
            {/* Vertical Timeline Line */}
            <div className="absolute left-10 md:left-14 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-sky-500/20 to-transparent hidden sm:block" />

            {experiences.map((exp, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Timeline Node Icon */}
                <div className="relative z-10 shrink-0 mt-4 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#080808] border border-white/10 text-sky-400 group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-500">
                  <Briefcase size={22} />
                </div>

                {/* Experience Card */}
                <div className="flex-1 rounded-3xl border border-white/5 bg-[#080808] p-8 md:p-10 hover:border-sky-500/40 hover:bg-[#0A0A0A] transition-all duration-500 shadow-2xl">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-sky-400 font-semibold text-lg">
                            {exp.company}
                          </span>
                          <span className="text-gray-600 hidden md:block">
                            •
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-gray-500 text-xs font-medium border border-white/5 uppercase tracking-wider">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-4 mt-6">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex gap-4 text-gray-400 leading-relaxed font-light text-[15px]"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sky-500/40 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta Info (Date & Location) */}
                    <div className="flex flex-col md:flex-row xl:flex-col xl:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 text-sm font-mono whitespace-nowrap">
                        <Calendar size={14} className="text-sky-500" />
                        {exp.startDate} — {exp.endDate}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-1 text-gray-500 text-xs italic">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Footer */}
                  <div className="mt-10 pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono tracking-wider px-3 py-1.5 rounded-lg bg-white/[0.02] text-gray-400 border border-white/5 group-hover:border-sky-500/20 group-hover:text-sky-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION - SYMMETRIC GRID */}
        <section id="projects" className="py-32">
          <SectionHeader
            title="Technical Implementations"
            subtitle="Symmetric systems engineered for performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project: Project, i: number) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col justify-between h-full min-h-[380px] rounded-3xl border border-white/5 bg-[#080808] p-10 hover:border-sky-500/40 hover:bg-[#0A0A0A] transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/5 border border-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                      <Terminal size={24} />
                    </div>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-gray-400 leading-relaxed text-lg font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-md bg-white/[0.03] text-gray-400 border border-white/5 group-hover:border-sky-500/20 group-hover:text-sky-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* TECH STACK / SKILLS */}
        <section id="skills" className="py-24 border-t border-white/5">
          <SectionHeader
            title="Tech Stack"
            subtitle="My core development toolkit."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {skills.map((skillGroup: SkillCategory, idx: number) => (
              <SkillCard
                key={idx}
                title={skillGroup.title}
                items={skillGroup.items}
                idx={idx}
              />
            ))}
          </div>
        </section>

        {/* MILESTONES / ACHIEVEMENTS */}
        <section id="achievements" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold tracking-tight">Milestones</h2>
              <p className="text-gray-500 mt-4">
                Recognition of competitive performance and architectural
                excellence.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {achievements.map((achievement: string, i: number) => (
                <div
                  key={i}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sky-500 opacity-40">
                      0{i + 1}
                    </span>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement}
                    </p>
                  </div>
                  <ShieldCheck
                    className="text-sky-500/20 group-hover:text-sky-500/80 transition-all"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section id="contact" className="py-40">
          <div className="relative rounded-[3rem] overflow-hidden bg-blue-200 px-10 py-24 text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter">
                LET&apos;S SCALE.
              </h2>
              <p className="text-gray-600 text-lg">
                Currently open for backend and GenAI roles. If you need a
                developer who thinks in systems, let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:pandeyyash041@gmail.com"
                  className="h-14 inline-flex items-center justify-center px-10 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
                >
                  Hire Yash Pandey
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/1g9SM-mmxfu1C5_BDI5AUbNjQiQOWuVCT?usp=sharing"
                  target="_blank"
                  className="h-14 inline-flex items-center justify-center px-10 bg-black/5 text-black border border-black/10 rounded-full font-bold hover:bg-black/10 transition-all"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">
            Y
          </div>
          <span>© {new Date().getFullYear()} Yash Pandey.</span>
        </div>
        <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase">
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link
            href="https://github.com/YashPandey1405"
            className="hover:text-white transition-colors"
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/yashpandey29"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function FloatingNav() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-6">
      <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 mr-2 shadow-inner">
          <Image
            src="https://res.cloudinary.com/dah7l8utl/image/upload/v1762360508/YP_Photo-5_efqalh.jpg"
            alt="Yash"
            width={36}
            height={36}
            className="object-cover scale-110"
          />
        </div>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Work</NavLink>
        <NavLink href="#skills">Stack</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-5 py-2 text-[11px] font-mono tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
    >
      {children}
    </Link>
  );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:border-sky-500/40 transition-all shadow-xl"
    >
      {icon}
    </a>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <p className="text-gray-500 text-lg max-w-2xl font-light">{subtitle}</p>
    </div>
  );
}

function SkillCard({ title, items, idx }: SkillCardProps) {
  const icons: Record<string, React.ReactNode> = {
    Backend: <Server size={18} />,
    Frontend: <Code2 size={18} />,
    Database: <Database size={18} />,
    DevOps: <Network size={18} />,
    GenAI: <Cpu size={18} />,
    Tools: <Terminal size={18} />,
  };

  const category = Object.keys(icons).find((k) => title.includes(k)) || "Tools";
  const Icon = icons[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2.5 rounded-xl bg-white/5 text-sky-400">{Icon}</div>
        <h3 className="font-bold text-lg text-white tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-lg bg-white/5 text-gray-400 border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

interface SkillCardProps {
  title: string;
  items: string[];
  idx: number;
}
