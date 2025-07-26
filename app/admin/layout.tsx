// app/dashboard/layout.tsx
'use client';

import { usePathname } from "next/navigation";
import { SessionProvider } from 'next-auth/react';
import NavbarAdmin from '@/app/ui/component/navbar-admin';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/admin/signin' || pathname === '/admin/signup' || pathname === '/admin/verify';
  return (
    <SessionProvider>
      <div>
        {!isAuthPage && <NavbarAdmin />} 
        <main className="p-6">{children}</main>
      </div>
    </SessionProvider>
  );
}
