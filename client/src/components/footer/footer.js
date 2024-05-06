import React from "react";
import { Typography, Link, IconButton } from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  MailOutline,
} from "@material-ui/icons";
import { useSpring, animated } from "react-spring";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <animated.div className={classes.footerSection} style={fadeIn}>
          <Typography variant="h6" className={classes.sectionTitle}>
            About Us
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            Discover the best deals near you!
          </Typography>
        </animated.div>
        <animated.div className={classes.footerSection} style={fadeIn}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Contact Us
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            Email: contact@example.com
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            Phone: +1234567890
          </Typography>
          <IconButton aria-label="Mail">
            <MailOutline />
          </IconButton>
        </animated.div>
        <animated.div className={classes.footerSection} style={fadeIn}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Follow Us
          </Typography>
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
        </animated.div>
      </div>
      <div className={classes.footerBottom}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Deal Dazzle | All Rights Reserved
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
