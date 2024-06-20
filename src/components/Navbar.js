import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../context/AuthContext';

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavLinks = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">
          The Big Bash
        </Title>
        <NavLinks>
          {!isAuthenticated && <Button color="inherit" component={Link} to="/login">Login</Button>}
          {!isAuthenticated && <Button color="inherit" component={Link} to="/registration">Signup</Button>}
          <Button color="inherit" component={Link} to="/events">Events</Button>
          <Button color="inherit" component={Link} to="/tickets">Tickets</Button>
          <Button color="inherit" component={Link} to="/create-event">Create Events</Button>
          {isAuthenticated && <Button color="inherit" component={Link} to="/user-profile">User Profile</Button>}
          {isAuthenticated && <Button color="inherit" onClick={logout}>Logout</Button>}
        </NavLinks>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
