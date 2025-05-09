import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    if (lastQuery) {
      setQuery(lastQuery);
      setIsSearching(true);
      fetchMovies(lastQuery, 1);
    } else {
      fetchTrending(1);
    }
  }, []);

  const fetchMovies = async (searchQuery, pageNum) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=571c350de59b748b6bdcf0130b4dcf24&query=${searchQuery}&page=${pageNum}`
      );
      const newMovies = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setHasMore(newMovies.length > 0);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchTrending = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=571c350de59b748b6bdcf0130b4dcf24&page=${pageNum}`
      );
      const newMovies = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setHasMore(newMovies.length > 0);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      setMovies([]);
      setPage(1);
      fetchTrending(1);
      localStorage.removeItem('lastQuery');
    } else {
      setIsSearching(true);
      setMovies([]);
      setPage(1);
      fetchMovies(searchQuery, 1);
      localStorage.setItem('lastQuery', searchQuery);
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    if (isSearching) {
      fetchMovies(query, page + 1);
    } else {
      fetchTrending(page + 1);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;