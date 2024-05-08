import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import decode from 'jwt-decode';

import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/d.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(null); // Initialize user state as null
  const dispatch = useDispatch(); // Use the useDispatch hook
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userProfile = JSON.parse(localStorage.getItem('profile'));
      if (userProfile?.token) {
        try {
          const decodedToken = decode(userProfile.token);
          setUser(decodedToken);
        } catch (error) {
          console.error('Error decoding token:', error);
          // Handle the error, e.g., display an error message to the user
        }
      } else {
        setUser(null);
      }
    };

    fetchUserFromLocalStorage();
  }, [location]); // Trigger effect on location change

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    localStorage.removeItem('profile');
    setUser(null); // Clear user state
  };

  const initial = user?.name ? user.name.charAt(0) : '?';

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="icon" height="46px" />
        <img className={classes.image} src={memoriesLogo} alt="icon" height="50px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.name} src={user.imageUrl}>
              {initial}
            </Avatar>
            <Typography className={classes.userName} variant="h6">{user.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signInButton}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
