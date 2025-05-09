import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// This component represents the login page where users can enter their credentials
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // This function is called when the user clicks the login button
  const handleLogin = () => {
    localStorage.setItem('username', username);
    navigate('/');
  };
// This function stores the username in localStorage and navigates to the home page
  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;