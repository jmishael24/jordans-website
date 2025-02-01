import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{  backgroundImage: 'url(/images/headshot1.jpg)',
    backgroundSize: 'cover', // Optional: to ensure the image covers the whole area
    backgroundPosition: 'center', // Optional: to center the image
    height: '100vh', // Optional: adjust height as needed }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl font-bold text-white">Jordan Mishael</h1>
          <p className="mt-4 text-2xl text-white">I build innovative solutions that make an impact.</p>
          <Link href="/portfolio">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              View My Work
            </button>
          </Link>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-xl text-gray-700">
          I'm a passionate product consultant focused on creating impactful digital experiences.
        </p>
      </section>
    </div>
  );
}
