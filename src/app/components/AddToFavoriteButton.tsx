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
      <button onClick={() => toggleToFavorites(imageDataCard)}>
        {favorites.has(imageDataCard) ? "Remove Favorite" : "Add To Favorite"}
      </button>
    </div>
  );
};

export default AddToFavoriteButton;
