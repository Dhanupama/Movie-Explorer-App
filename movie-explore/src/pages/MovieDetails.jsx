import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import { FavoritesContext } from '../contexts/FavoritesContext';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=571c350de59b748b6bdcf0130b4dcf24&append_to_response=videos,credits`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <Typography variant="h6">Movie not found</Typography>;
  }

  const { title, overview, genres, release_date, vote_average, videos, credits } = movie;
  const trailer = videos.results.find((video) => video.type === 'Trailer');
  const cast = credits.cast.slice(0, 5);

  const handleFavorite = () => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Container>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">Release Date: {release_date}</Typography>
      <Typography variant="subtitle1">Rating: {vote_average}</Typography>
      <Typography variant="body1">{overview}</Typography>
      <Typography variant="h6">Genres: {genres.map((g) => g.name).join(', ')}</Typography>
      <Typography variant="h6">Cast: {cast.map((c) => c.name).join(', ')}</Typography>
      {trailer && (
        <div>
          <Typography variant="h6">Trailer:</Typography>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <Button variant="contained" onClick={handleFavorite}>
        {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </Button>
    </Container>
  );
};

export default MovieDetails;