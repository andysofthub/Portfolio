import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Blogs | ${PERSONAL_INFO.name}`,
  description: `Read insightful blogs by ${PERSONAL_INFO.name} on software development, technology trends, and programming tutorials.`,
  keywords: `blog, programming, software development, technology, tutorials, ${PERSONAL_INFO.name}`,
  openGraph: {
    title: `Blogs | ${PERSONAL_INFO.name}`,
    description: `Read insightful blogs by ${PERSONAL_INFO.name} on software development, technology trends, and programming tutorials.`,
    url: `${PERSONAL_INFO.social.portfolio}/blogs`,
  }
};

export default function BlogsLayout({ children }) {
  return children;
}