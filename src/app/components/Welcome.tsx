import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div className="text-center p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-primary mb-4">My Image Gallery</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to the gallery page where you can explore a collection of
        amazing images.
      </p>
      <Link href="/dashboard">
        <p className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition">
          Search Images
        </p>
      </Link>
      <h2 className="text-2xl font-semibold text-primary mt-8">About Us</h2>
      <p className="text-gray-700 mt-2">
        Learn more about us and our mission to curate beautiful and inspiring
        images.
      </p>
    </div>
  );
}

export default Welcome;
