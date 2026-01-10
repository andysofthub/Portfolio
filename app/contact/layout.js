import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Contact | ${PERSONAL_INFO.name}`,
  description: `Get in touch with ${PERSONAL_INFO.name} for collaborations, freelance projects, or just to say hello. Available for software development opportunities.`,
  keywords: `contact, freelance, software developer, collaboration, hire, ${PERSONAL_INFO.name}`,
  openGraph: {
    title: `Contact | ${PERSONAL_INFO.name}`,
    description: `Get in touch with ${PERSONAL_INFO.name} for collaborations, freelance projects, or just to say hello.`,
    url: `${PERSONAL_INFO.social.portfolio}/contact`,
  }
};

export default function ContactLayout({ children }) {
  return children;
}