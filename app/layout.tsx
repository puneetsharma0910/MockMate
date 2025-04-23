import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MockMate",
  description: "MockMate - AI-Powered Mockup Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased pattern`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}