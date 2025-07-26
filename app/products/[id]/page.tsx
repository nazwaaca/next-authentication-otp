'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  stock?: number;
  image?: string;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          setProduct(null);
        } else {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!product) return <p className="p-6 text-red-500">Produk tidak ditemukan.</p>;

  return (
    <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 py-9">
      <section className="bg-gray-100 max-w-4xl mx-auto px-8 py-8 rounded-2xl">
        <div className="flex justify-center py-5">
            <Image
                src='/product1.jpg'
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
            />
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-pink-600 font-bold mb-2">Rp {product.price.toLocaleString()}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-800 mb-4">Deskripsi Produk : </p>
        <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit pretium ipsum, eget feugiat justo cursus nec. Proin gravida ligula diam, semper lacinia magna sagittis vitae. Morbi eros ante, finibus et dui ut, pretium sagittis nisl. Donec ut enim malesuada nunc auctor rhoncus in a odio. Phasellus lectus dolor, consectetur in diam et, commodo facilisis diam. Nulla aliquam ornare sagittis. Fusce sed nunc eget neque consequat ultricies. Integer eget iaculis orci.</p>
        <p className="text-sm text-gray-500 mb-8">Stok: 100</p>
        <Link 
            href='https://wa.me/6285797207968'
            className="justify-center text-center mt-auto w-full inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
              Beli Sekarang
        </Link>
      </section>
    </main>
  );
}
