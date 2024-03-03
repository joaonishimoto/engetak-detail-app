import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DrawerLeft from "@/components/DrawerLeft";

import "@/app/globals.css";


export const metadata: Metadata = {
  title: "Engetak App",
  description: "created by joaonishimoto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-teal-50 min-h-screen ">
        <div className="flex items-center justify-start bg-teal-100">
          <DrawerLeft />
        </div>
        {children}
        </body>
    </html>
  );
}
