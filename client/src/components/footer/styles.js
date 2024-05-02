import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0),
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  footerSection: {
    width: "30%",
    minWidth: 250,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: theme.spacing(3),
    },
  },
  socialIcons: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  footerBottom: {
    borderTop: `1px solid ${theme.palette.common.white}`,
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;
