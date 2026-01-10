import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Tech Stack | ${PERSONAL_INFO.name}`,
  description: `Explore the technologies, frameworks, and tools that ${PERSONAL_INFO.name} uses for software development including React, Next.js, Python, and more.`,
  keywords: `tech stack, technologies, programming languages, frameworks, React, Next.js, Python, JavaScript, software development, ${PERSONAL_INFO.name}`,
  openGraph: {
    title: `Tech Stack | ${PERSONAL_INFO.name}`,
    description: `Explore the technologies, frameworks, and tools that ${PERSONAL_INFO.name} uses for software development.`,
    url: `${PERSONAL_INFO.social.portfolio}/stack`,
  }
};

export default function StackLayout({ children }) {
  return children;
}