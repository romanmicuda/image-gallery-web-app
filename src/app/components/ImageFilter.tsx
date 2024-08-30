"use client";

import React, { useEffect, useState } from "react";
import { DataRangeType, ImageFilterProps, ResultType } from "../types";

const ImageFilter: React.FC<ImageFilterProps> = ({ applyFilter }) => {
  const [result, setResult] = useState<ResultType>(10);
  const [dataRange, setDataRange] = useState<DataRangeType | undefined>(
    undefined
  );

  const handleSetResult = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResult(parseInt(e.target.value, 10) as ResultType);
  };

  const handleDataRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataRange(e.target.value as DataRangeType | undefined);
  };

  const handleApplyFilter = () => {
    applyFilter(result, dataRange);
  };

  const handleResetFilter = () => {
    setResult(10);
    setDataRange(undefined);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <select
          value={result}
          onChange={(e) => handleSetResult(e)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <select
          value={dataRange || ""}
          onChange={(e) => handleDataRange(e)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        >
          <option value={undefined}>Any Time</option>
          <option value={"qdr:h"}>Past hour</option>
          <option value={"qdr:d"}>Past 24 hours</option>
          <option value={"qdr:w"}>Past week</option>
          <option value={"qdr:m"}>Past month</option>
          <option value={"qdr:y"}>Past year</option>
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={(e) => handleApplyFilter(e)}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Apply Filter
        </button>
        <button
          onClick={(e) => handleResetFilter(e)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default ImageFilter;
