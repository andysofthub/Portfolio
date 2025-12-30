// app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import LeftPannel from "./components/leftPannel";
import Nav from "./components/Nav";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/next";
import { PERSONAL_INFO } from "./constants/personalInfo";
import { StructuredData } from "./components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: `${PERSONAL_INFO.title} based in ${PERSONAL_INFO.location}. Specializing in full-stack development, AI integration, and automation. Building scalable web applications with Next.js, React, and modern technologies.`,
  keywords: `${PERSONAL_INFO.name}, ${PERSONAL_INFO.title}, full-stack developer, AI integration, automation, Next.js, React, TypeScript, software developer, ${PERSONAL_INFO.location}, portfolio`,
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yubrajkhatri.com.np',
    siteName: `${PERSONAL_INFO.name} - Portfolio`,
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: `${PERSONAL_INFO.title} specializing in full-stack development, AI integration, and automation.`,
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
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: `${PERSONAL_INFO.title} specializing in full-stack development, AI integration, and automation.`,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/cyberhead.png" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Providers>
          <div className="flex lg:h-screen overflow-hidden w-full flex-col lg:flex-row">
            {/* LEFT PANEL */}
            <div className="overflow-hidden lg:w-[23%] w-full z-50 bg-white dark:bg-[#0f0f0f] border-r border-neutral-200 dark:border-neutral-800">
              <LeftPannel />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-scroll no-scrollbar w-full h-full bg-white dark:bg-[#0f0f0f]">
              {/* Nav now starts flush at top */}
              <Nav />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
