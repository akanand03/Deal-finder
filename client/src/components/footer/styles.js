import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    padding: theme.spacing(4, 2),
    textAlign: 'center',
    marginTop: 'auto',  // Ensures it sticks to the bottom
  },
  footerContainer: {
    width: "100%",  // Full width
    maxWidth: "1200px",  // Max width of the container
    margin: '0 auto',  // Center the container
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  // Space between sections
    alignItems: 'flex-start',  // Align items at the start of each flex item
    padding: theme.spacing(2),
  },
  footerSection: {
    flex: '1 1 200px',  // Flex-grow, flex-shrink and flex-basis
    padding: theme.spacing(2),
    margin: theme.spacing(1),  // Space around each section
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',  // Full width on small screens
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[300],  // Lighter text for titles
  },
  sectionContent: {
    color: theme.palette.grey[100],
    marginBottom: theme.spacing(1),
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',  // Center social icons
    "& > *": {
      margin: theme.spacing(1),  // Space around icons
    },
  },
  footerBottom: {
    width: '100%',
    borderTop: `1px solid ${theme.palette.grey[800]}`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: '0.875rem',
    color: theme.palette.grey[500],
    textAlign: 'center',  // Center text for bottom footer
  },
}));

export default useStyles;
