import React from "react";
import { ImageDataCard } from "../types"; // Import ImageData if defined in a types file

interface ImageCardProps {
  imageData: ImageDataCard;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData }) => {
  return (
    <div>
      <img src={imageData.imageUrl} alt={imageData.title} />
      <h3>{imageData.title}</h3>
      <p>{imageData.source}</p>
    </div>
  );
};

export default ImageCard;
