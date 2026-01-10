import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Projects | ${PERSONAL_INFO.name}`,
  description: `Portfolio of projects by ${PERSONAL_INFO.name}. Showcasing full-stack web applications, AI-powered solutions, mobile apps, and automation projects.`,
  keywords: `${PERSONAL_INFO.name}, projects, portfolio, web development, AI projects, full-stack applications, React, Next.js, mobile apps, software projects`,
  openGraph: {
    title: `Projects | ${PERSONAL_INFO.name}`,
    description: `Portfolio of full-stack web applications, AI-powered solutions, and automation projects.`,
    url: `${PERSONAL_INFO.social.portfolio}/projects`,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Projects Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${PERSONAL_INFO.name}`,
    description: `Portfolio of full-stack web applications, AI-powered solutions, and automation projects.`,
    images: ['/og-image.png'],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}

