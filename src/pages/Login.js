import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, TextField, Box, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, authError } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(email, password, rememberMe);
    if (!authError) {
      navigate('/');
    }
  };

  return (
    <Container>
      <Typography variant="h3">Login Page</Typography>
      {authError && <Alert severity="error">{authError}</Alert>}
      <Box component="form" onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <FormControlLabel
          control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
          label="Remember Me"
        />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </Box>
    </Container>
  );
};

export default Login;
