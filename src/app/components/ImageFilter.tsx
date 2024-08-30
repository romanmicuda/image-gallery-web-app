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
    <div>
      <select value={result} onChange={(e) => handleSetResult(e)}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <select value={dataRange || ""} onChange={(e) => handleDataRange(e)}>
        <option value={undefined}>Any Time</option>
        <option value={"qdr:h"}>Past hour</option>
        <option value={"qdr:d"}>Past 24 hours</option>
        <option value={"qdr:w"}>Past week</option>
        <option value={"qdr:m"}>Past month</option>
        <option value={"qdr:y"}>Past year</option>
      </select>
      <button onClick={() => handleApplyFilter()}>Apply Filter</button>
      <button onClick={() => handleResetFilter()}>Reset Filter</button>
    </div>
  );
};

export default ImageFilter;
