import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import EnjoyTheRide from "@/components/EnjoyTheRide";
import AuthProvider from "./../components/AuthProvider"
import InfoBarTop from "@/components/InfoBarTop";

export const metadata: Metadata = {
  title: "Car hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative pattern-dots pattern-slate-300 pattern-bg-white pattern-size-2 pattern-opacity-100">
        <InfoBarTop />
       
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
