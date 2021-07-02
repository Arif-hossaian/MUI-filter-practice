import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  globalMargin: {
    marginTop: "18px"
  },
  search: {
    marginTop: "15px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#90caf9",
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  //////////////////////////////////////////

  //CustomeFilterToggle.jsx start
  toggleButtonGroup: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
  //CustomeFilterToggle.jsx end
  ////////////////////////////////////

  //CustomeCheckbox.jsx start
  chekboxRoot: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
    fontFamily: `'Raleway', sans-serif`,
  },
  //CustomeCheckbox.jsx end
  /////////////////////////////

  //CustomeSlider.jsx start
  sliderMainDiv: {
    width: '100%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
  //CustomeSlider.jsx end
  /////////////////////////////////

  //ListItem.jsx
  // toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  // },
  listItemMainDiv: {
    marginTop: "40px",
    maxWidth: "90%",
  },
  listItemMedia: {
    height: "300px",
    // paddingTop: '36.25%', // 16:9
  },
  ratingAvatar: {
    backgroundColor: "red",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-around"
  }
}));
