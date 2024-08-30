import React from "react";
import ImageCard from "./ImageCard";
import { ImageListProps } from "../types";

const ImageList: React.FC<ImageListProps> = ({ data, loading, error }) => {
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Failed to fetch data!</div>;
  return (
    <div>
      {data.map((imageData, index) => (
        <div key={index}>
          <ImageCard imageData={imageData} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
