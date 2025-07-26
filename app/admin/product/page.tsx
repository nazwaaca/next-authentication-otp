"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editId, setEditId] = useState<number | null>(null);
  

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = JSON.stringify({
      ...(editId ? { id: editId } : {}),
      name: form.name,
      price: Number(form.price),
    });

    await fetch("/api/products", {
      method: editId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    setForm({ name: "", price: "" });
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditId(product.id);
    setForm({ name: product.name, price: String(product.price) });
  };

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6 ">

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name">Nama Produk</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Harga</Label>
              <Input
                id="price"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
            </div>
            <div className="flex items-end gap-2">
              <Button type="submit" className="w-full bg-pink-500">
                {editId ? "Update" : "Tambah"}
              </Button>
              {editId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditId(null);
                    setForm({ name: "", price: "" });
                  }}
                >
                  Batal
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, idx) => (
                <TableRow key={product.id}>
                  <TableCell>{idx+1}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>Rp {product.price.toLocaleString()}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
