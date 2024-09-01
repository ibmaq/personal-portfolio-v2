import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Developer - JavaScript, React, Vue, TailwindCSS | Ibrahim",
  description:
    "Experienced Frontend Developer specializing in JavaScript, React, Vue, and TailwindCSS. Check out my portfolio!",
  openGraph: {
    title: "Frontend Developer - JavaScript, React, Vue, TailwindCSS | Ibrahim",
    description:
      "Experienced Frontend Developer specializing in JavaScript, React, Vue, and TailwindCSS. Check out my portfolio!",
    url: "https://muhammadibrahim.com",
    images: [
      {
        url: "/m_ibrahim.jpg",
        width: 800,
        height: 600,
        alt: "Ibrahim's Portfolio",
      },
    ],
  },
  twitter: {
    title: "Frontend Developer - JavaScript, React, Vue, TailwindCSS | Ibrahim",
    description:
      "Experienced Frontend Developer specializing in JavaScript, React, Vue, and TailwindCSS. Check out my portfolio!",
    image: "/m_ibrahim.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
