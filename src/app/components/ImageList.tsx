import React from "react";
import ImageCard from "./ImageCard";
import { ImageListProps } from "../types";

const ImageList: React.FC<ImageListProps> = ({ data, loading, error }) => {
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Failed to fetch data!</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((imageData, index) => (
        <ImageCard key={index} imageData={imageData} />
      ))}
    </div>
  );
};

export default ImageList;
