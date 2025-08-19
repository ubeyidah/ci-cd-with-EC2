import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col p-10">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          About Our Vision
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl">
          We believe that UI is an art and science. Our designs utilize the best
          in modern technologies to produce interfaces that are not only
          beautiful but intuitive and performant.
        </p>
      </header>
      <section className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 bg-gradient-to-tr from-green-600 to-blue-600 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Innovative Design</h2>
          <p className="text-gray-100">
            Our designs push the boundaries with elegant details,
            microinteractions, and seamless usability.
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-tr from-purple-700 via-pink-700 to-red-700 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Cutting-edge Tech</h2>
          <p className="text-gray-100">
            Leveraging Next.js, TypeScript, and TailwindCSS, we build interfaces
            that are scalable and maintainable.
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-tr from-yellow-500 via-orange-500 to-red-500 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">User-first Approach</h2>
          <p className="text-gray-100">
            We prioritize accessibility, performance, and user experience for
            all users.
          </p>
        </div>
      </section>
    </main>
  );
}
