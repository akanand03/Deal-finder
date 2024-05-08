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
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <animated.footer className={classes.footer} style={fadeIn}>
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
            Email:{" "}
            <Link href="mailto:dealdazzle@gmail.com" color="inherit">
              dealdazzle@gmail.com
            </Link>
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            Phone: +9205545406
          </Typography>
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
        <animated.div className={classes.footerSection} style={fadeIn}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Quick Links
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            <Link href="/products" color="inherit">
              Products
            </Link>
          </Typography>
          <Typography variant="body2" className={classes.sectionContent}>
            <Link href="/services" color="inherit">
              Services
            </Link>
          </Typography>
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
    </animated.footer>
  );
};

export default Footer;
