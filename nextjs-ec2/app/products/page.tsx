"use client";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "High-quality wireless over-ear headphones with noise cancellation.",
    price: "$120",
    imageUrl: "/headphones.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Vintage Leather Jacket",
    description: "Stylish vintage black leather jacket for casual wear.",
    price: "$250",
    imageUrl: "/leather-jacket.jpg",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Smart Watch",
    description:
      "Waterproof smart watch with fitness tracking and notifications.",
    price: "$180",
    imageUrl: "/smartwatch.jpg",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Espresso Coffee Maker",
    description: "Compact espresso machine for rich and creamy coffee at home.",
    price: "$90",
    imageUrl: "/espresso.jpg",
    category: "Home Appliances",
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Eco-friendly non-slip yoga mat for all types of exercises.",
    price: "$35",
    imageUrl: "/yoga-mat.jpg",
    category: "Fitness",
  },
  {
    id: 6,
    name: "Men's Running Shoes",
    description:
      "Breathable & lightweight running shoes with good arch support.",
    price: "$85",
    imageUrl: "/running-shoes.jpg",
    category: "Footwear",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with crisp sound and long battery life.",
    price: "$65",
    imageUrl: "/speaker.jpg",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Ceramic Vase",
    description: "Beautiful ceramic vase perfect for home decoration.",
    price: "$45",
    imageUrl: "/vase.jpg",
    category: "Home Decor",
  },
];

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home Appliances",
  "Fitness",
  "Footwear",
  "Home Decor",
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer mb-3 px-3 py-2 rounded ${
                selectedCategory === cat
                  ? "bg-gray-700 font-semibold"
                  : "hover:bg-gray-700"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Products</h1>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(
              ({ id, name, description, price, imageUrl }) => (
                <div
                  key={id}
                  className="border border-gray-700 rounded p-4 shadow-sm hover:shadow-md transition-shadow bg-gray-800"
                >
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <p className="mt-2 text-gray-300">{description}</p>
                  <p className="mt-4 font-bold text-lg">{price}</p>
                </div>
              )
            )
          ) : (
            <p className="text-gray-400 col-span-full">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
