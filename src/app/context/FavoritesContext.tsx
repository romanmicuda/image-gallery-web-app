"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { ImageDataCard } from "../types";

interface FavoritesContextType {
  favorites: Set<ImageDataCard>;
  toggleToFavorites: (image: ImageDataCard) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Set<ImageDataCard>>(new Set());

  const toggleToFavorites = (image: ImageDataCard) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(image)) {
        newFavorites.delete(image);
      } else {
        newFavorites.add(image);
      }
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
