"use client";

import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ImageCard from "./ImageCard";

const FavoriteList: React.FC<ImageData> = () => {
  const { favorites } = useFavorites();
  const arrayFavorites = Array.from(favorites);

  return (
    <div>
      {arrayFavorites.length === 0 ? (
        <div>No favorites yet</div>
      ) : (
        <div>
          {arrayFavorites.map((favorite) => (
            <ImageCard imageData={favorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
