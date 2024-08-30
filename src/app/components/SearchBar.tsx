"use client";

import React, { useState } from "react";
import { SearchBarProps } from "../types";

const SearchBar: React.FC<SearchBarProps> = ({ searchImages }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchImages = (searchTerm: string) => {
    searchImages(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="flex items-center space-x-4 my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        placeholder="Search images..."
      />
      <button
        onClick={() => handleSearchImages(searchTerm)}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
