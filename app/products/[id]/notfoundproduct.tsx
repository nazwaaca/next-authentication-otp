// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-violet-100">
      <div className="text-[7rem] animate-bounce select-none">🦄</div>
      <h1 className="mt-2 text-4xl font-extrabold text-pink-600 drop-shadow-lg">
        Produk Tidak Ditemukan !
      </h1>
      <p className="mt-2 text-lg text-gray-700 text-center max-w-md">
        Waduh, kamu menemukan unicorn yang tersesat!<br />
        Sepertinya produk yang kamu cari tidak ada di dunia nyata.
      </p>
      <div className="mt-6">
        <svg width="180" height="80" viewBox="0 0 180 80" fill="none">
          <ellipse cx="90" cy="70" rx="70" ry="10" fill="#fde68a" />
          <circle cx="60" cy="50" r="18" fill="#f472b6" />
          <circle cx="120" cy="50" r="18" fill="#f472b6" />
          <ellipse cx="90" cy="60" rx="10" ry="5" fill="#fff" />
          <ellipse cx="85" cy="58" rx="2" ry="1" fill="#000" />
          <ellipse cx="95" cy="58" rx="2" ry="1" fill="#000" />
        </svg>
        <p className="text-xs text-gray-400 text-center mt-1">Unicorn-nya juga bingung...</p>
      </div>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-200 active:scale-95"
      >
        🚀 Kembali ke Beranda
      </Link>
      <p className="mt-10 text-sm text-gray-500 italic">
        (Atau coba refresh browser, siapa tahu unicorn-nya balik ke kandang!)
      </p>
    </main>
  );
}