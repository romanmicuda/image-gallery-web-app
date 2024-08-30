import React from "react";
import { ImageDataCard } from "../types"; // Import ImageData if defined in a types file
import AddToFavoriteButton from "./AddToFavoriteButton";

interface ImageCardProps {
  imageData: ImageDataCard;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData }) => {
  return (
    <div>
      <img src={imageData.imageUrl} alt={imageData.title} width={200} />
      <h3>{imageData.title}</h3>
      <p>{imageData.source}</p>
      <AddToFavoriteButton imageDataCard={imageData} />
    </div>
  );
};

export default ImageCard;
