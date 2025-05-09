import React, { useContext } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { FavoritesContext } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Typography variant="h4">My Favorites</Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1">You have no favorite movies yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;