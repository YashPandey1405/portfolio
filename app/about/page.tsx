"use client";

import Image from "next/image";
import Link from "next/link";
import { skills, projects, achievements } from "@/details";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code,
  Zap,
  Trophy,
  Mail,
  Cpu,
  Server,
  Sparkles,
} from "lucide-react";

// ✅ DATA ARRAYS — No Inline UI Hardcoding

// ✅ Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// ------------------------------------------------------------------------

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-[#070b16]/80 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
            YashPandey
          </h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="hidden md:flex gap-8 text-gray-300 text-sm font-medium"
          >
            <motion.a
              href="#home"
              variants={fadeUp}
              className="hover:text-sky-400"
            >
              Home
            </motion.a>
            <motion.a
              href="#skills"
              variants={fadeUp}
              className="hover:text-sky-400"
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              variants={fadeUp}
              className="hover:text-sky-400"
            >
              Projects
            </motion.a>
            <motion.a
              href="#achievements"
              variants={fadeUp}
              className="hover:text-sky-400"
            >
              Achievements
            </motion.a>
            <motion.a
              href="#contact"
              variants={fadeUp}
              className="hover:text-sky-400"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </nav>

      {/* ✅ Floating Gradient Lights */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-sky-900/10 via-indigo-600/5 to-transparent blur-3xl" />

      {/* ✅ HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="text-6xl md:text-[6rem] font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-200 to-sky-500"
        >
          Yash Pandey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-2xl md:text-3xl text-gray-300 mt-4 font-light"
        >
          Web Developer • System Designer • GenAI Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-[240px] mx-auto mt-12 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 p-1.5 shadow-2xl"
        >
          <Image
            src="https://res.cloudinary.com/dah7l8utl/image/upload/v1762360508/YP_Photo-5_efqalh.jpg"
            width={260}
            height={260}
            className="rounded-3xl object-cover"
            alt="Yash"
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mt-10"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.a
            variants={fadeUp}
            href="https://github.com/YashPandey1405"
            target="_blank"
          >
            <Github className="w-8 h-8 text-gray-300 hover:text-sky-400 transition" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/yashpandey29"
            target="_blank"
          >
            <Linkedin className="w-8 h-8 text-gray-300 hover:text-sky-400 transition" />
          </motion.a>

          <motion.a variants={fadeUp} href="mailto:pandeyyash041@gmail.com">
            <Mail className="w-8 h-8 text-gray-300 hover:text-sky-400 transition" />
          </motion.a>
        </motion.div>
      </section>

      {/* ✅ ABOUT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-5xl mx-auto px-6 pb-24 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I build real-world software — scalable web apps, real-time systems,
          AI-powered products, and backend infrastructure. My current focus is
          GenAI, LLM-powered intelligence, Agentic AI workflows, distributed
          WebSockets, Redis Pub/Sub, and production-ready ML solutions.
        </motion.p>
      </motion.section>

      <div className="max-w-6xl mx-auto h-px bg-white/10 my-10" />

      {/* ✅ SKILLS SECTION — Dynamic */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-sky-400 mb-10 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((block) => (
            <motion.div
              key={block.title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-sky-500/40 transition shadow-xl"
            >
              <h3 className="text-xl font-extrabold text-sky-300 mb-4">
                {block.title}
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {block.items.map((item) => (
                  <li key={item} className="hover:text-sky-400 transition">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto h-px bg-white/10 my-10" />

      {/* ✅ PROJECTS SECTION — Dynamic Cards */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-sky-400 text-center mb-10"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: "0px 0px 30px rgba(56,189,248,.3)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 p-7 rounded-2xl backdrop-blur-lg shadow-xl"
            >
              <h3 className="text-xl font-bold text-sky-300">{p.name}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-sky-500/20 px-2 py-1 rounded-full text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <Link
                  href={p.link}
                  target="_blank"
                  className="text-sky-300 hover:text-sky-500 mt-5 inline-block font-medium text-sm"
                >
                  🔗 View Repository
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto h-px bg-white/10 my-10" />

      {/* ✅ ACHIEVEMENTS — Dynamic */}
      <motion.section
        id="achievements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl text-center font-bold text-sky-400 mb-10"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 p-5 rounded-xl text-gray-300 backdrop-blur-lg hover:border-sky-500/40 transition shadow-xl"
            >
              ✅ {a}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto h-px bg-white/10 my-10" />

      {/* ✅ CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-sky-400 mb-4"
        >
          Let’s Build Something Great
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 max-w-xl mx-auto mb-8"
        >
          Open for internships, backend roles, GenAI engineering, and scalable
          system projects.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="https://forms.gle/pVEL8GuNUSjfuCea7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-sky-500 rounded-full text-white font-bold hover:bg-sky-600 transition shadow-xl"
        >
          Contact With Me 👋
        </motion.a>
      </motion.section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Built with 💙 by Yash Pandey
      </footer>
    </div>
  );
}
