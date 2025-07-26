import Image from 'next/image';
export default function Hero() {
  return (
    
    <section
      id="top"
      className="min-h-screen pb-6 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="flex-1 space-y-6 max-w-xl">
          <h6 className="text-pink-500 font-semibold text-xl">CrochetCute Shop</h6>
          <h1 className="text-4xl md:text-5xl font-bold">
            Tempat Terbaik Untuk Produk Rajut
          </h1>
          <p className="text-lg text-gray-600">
            Toko rajutan handmade dengan sentuhan cinta dan warna pastel. Temukan boneka amigurumi, pouch, tas, dan aksesoris lucu lainnya!
          </p>
          <a
            href="/products"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Jelajahi Semua yang lucu disini
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/logo.png"
            alt="Hero"
            width={400}
            height={400}
            priority
            className="rounded-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}
