"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images, teamMembers } from "@/details";
import { Github, Linkedin, Zap, Code, ShieldCheck } from "lucide-react";

// --- Framer Motion Variants for Staggered Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function CareerPulse() {
  return (
    <div className="min-h-screen bg-[#060e1f] text-white">
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-sky-900/10 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,#060e1f)] pointer-events-none" />
      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060e1f]/90 backdrop-blur-md py-4 shadow-xl shadow-sky-900/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
            CareerPulse AI
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hidden md:flex gap-8 text-gray-300 text-base font-medium"
          >
            <motion.div variants={itemVariants}>
              <Link href="#project" className="hover:text-sky-400 transition">
                Project
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="#team" className="hover:text-sky-400 transition">
                Team
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="#gallery" className="hover:text-sky-400 transition">
                Gallery
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="https://github.com/YashPandey1405"
                target="_blank"
                className="text-white bg-sky-500 hover:bg-sky-600 px-3 py-1 rounded-full text-sm transition font-bold"
              >
                Get The Code
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </nav>

      {/* ✅ HERO / ABOUT ME */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-sky-400"
        >
          Yash Pandey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="text-2xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto mb-10"
        >
          Full-Stack MERN Developer & AI Engineer
        </motion.p>

        {/* Profile Image & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="p-1.5 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500"
          >
            <Image
              src="https://res.cloudinary.com/dah7l8utl/image/upload/v1758434713/IMG_20250719_212736_n6jbuo.jpg"
              alt="Yash Pandey"
              width={220}
              height={220}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 text-left max-w-md"
          >
            <p className="text-gray-300 leading-relaxed text-base">
              Proficient in Next.js, React, Node.js, and advanced backend
              systems (WebSockets, Redis, CI/CD). Recently focused on Generative
              AI, LangGraph, and cutting-edge agent architectures. Strong in
              ML/Deep Learning with 700+ DSA problems solved.
            </p>
            <div className="flex gap-6 mt-4 justify-start">
              <Link
                href="https://github.com/YashPandey1405"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8 text-gray-400 hover:text-sky-400 transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yashpandey29/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-sky-400 transition" />
              </Link>
              <Link
                href="https://leetcode.com/u/pandeyyash041/"
                target="_blank"
                aria-label="LeetCode"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  width={30}
                  height={30}
                  className="opacity-70 hover:opacity-100 transition filter invert brightness-0 saturate-100 invert-0"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section Separator --- */}
      <div className="max-w-6xl mx-auto h-px bg-white/10 my-16" />

      {/* ✅ PROJECT INFO */}
      <motion.section
        id="project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-10"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-3 text-sky-400 border-b border-sky-400/30 pb-2 inline-block"
        >
          CareerPulse AI – Minor Project
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 mt-4 text-lg max-w-4xl"
        >
          CareerPulse AI is an AI-powered resume intelligence platform that uses
          Transformer-based NLP, Machine Learning scoring algorithms, and Named
          Entity Recognition to analyze resumes, extract insights, classify job
          roles, and suggest skill improvements.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Tech Stack Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-sky-500/50 transition-all shadow-lg"
          >
            <h4 className="text-sky-400 font-extrabold text-2xl mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" /> Core Tech Stack
            </h4>
            <ul className="text-gray-300 text-base space-y-3">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" /> Frontend:
                Next.js + Tailwind + ShadCN
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" /> Backend:
                Node.js + Express
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" /> ML Layer:
                Python (Transformers, SpaCy, Scikit-learn)
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" /> Storage:
                MongoDB + AWS S3
              </li>
            </ul>
          </motion.div>

          {/* Project Links Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-sky-500/50 transition-all shadow-lg"
          >
            <h4 className="text-sky-400 font-extrabold text-2xl mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" /> Resources
            </h4>
            <div className="flex flex-col gap-4 text-base">
              <Link
                href="https://github.com/pianist22/career-pulse-ai/tree/ner-pipeline"
                target="_blank"
                className="text-sky-300 hover:text-sky-500 transition font-medium flex items-center gap-2"
              >
                <Github className="w-5 h-5" /> GitHub Repository
              </Link>
              <Link
                href="https://youtu.be/GyqG2U8PMH0"
                target="_blank"
                className="text-sky-300 hover:text-sky-500 transition font-medium flex items-center gap-2"
              >
                🎥 Project Demo Video
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section Separator --- */}
      <div className="max-w-6xl mx-auto h-px bg-white/10 my-16" />

      {/* ✅ TEAM SECTION */}
      <motion.section
        id="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-10"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-8"
        >
          Team Members
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03, // Slight reduction from 1.05 for team members as they are smaller cards
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center transition-all duration-300 flex flex-col items-center"
            >
              {/* Profile Image with consistent size and circular shape */}
              <div className="mb-4 p-1 rounded-full border-2 border-sky-400">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-24 h-24"
                />
              </div>

              <h4 className="font-extrabold text-xl text-white">
                {member.name}
              </h4>
              <p className="text-sky-400 text-sm mt-1 mb-4 font-semibold">
                {member.role}
              </p>
              {member.link && (
                <Link
                  href={member.link}
                  target="_blank"
                  className="text-sky-300 text-base hover:text-sky-500 transition font-medium"
                >
                  🔗 LinkedIn Profile
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- Section Separator --- */}
      <div className="max-w-6xl mx-auto h-px bg-white/10 my-16" />

      {/* ✅ IMAGE GALLERY (with consistent sizes and animations) */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <motion.h3
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-8"
        >
          Project Gallery / Screenshots
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.url}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
              }} // Subtle blue glow on hover
              transition={{ duration: 0.3 }}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer transform hover:z-10"
            >
              {/* Use the Link component to wrap the content and enable click functionality */}
              <Link
                href={img.url}
                target="_blank"
                aria-label={`View ${img.name} in new tab`}
              >
                {/* This div enforces a consistent aspect ratio, fixing the main issue */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={img.url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={img.name}
                    className="object-cover transition duration-500 group-hover:opacity-80"
                  />
                </div>
                <p className="p-4 text-center text-sky-300 font-medium text-sm">
                  {img.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ FOOTER */}
      <footer className="w-full border-t border-white/10 py-6 text-center text-gray-400 text-sm mt-16">
        © {new Date().getFullYear()} CareerPulse AI – Built with{" "}
        <span className="text-red-500">❤️</span> by the Team
      </footer>
    </div>
  );
}
