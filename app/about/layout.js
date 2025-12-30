import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `About | ${PERSONAL_INFO.name}`,
  description: `Learn more about ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title} based in ${PERSONAL_INFO.location}. Specializing in full-stack development, AI integration, and automation.`,
  keywords: `${PERSONAL_INFO.name}, full-stack developer, AI integration, automation, Next.js, React, TypeScript, software developer, ${PERSONAL_INFO.location}`,
  openGraph: {
    title: `About | ${PERSONAL_INFO.name}`,
    description: `${PERSONAL_INFO.title} specializing in full-stack development, AI integration, and automation.`,
    url: `https://yubrajkhatri.com.np/about`,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${PERSONAL_INFO.name}`,
    description: `${PERSONAL_INFO.title} specializing in full-stack development, AI integration, and automation.`,
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({ children }) {
  return children;
}

