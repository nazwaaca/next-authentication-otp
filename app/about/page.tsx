import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-4 pt-12 pb-6">
      <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/thumbnail.jpg" 
            alt="Tentang Kami"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Tentang Kami</h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Kami adalah pengrajin produk crochet handmade yang mengutamakan detail, kualitas, dan cinta dalam setiap jahitan. Setiap produk dibuat secara manual, menjadikannya unik dan penuh makna.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Mulai dari boneka rajut lucu hingga pouch dan gantungan kunci, kami ingin menghadirkan kehangatan lewat karya kecil yang bisa kamu bawa ke mana pun. Kami juga menerima pesanan custom sesuai permintaan.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Terima kasih telah mendukung karya lokal dan UMKM kreatif 💖
          </p>
        </div>
      </div>
      </section>

    </main>
  );
}
