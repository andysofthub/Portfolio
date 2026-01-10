import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Skills & Expertise | ${PERSONAL_INFO.name}`,
  description: `Technical skills and expertise of ${PERSONAL_INFO.name}. Proficient in Next.js, React, TypeScript, AI/ML integration, Node.js, and modern web technologies.`,
  keywords: `${PERSONAL_INFO.name}, skills, expertise, Next.js, React, TypeScript, AI integration, machine learning, full-stack development, Node.js, programming languages`,
  openGraph: {
    title: `Skills & Expertise | ${PERSONAL_INFO.name}`,
    description: `Technical skills and expertise in full-stack development, AI integration, and modern web technologies.`,
    url: `${PERSONAL_INFO.social.portfolio}/skills`,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Skills & Expertise`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Skills & Expertise | ${PERSONAL_INFO.name}`,
    description: `Technical skills and expertise in full-stack development, AI integration, and modern web technologies.`,
    images: ['/og-image.png'],
  },
};

export default function SkillsLayout({ children }) {
  return children;
}

