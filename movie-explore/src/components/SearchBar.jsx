import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

// This component represents a search bar where users can input their search query
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  // This function is called when the user clicks the search button

  return (
    <div>
      <TextField
        label="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;