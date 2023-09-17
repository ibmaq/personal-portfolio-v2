import "./globals.css";
import { Inter } from "next/font/google";
import { CursorProvider } from "./CursorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Ibrahim - Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
