import React from "react";
import { ImageDataCard } from "../types"; // Import ImageData if defined in a types file
import AddToFavoriteButton from "./AddToFavoriteButton";

interface ImageCardProps {
  imageData: ImageDataCard;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-md transition">
      <img
        src={imageData.imageUrl}
        alt={imageData.title}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-primary mb-1">
          {imageData.title}
        </h3>
        <p className="text-gray-600">{imageData.source}</p>
      </div>
      <AddToFavoriteButton imageDataCard={imageData} />
    </div>
  );
};

export default ImageCard;
