"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductListPage() {

const [products, setProducts] = useState<Product[]>([]);
interface Product {
  id: number;
  name: string;
  price: number;
}

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-center rounded-2xl">
        <div className="min-w-full rounded-2xl overflow-hidden shadow-lg w-[400px] h-[250px]">
            <Image
            src="/bannerpromo.png"
            alt="Contoh Gambar"
            width={1100}
            height={250}
            className="object-cover"
            />
        </div>
      </div>
      <h1 className="text-3xl font-bold my-10 decoration-pink-400">Keychain Crochet</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <Image
              src="/product1.jpg"
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg object-cover mb-10 w-[300px] h-[250px]"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-pink-600 font-bold mb-2">Rp {product.price.toLocaleString()}</p>
            <p className="text-gray-600 mb-2">Lorem Ipsum</p>
            <p className="text-sm text-gray-500 mb-10">Stok: 100 </p>
            <Link
              href={`/products/${product.id}`}
              className="mt-auto inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </section>

    </main>
  );
}