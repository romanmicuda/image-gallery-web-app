"use client";

import React, { useCallback } from "react";
import SearchBar from "../components/SearchBar";
import ImageFilter from "../components/ImageFilter";
import ImageList from "../components/ImageList";
import { DataRangeType, ResultType } from "../types";
import useFetchImage from "../hooks/useFetchImage";

function Dashboard() {
  const searchImages = useCallback((searchTerm: string) => {}, []);
  const applyFilter = useCallback(
    (resultsType: ResultType, dataRange: DataRangeType | undefined) => {},
    []
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar searchImages={searchImages} />
      <ImageFilter applyFilter={applyFilter} />
      <ImageList />
    </div>
  );
}

export default Dashboard;
