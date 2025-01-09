import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinged - Connect And Share",
  description: "Connect And Share Around The World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="bg-slate-100 h-[calc(100vh-96px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
        </div>
      </body>
    </html>
  );
}
