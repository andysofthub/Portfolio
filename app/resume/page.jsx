'use client';

import React from 'react';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiExternalLink,
  FiDownload,
  FiPrinter,
  FiCode,
  FiCpu,
  FiZap,
  FiTrendingUp,
} from 'react-icons/fi';

export default function ResumePage() {
  const name = 'Tony Chan';
  const title = 'Full-Stack Developer | AI Integration Specialist';
  const location = 'Brockport, NY, USA';
  const email = 'chantony9333@gmail.com';
  const github = 'https://github.com/chantony33';
  const linkedin = 'https://linkedin.com/in/tony-chan';
  const portfolio = 'https://tonychan.com.np';
  const phone = '+1 (585) 957-2805';

  const onPrint = () => {
    if (typeof window === 'undefined') return;
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10 print:bg-white print:px-0 print:py-0">
      {/* Print Actions */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            ATS-optimized resume · Print to save as PDF
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
            >
              <FiPrinter className="text-sm" /> Print / PDF
            </button>
            <a
              href="/api/download-cv"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 text-sm font-medium transition"
            >
              <FiDownload className="text-sm" /> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-950 print:bg-white">
        {/* Header */}
        <header className="mb-8 print:mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-100">
                {name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                {title}
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <FiMapPin className="text-xs" />
                <span>{location}</span>
              </div>
            </div>
            <div className="text-sm space-y-1.5 text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <FiMail className="text-xs opacity-70" />
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
              </div>
              <div className="flex items-center gap-2">
                <FiGithub className="text-xs opacity-70" />
                <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/chantony33
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiLinkedin className="text-xs opacity-70" />
                <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/tony-chan
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiExternalLink className="text-xs opacity-70" />
                <a href={portfolio} target="_blank" rel="noreferrer" className="hover:underline">
                  tonychan.com.np
                </a>
              </div>
            </div>
          </div>
          <div className="h-px bg-neutral-200 dark:bg-neutral-800"></div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Full-stack developer specializing in AI integration and automation with 3+ years of experience building
            scalable web applications. Expert in Next.js, React, and modern JavaScript frameworks. Proven track record
            of implementing AI-powered features, automating workflows, and delivering production-ready solutions. Strong
            focus on performance optimization, user experience, and clean code architecture.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Frontend</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                React, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Backend & APIs</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Node.js, Next.js API Routes, REST APIs, Express.js, FastAPI, Python, Authentication & Authorization
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">AI & Automation</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                OpenAI API, LLM Integration, Prompt Engineering, AI Workflows, LangChain, Data Pipeline Automation
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Tools & Platforms</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Git, GitHub, Vercel, Netlify, Docker, MongoDB, Supabase, Firebase, Postman, Figma, VS Code
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-4 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Professional Experience
          </h2>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Freelance Full-Stack Developer
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">Self-Employed</p>
              </div>
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">2024 – Present</div>
            </div>
            <ul className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 ml-4 list-disc">
              <li>
                Developed and deployed 5+ production web applications using Next.js, React, and modern JavaScript
                frameworks
              </li>
              <li>
                Implemented AI-powered features including LLM integrations, automated content processing, and
                intelligent workflows
              </li>
              <li>
                Built automation systems reducing manual tasks by 40% through API integrations, webhooks, and
                scheduled processes
              </li>
              <li>
                Optimized application performance achieving 90+ Lighthouse scores and reduced load times by 35%
              </li>
              <li>
                Created responsive, mobile-first designs with accessibility compliance (WCAG 2.1 AA standards)
              </li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-4 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Key Projects
          </h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    Portfolio Website with AI-Enhanced Features
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Next.js · React · Tailwind CSS · RSS Integration · Email Automation
                  </p>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">2024</div>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 ml-4 list-disc">
                <li>
                  Built responsive portfolio with 3-panel layout, dark mode, and smooth animations using Framer Motion
                </li>
                <li>
                  Implemented RSS feed proxy with fallback handling, reducing API failures by 95% and improving UX
                  reliability
                </li>
                <li>
                  Integrated EmailJS automation for contact forms with validation, spam protection (honeypot), and
                  real-time feedback
                </li>
                <li>
                  Achieved 98 Lighthouse performance score through image optimization, code splitting, and efficient
                  caching strategies
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    Taste of Nepal Restaurant Website
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Next.js · React · Tailwind CSS · SEO Optimization
                  </p>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">2024</div>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 ml-4 list-disc">
                <li>
                  Designed and developed modern restaurant website showcasing Nepalese cuisine with culturally authentic
                  design
                </li>
                <li>
                  Implemented SEO best practices resulting in 85% improvement in search engine visibility and organic
                  traffic
                </li>
                <li>
                  Created responsive design ensuring optimal experience across all devices with 100% mobile
                  compatibility
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    ArrayWall - Cross-Platform Mobile App
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    React Native · Expo · Supabase · Cloudinary · Clerk Auth
                  </p>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">2024 – 2025</div>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 ml-4 list-disc">
                <li>
                  Developed and published cross-platform wallpaper app on both iOS App Store and Google Play Store
                </li>
                <li>
                  Implemented image caching and optimization reducing data usage by 60% and improving load times by 50%
                </li>
                <li>
                  Built tag-based discovery system and bookmark functionality with offline support for enhanced user
                  experience
                </li>
                <li>
                  Integrated secure authentication and media storage solutions handling 10,000+ images with Cloudinary
                  CDN
                </li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    AI Education Pilot Research Project
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">FastAPI · OpenAI API · LLM Integration</p>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">2025</div>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300 ml-4 list-disc">
                <li>
                  Designed and prototyped AI-powered educational assistant using FastAPI and OpenAI for learning
                  enhancement
                </li>
                <li>
                  Implemented prompt engineering and guardrails ensuring safe, accurate AI responses for educational
                  content
                </li>
                <li>
                  Created API architecture supporting content summarization, Q&A, and personalized learning
                  recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8 print:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-4 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">SUNY Brockport</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Bachelor of Science, Computer Science
                  <br />
                  Concentration: Software Development
                  <br />
                  GPA: 3.52 / 4.0
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">2024 – Present</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-4 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
                Certifications
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">freeCodeCamp</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    JavaScript Algorithms and Data Structures
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">freeCodeCamp</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Responsive Web Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Skills & Keywords for ATS */}
        <section className="print:mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Additional Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Full-Stack Development',
              'AI Integration',
              'API Development',
              'RESTful APIs',
              'Responsive Design',
              'Performance Optimization',
              'SEO',
              'Git Version Control',
              'Agile Methodologies',
              'Problem Solving',
              'Code Review',
              'Technical Documentation',
              'Cross-Platform Development',
              'Database Design',
              'Cloud Deployment',
              'CI/CD',
              'Test-Driven Development',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
