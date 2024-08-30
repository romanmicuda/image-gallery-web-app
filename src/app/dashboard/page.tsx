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
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
      <div className="mb-6">
        <SearchBar searchImages={searchImages} />
      </div>
      <div className="mb-6">
        <ImageFilter applyFilter={applyFilter} />
      </div>
      <ImageList data={data} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
