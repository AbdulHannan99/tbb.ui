// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllEvents from './pages/AllEvents';
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import OrganizerHome from './pages/OrganizerHome';
import Registration from './pages/Registration';
import Tickets from './pages/Tickets';
import UserProfile from './pages/UserProfile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/create-event" element={<PrivateRoute><CreateEvent /></PrivateRoute>} />
        <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/organizer-home" element={<PrivateRoute><OrganizerHome /></PrivateRoute>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
