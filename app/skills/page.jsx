'use client';

import React from 'react';
import {
  FiCode,
  FiCpu,
  FiZap,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiLayers,
  FiTool,
  FiTrendingUp,
  FiCheck,
  FiBox,
  FiServer,
  FiGlobe,
  FiPackage,
  FiTerminal,
  FiSettings,
  FiLock,
  FiMonitor,
  FiFileText,
  FiGitBranch,
  FiActivity,
  FiAward,
  FiTarget,
  FiUsers,
  FiBook,
} from 'react-icons/fi';

// 스킬 이름에 맞는 아이콘 매핑
const getSkillIcon = (skillName) => {
  const iconMap = {
    // Frameworks & Libraries
    'Next.js': FiBox,
    'React': FiCode,
    'TypeScript': FiCode,
    'JavaScript (ES6+)': FiCode,
    'Node.js': FiServer,
    'Express.js': FiServer,
    'React Native': FiSmartphone,
    'Expo': FiSmartphone,
    'Framer Motion': FiZap,
    'Tailwind CSS': FiMonitor,
    'HTML5 / CSS3': FiCode,
    
    // AI & ML
    'OpenAI API': FiCpu,
    'LLM Integration': FiCpu,
    'Prompt Engineering': FiCpu,
    'AI Workflows': FiZap,
    'LangChain': FiCpu,
    'Data Pipeline Automation': FiActivity,
    'FastAPI': FiServer,
    'Python': FiCode,
    
    // APIs & Services
    'REST APIs': FiGlobe,
    'Next.js API Routes': FiServer,
    'Authentication & Authorization': FiLock,
    
    // Mobile
    'iOS Development': FiSmartphone,
    'Android Development': FiSmartphone,
    'App Store Publishing': FiPackage,
    
    // Tools & Platforms
    'Git / GitHub': FiGitBranch,
    'Vercel': FiCloud,
    'Netlify': FiCloud,
    'Docker': FiPackage,
    'MongoDB': FiDatabase,
    'Supabase': FiDatabase,
    'Firebase': FiCloud,
    'VS Code': FiCode,
    'Figma': FiTool,
    
    // General
    'Responsive Design': FiMonitor,
    'Accessibility (WCAG)': FiAward,
    'Database Design': FiDatabase,
  };
  
  // 부분 매칭으로 찾기
  for (const [key, icon] of Object.entries(iconMap)) {
    if (skillName.includes(key) || key.includes(skillName)) {
      return icon;
    }
  }
  
  // 기본 아이콘
  return FiTool;
};

const skillCategories = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    icon: FiLayers,
    description: 'End-to-end web application development',
    skills: [
      { name: 'Next.js', highlight: true, level: 92, years: 5 },
      { name: 'React', highlight: true, level: 95, years: 7 },
      { name: 'TypeScript', highlight: true, level: 88, years: 5 },
      { name: 'JavaScript (ES6+)', highlight: true, level: 95, years: 7 },
      { name: 'Node.js', highlight: true, level: 90, years: 6 },
      { name: 'Express.js', highlight: true, level: 85, years: 5 },
      { name: 'REST APIs', highlight: true, level: 92, years: 6 },
      { name: 'HTML5 / CSS3', highlight: true, level: 95, years: 7 },
      { name: 'Tailwind CSS', highlight: true, level: 90, years: 4 },
      { name: 'Framer Motion', level: 80, years: 3 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: FiCpu,
    description: 'AI integration and automation specialist',
    skills: [
      { name: 'OpenAI API', highlight: true, level: 90, years: 3 },
      { name: 'LLM Integration', highlight: true, level: 88, years: 3 },
      { name: 'Prompt Engineering', highlight: true, level: 90, years: 2.5 },
      { name: 'AI Workflows', highlight: true, level: 88, years: 3 },
      { name: 'LangChain', highlight: true, level: 85, years: 2.5 },
      { name: 'Data Pipeline Automation', highlight: true, level: 85, years: 3 },
      { name: 'FastAPI', highlight: true, level: 80, years: 2.5 },
      { name: 'Python', level: 85, years: 4 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    icon: FiCode,
    description: 'Modern UI/UX development',
    skills: [
      { name: 'React', highlight: true, level: 95, years: 7 },
      { name: 'Next.js (App Router)', highlight: true, level: 92, years: 5 },
      { name: 'TypeScript', highlight: true, level: 88, years: 5 },
      { name: 'Tailwind CSS', highlight: true, level: 90, years: 4 },
      { name: 'Framer Motion', highlight: true, level: 80, years: 3 },
      { name: 'Responsive Design', highlight: true, level: 95, years: 7 },
      { name: 'Accessibility (WCAG)', level: 75, years: 3 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: FiDatabase,
    description: 'Server-side development and API design',
    skills: [
      { name: 'Node.js', highlight: true, level: 90, years: 6 },
      { name: 'Next.js API Routes', highlight: true, level: 92, years: 5 },
      { name: 'Express.js', highlight: true, level: 85, years: 5 },
      { name: 'FastAPI', highlight: true, level: 80, years: 2.5 },
      { name: 'REST APIs', highlight: true, level: 92, years: 6 },
      { name: 'Authentication & Authorization', highlight: true, level: 88, years: 5 },
      { name: 'Database Design', level: 80, years: 4 },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: FiSmartphone,
    description: 'Cross-platform mobile applications',
    skills: [
      { name: 'React Native', highlight: true, level: 85, years: 4 },
      { name: 'Expo', highlight: true, level: 88, years: 4 },
      { name: 'iOS Development', highlight: true, level: 75, years: 3 },
      { name: 'Android Development', highlight: true, level: 75, years: 3 },
      { name: 'App Store Publishing', level: 70, years: 2 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: FiTool,
    description: 'Development tools and cloud platforms',
    skills: [
      { name: 'Git / GitHub', highlight: true, level: 92, years: 7 },
      { name: 'Vercel', highlight: true, level: 95, years: 5 },
      { name: 'Netlify', highlight: true, level: 88, years: 4 },
      { name: 'Docker', highlight: true, level: 75, years: 3 },
      { name: 'MongoDB', highlight: true, level: 80, years: 4 },
      { name: 'Supabase', highlight: true, level: 85, years: 3 },
      { name: 'Firebase', highlight: true, level: 80, years: 3 },
      { name: 'VS Code', highlight: true, level: 95, years: 7 },
      { name: 'Figma', level: 75, years: 3 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/20 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
        </header>

        {/* Skills Sections - Vertical Layout */}
        <div className="space-y-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;
            
            return (
              <section
                key={category.id}
                className={`relative overflow-hidden rounded-3xl border ${
                  isEven 
                    ? 'bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/30 dark:to-purple-950/20 border-blue-200/50 dark:border-blue-800/30' 
                    : 'bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/30'
                }`}
              >
                <div className="p-8 md:p-10">
                  {/* Section Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl shadow-lg ${
                        isEven 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-600'
                      } text-white`}>
                        <Icon className="text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                          {category.title}
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill.name);
                      const level = skill.level || 0;
                      const years = skill.years || 0;
                      
                      return (
                        <div
                          key={skillIndex}
                          className={`
                            group relative flex flex-col gap-2 px-4 py-3 rounded-xl font-medium text-sm
                            bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 
                            border border-neutral-300 dark:border-neutral-700 
                            hover:border-blue-400 dark:hover:border-blue-600 
                            hover:bg-blue-50 dark:hover:bg-blue-950/20
                            transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md
                            min-w-[160px]
                            ${isEven 
                              ? 'hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20' 
                              : 'hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2">
                            <SkillIcon className={`text-base flex-shrink-0 ${
                              isEven 
                                ? 'text-blue-600 dark:text-blue-400' 
                                : 'text-purple-600 dark:text-purple-400'
                            }`} />
                            <span className="font-semibold">{skill.name}</span>
                          </div>
                          {level > 0 && (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-neutral-500 dark:text-neutral-400">Proficiency</span>
                                <span className="font-semibold text-neutral-700 dark:text-neutral-300">{level}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    isEven 
                                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                                      : 'bg-gradient-to-r from-purple-500 to-pink-600'
                                  }`}
                                  style={{ width: `${level}%` }}
                                />
                              </div>
                              {years > 0 && (
                                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                  {years} {years === 1 ? 'year' : 'years'} experience
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-purple-50/30 dark:from-orange-950/30 dark:via-pink-950/20 dark:to-purple-950/20 border border-orange-200/50 dark:border-orange-800/30">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-lg">
                <FiTrendingUp className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  Additional Expertise
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Complementary skills and methodologies
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
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
              ].map((skill, index) => {
                const SkillIcon = getSkillIcon(skill);
                return (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-sm font-medium border border-neutral-300 dark:border-neutral-700 hover:border-orange-400 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
                  >
                    <SkillIcon className="text-base text-orange-600 dark:text-orange-400 flex-shrink-0" />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
