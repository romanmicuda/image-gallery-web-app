import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="bg-primary text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-gray-200 transition">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className="hover:text-gray-200 transition"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
