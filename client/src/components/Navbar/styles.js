import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: theme.spacing(0),
    // Remove margin to align navbar to the top
    // margin: theme.spacing(5, 0),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.common.white} 100%)`,
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "3em", // Increased font size
    fontWeight: 600, // Increased font weight
    marginTop: theme.spacing(1), // Added top margin
    marginBottom: theme.spacing(1), // Added bottom margin
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em", // Adjusted font size for smaller screens
    },
  },
  image: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: theme.spacing(4),
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: theme.spacing(2),
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signInButton: {
    borderRadius: theme.spacing(6),
  },
}));

export default useStyles;
