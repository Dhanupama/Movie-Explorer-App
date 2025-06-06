import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

// This context will manage the favorites list

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (movieId) => {
    const newFavorites = favorites.filter((fav) => fav.id !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

  };

  // Check if a movie is in the favorites list

  const isFavorite = (movieId) => favorites.some((fav) => fav.id === movieId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};