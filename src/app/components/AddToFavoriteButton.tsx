"use client";

import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { ImageDataCard } from "../types";

const AddToFavoriteButton: React.FC<{ imageDataCard: ImageDataCard }> = ({
  imageDataCard,
}) => {
  const { favorites, toggleToFavorites } = useFavorites();

  return (
    <div>
      <button
        onClick={() => toggleToFavorites(imageDataCard)}
        className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        {favorites.has(imageDataCard) ? "Remove Favorite" : "Add To Favorite"}
      </button>
    </div>
  );
};

export default AddToFavoriteButton;
