"use client"; // useState를 사용하려면 필요

import { useState } from "react";

export default function Listing() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("등록된 상품:", { title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">🛒 상품 등록</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="상품명"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          등록하기
        </button>
      </form>
    </main>
  );
}
