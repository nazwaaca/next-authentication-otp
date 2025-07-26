'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function NavbarUser() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-10">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg text-pink-500">CrochetCute</span>
        </Link>
        <ul className="flex gap-20 font-medium me-20">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-white font-semibold bg-pink-500 p-3 px-10 rounded-2xl'
                    : 'hover:text-pink-500'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}