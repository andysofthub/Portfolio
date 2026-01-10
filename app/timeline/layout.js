import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Timeline | ${PERSONAL_INFO.name}`,
  description: `Explore ${PERSONAL_INFO.name}'s journey from first line of code to current projects and future goals in software development.`,
  keywords: `timeline, journey, career, software development, milestones, programming journey, ${PERSONAL_INFO.name}`,
  openGraph: {
    title: `Timeline | ${PERSONAL_INFO.name}`,
    description: `Explore ${PERSONAL_INFO.name}'s journey from first line of code to current projects and future goals.`,
    url: `${PERSONAL_INFO.social.portfolio}/timeline`,
  }
};

export default function TimelineLayout({ children }) {
  return children;
}