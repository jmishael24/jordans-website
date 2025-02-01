import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 bg-white shadow-md flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/about" className="text-blue-500 hover:underline">About</Link>
          <Link href="/portfolio" className="text-blue-500 hover:underline">Portfolio</Link>
          <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg text-gray-700">Showcasing my work, experience, and impact.</p>
        <Link href="/portfolio">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Portfolio
          </button>
        </Link>
      </main>
    </div>
  );
}