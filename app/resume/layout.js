import { PERSONAL_INFO } from "../constants/personalInfo";

export const metadata = {
  title: `Resume | ${PERSONAL_INFO.name}`,
  description:
    `Resume for ${PERSONAL_INFO.name} - Software Developer. Education, skills, and background information.`,
  keywords:
    "resume, software developer, computer science, SUNY Brockport, Nepal, programming",
  openGraph: {
    title: `Resume | ${PERSONAL_INFO.name}`,
    description: `Resume for ${PERSONAL_INFO.name} - Software Developer.`,
    url: `${PERSONAL_INFO.social.portfolio}/resume`,
  },
};

export default function ResumeLayout({ children }) {
  return children;
}


