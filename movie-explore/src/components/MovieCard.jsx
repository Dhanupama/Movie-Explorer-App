import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// This component represents a single movie card
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { title, release_date, poster_path, vote_average } = movie;
  const year = release_date ? release_date.split('-')[0] : 'N/A';
  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';

  // The posterUrl is constructed using the base URL and the poster_path from the movie object
  return (
    <Card onClick={() => navigate(`/movie/${movie.id}`)}>
      <CardMedia component="img" height="300" image={posterUrl} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{year}</Typography>
        <Typography variant="subtitle2">Rating: {vote_average}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;