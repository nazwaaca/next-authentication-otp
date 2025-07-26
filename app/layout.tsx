'use client'
import './globals.css';

import { usePathname } from "next/navigation";
import Navbar from './ui/component/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <html lang="en">
      <body className="font-poppins bg-gray-50 text-gray-800">
        {!isAdmin && <Navbar />} 
        {children}
      </body>
    </html>
  );
}