import { PERSONAL_INFO } from '../constants/personalInfo';

export const metadata = {
  title: `Testimonials | ${PERSONAL_INFO.name}`,
  description: `Read what clients, colleagues, and collaborators say about working with ${PERSONAL_INFO.name} on software development projects.`,
  keywords: `testimonials, reviews, recommendations, client feedback, software developer, ${PERSONAL_INFO.name}`,
  openGraph: {
    title: `Testimonials | ${PERSONAL_INFO.name}`,
    description: `Read what clients, colleagues, and collaborators say about working with ${PERSONAL_INFO.name}.`,
    url: `${PERSONAL_INFO.social.portfolio}/testimonials`,
  }
};

export default function TestimonialsLayout({ children }) {
  return children;
}