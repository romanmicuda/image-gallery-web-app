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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => handleSearchImages(searchTerm)}>Search</button>
    </div>
  );
};

export default SearchBar;
