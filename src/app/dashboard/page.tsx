"use client";

import React from "react";
import SearchBar from "../components/SearchBar";
import ImageFilter from "../components/ImageFilter";
import ImageList from "../components/ImageList";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar />
      <ImageFilter />
      <ImageList />
    </div>
  );
}

export default Dashboard;
