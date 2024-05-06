import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import { fetchPurchasesByAdmin } from '../../api'; // Make sure this API function is correctly implemented

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [openPurchasesDialog, setOpenPurchasesDialog] = useState(false);
  const [purchases, setPurchases] = useState([]); // State to hold purchases data
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleOpenPurchasesDialog = async () => {
    if (user?.result.isAdmin) {
      try {
        const response = await fetchPurchasesByAdmin(user.result._id); // Assume this API fetches purchases related to this admin
        setPurchases(response.data);
        setOpenPurchasesDialog(true);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    }
  };

  const handleClosePurchasesDialog = () => {
    setOpenPurchasesDialog(false);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="icon" height="46px" />
        <img className={classes.image} src={memoriesLogo} alt="icon" height="50px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            {user?.result.isAdmin && (
              <Button variant="contained" color="primary" onClick={handleOpenPurchasesDialog}>
                View My Products' Purchases
              </Button>
            )}
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signInButton}>
            Sign In
          </Button>
        )}
      </Toolbar>
      <Dialog open={openPurchasesDialog} onClose={handleClosePurchasesDialog}>
        <DialogTitle>My Products' Purchases</DialogTitle>
        <DialogContent>
          <List>
            {purchases.map((purchase, index) => (
              <ListItem key={index}>
                <ListItemText primary={`Product ID: ${purchase.productId}`} secondary={`Purchased by User ID: ${purchase.buyerId}, Date: ${purchase.date}`} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
