import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('//Users/jmishael/Desktop/jordans-website/public/images/headshot1.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-xl">Designing creative and functional solutions.</p>
          <Link href="/portfolio">
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View My Work
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
