import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahan Ali",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
