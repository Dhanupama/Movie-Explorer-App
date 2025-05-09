import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

// This component represents the navigation bar of the application

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Movie Explorer
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
        <Switch checked={mode === 'dark'} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;