"use client";

import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ImageCard from "./ImageCard";

const FavoriteList: React.FC<ImageData> = () => {
  const { favorites } = useFavorites();
  const arrayFavorites = Array.from(favorites);

  return (
    <div className="p-4">
      {arrayFavorites.length === 0 ? (
        <div className="text-center py-4 text-gray-700">No favorites yet</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {arrayFavorites.map((favorite, index) => (
            <ImageCard key={index} imageData={favorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
