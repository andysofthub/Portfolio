// app/layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import LeftPannel from "./components/leftPannel";
import Nav from "./components/Nav";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/next";
import { PERSONAL_INFO } from "./constants/personalInfo";

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
  title: PERSONAL_INFO.name,
  description: "Creator of the software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/cyberhead.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
