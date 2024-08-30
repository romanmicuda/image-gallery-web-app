"use client";

import React, { useCallback, useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageFilter from "../components/ImageFilter";
import ImageList from "../components/ImageList";
import { DataRangeType, ResultType } from "../types";
import useFetchImage from "../hooks/useFetchImage";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resultsType, setResultsType] = useState<ResultType>(10);
  const [dataRange, setDataRange] = useState<DataRangeType | undefined>(
    undefined
  );
  const { data, loading, error } = useFetchImage(
    searchTerm,
    resultsType,
    dataRange
  );

  // Update search term state when search is performed
  const searchImages = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  // Update results type and data range state when filter is applied
  const applyFilter = useCallback(
    (resultsType: ResultType, dataRange: DataRangeType | undefined) => {
      setResultsType(resultsType);
      setDataRange(dataRange);
    },
    []
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar searchImages={searchImages} />
      <ImageFilter applyFilter={applyFilter} />
      <ImageList data={data} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
