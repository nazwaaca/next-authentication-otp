'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navLinks = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Products', href: '/admin/product' },
  { name: 'Monitor Stok', href: '/admin/monitor-stock' },
];

export default function NavbarAdmin() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/profile.jpeg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-lg text-pink-500">Management Produk dan Stock</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex gap-14 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? 'text-white font-semibold bg-pink-500 px-6 py-2 rounded-xl'
                      : 'hover:text-pink-500'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => signOut({ callbackUrl: '/admin/signin' })}
            className="text-white font-semibold bg-red-600 px-6 py-2 rounded-xl hover:bg-pink-600 transition-colors">
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
}
