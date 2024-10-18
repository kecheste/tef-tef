"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selected, setSelected] = useState("findJobs");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header selected={selected} handleSelect={handleSelect} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
