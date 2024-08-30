"use client";

import React, { useCallback } from "react";
import SearchBar from "../components/SearchBar";
import ImageFilter from "../components/ImageFilter";
import ImageList from "../components/ImageList";

function Dashboard() {
  const searchImages = useCallback((searchTerm: string) => {}, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar searchImages={searchImages} />
      <ImageFilter />
      <ImageList />
    </div>
  );
}

export default Dashboard;
