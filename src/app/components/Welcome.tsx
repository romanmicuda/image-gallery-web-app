import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div>
      <h1>My Image Gallery</h1>
      <p>
        Welcome to the gallery page where you can explore a collection of
        amazing images.
      </p>
      <Link href="/dashboard">Search Images</Link>
      <h2>About Us</h2>
      <p>
        Learn more about us and our mission to curate beautiful and inspiring
        images.
      </p>
    </div>
  );
}

export default Welcome;
