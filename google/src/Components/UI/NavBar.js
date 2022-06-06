import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../../contexts/StateContextProvider";
import { makeStyles } from "@mui/styles";
import { Grid, InputBase, useTheme, useMediaQuery } from "@mui/material";
import googlePix from "../../assets/googlepix.png";
import googleIcon from "../../assets/googleIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Links } from "./Links";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    marginTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  wholecont: {
    // display: "flex",
    alignItems: "center",
  },
  imgIcon: {
    width: "100px",

  },
  searchContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fffff",
    borderRadius: 50,
    boxShadow: "0px 9px 19px black",
    display: "flex",
    alignItems: "center",
    width: "900px",
    [theme.breakpoints.only("lg")]: {
      width: "900px",
    },
    [theme.breakpoints.down("md")]: {
      width: "200%",
    },
    // [theme.breakpoints.only("sm")]: {
    //   width: "500px",
    // },
    // width: "500%",
    justifyContent: "space-between",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "7px",
    paddingBottom: "7px",

    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "2060px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      // width: "auto",
    },
    [theme.breakpoints.only("sm")]: {
      // width:'200%'
      // width: "auto",
    },
  },
  vert: {
    borderLeft: "1px solid black",
    height: "30px",
    color: "red",
    marginRight: "10px",
  },
  searchIconWrapper: {
    // padding: theme.spacing(0, 2),
    // height: "100%",
    // width:'200px',
    // pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& p": {
      marginRight: "10px",
      fontSize: "19px",
    },
    // backgroundColor:'blue'
  },
  SearchIcon: {
    color: "blue",
  },
  inputbase: {
    color: "inherit",
    // width:'900px',

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  },
  closeIcon: {
    color: "gray",
    marginRight: "10px",
  },
  googleIcon: {
    width: "25px",
    [theme.breakpoints.down('lg')]:{
      display:'none'
    }
  },
  googleIconIcon:{
    [theme.breakpoints.down('lg')]:{
      display:'none'
    }
  },
  imgIconCont:{
    // [theme.breakpoints.down('sm')]:{
    //   display:'none'
    // }
  }
}));

const NavBar = ({ text, setText, textData }) => {
  console.log(text);
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme()
  const { setSearchTerm } = useStateContext();
  const [input, setInput] = useState(text);

  // const [debouncedValue] = useDebounce(input, 300);
  console.log();

  useEffect(() => {
    setSearchTerm(input);
  }, []);

  const handleKeyPress = (e) => {
    // if (e.which === 13) {
    // history.push(`/search`);

    setSearchTerm(input);
    // }
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        className={classes.navbarContainer}
      >
        <Grid item container direction={matchesXS? 'column': 'row'} xs className={classes.wholecont}>
          <Grid item xs={matchesXS? null : 3} className={classes.imgIconCont} >
            <img src={googlePix} className={classes.imgIcon} />
          </Grid>
          <Grid
            alignItems="center"
            className={classes.searchContainer}
            item
            xs={matchesXS? null :9}
          >
            <InputBase
              // placeholder={text}
              inputProps={{ "aria-label": "search" }}
              className={classes.inputbase}
              value={text}
              onChange={(e) => setText(e.target.value)}
              defaultValue={text}
              // onKeyDown={handleKeyPress}
            />
            <div container className={classes.searchIconWrapper}>
              <CloseIcon className={classes.closeIcon} />
              <div className={classes.vert}></div>
              <SearchIcon className={classes.SearchIcon} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs container justifyContent="flex-end" className={classes.googleIconIcon} >
          <img src={googleIcon} className={classes.googleIcon} />
        </Grid>
      </Grid>
      <Links />
      <hr style={{ marginTop: "-1px" }} />
    </>
  );
};

export default NavBar;
