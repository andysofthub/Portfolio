import { redirect } from 'next/navigation';

export default function HomePage() {
  // In development, redirect to resume. In production, redirect to skills or contact
  if (process.env.NODE_ENV === 'development') {
    redirect('/resume');
  } else {
    redirect('/skills');
  }
}