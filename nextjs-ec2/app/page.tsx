import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <section className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Welcome to the Future of Interfaces
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          This interface combines sleek, modern design with advanced animation
          and dark mode elegance. Experience smooth transitions and expertly
          crafted UI components.
        </p>
        <button className="px-7 py-3 bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 hover:from-purple-600 hover:via-pink-700 hover:to-red-600 transition rounded-full text-white font-semibold shadow-lg">
          Explore More
        </button>

        <h2>env = {process.env.TEST || "not found"}</h2>
      </section>
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Dynamic Animations",
            desc: "Smooth and responsive animations that adapt seamlessly to user interactions.",
            icon: "⚡️",
          },
          {
            title: "Dark Mode Mastery",
            desc: "Designed primarily for dark themes that are easy on the eyes and look stunning.",
            icon: "🌙",
          },
          {
            title: "Fully Responsive",
            desc: "Layouts that look amazing on all devices, large or small.",
            icon: "📱",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
