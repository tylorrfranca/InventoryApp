import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Mate_SC } from "next/font/google";
import Footer from "./components/Footer"
import  Header  from "./components/Header";
import LoginHeader from "./components/LogInHeader"


const mateSC = Mate_SC({
  subsets: ["latin"],
  weight: ["400"], // Adjust the weights according to your needs
  variable: "--mate-sc",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory App",
  description: "Made by Tylor Franca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex relative flex-col w-screen min-h-screen overflow-x-hidden`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
