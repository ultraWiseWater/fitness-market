import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">🏋️ 피트니스 중고거래 플랫폼</h1>
      <p className="text-gray-600">덤벨, 러닝머신, 벤치프레스를 거래하세요!</p>

      <h2 className="mt-6 text-xl font-semibold">🔍 최신 등록 상품</h2>
      <p className="text-gray-500">현재 등록된 상품이 없습니다.</p>

      <Link href="/listing">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          🛒 상품 등록하기 →
        </button>
      </Link>
    </main>
  );
}
