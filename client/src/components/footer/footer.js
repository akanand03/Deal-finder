import React from 'react';
import { Typography, Link, IconButton } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@material-ui/icons';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerSection}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </div>
        <div className={classes.footerSection}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">Email: contact@example.com</Typography>
          <Typography variant="body2">Phone: +1234567890</Typography>
        </div>
        <div className={classes.footerSection}>
          <Typography variant="h6">Follow Us</Typography>
          <div className={classes.socialIcons}>
            <IconButton aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="GitHub">
              <GitHub />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Your Website | All Rights Reserved
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="/privacy-policy" color="inherit">Privacy Policy</Link> | <Link href="/terms-of-service" color="inherit">Terms of Service</Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
