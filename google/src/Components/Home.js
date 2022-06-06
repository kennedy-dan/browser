import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { Grid, InputBase, Paper, Box } from "@mui/material";
import cnn from "../assets/cnn.svg";
import { useDebounce } from "use-debounce";
import { experimentalStyled as styled } from "@mui/material/styles";

import {
  ConnectedTv,
  Facebook,
  GitHub,
  Instagram,
  Newspaper,
  Reddit,
  Search,
  ShoppingCart,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import { useStateContext } from "../contexts/StateContextProvider";
import {
  Link,
  NavLink,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Results } from "./Results";
import NavBar from "./UI/NavBar";
import { borderRadius, height } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
    borderRadius: 50,
    backgroundColor: "#fffff",
    boxShadow: "0px 9px 19px black",
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25);
    // };
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50%",
    height: "100%",

    // [theme.breakpoints.up('sm')] {
    //   marginLeft: theme.spacing(3);
    //   width: 'auto';
    // };
  },
  roo: {
    height: "100vh",
  },
  // twcss:{
  //   display:'none'
  // },
  SearchIconContainer: {
    // padding: theme.spacing(0, 2),
    // height: "100%",
    // pointerEvents: "none",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",

    padding: "10px 20px",
    "& img": {
      width: "40px",
      height: "40px",
    },
  },
  SearchIcon: {
    marginRight: 20,
  },
  searhWenContaimer: {
    display: "flex",
    alignItems: "center",
  },
  inputbase: {
    color: "inherit",
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
  imageIcons: {
    marginTop: "10px",
    backgroundColor: "#fffff",
    boxShadow: "0px 9px 19px black",
    borderRadius: 30,
    opacity: 0.8,
    marginRight: "35px",
  },
  iconLinkContainer: {
    marginTop: "40px",
    "& p": {
      textAlign: "center",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "bold",
      color: 'gray',
      fontFamily: 'Poppins',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);

  const handleShow = () => {
    setShow(true);
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      history.push(`/search`);
      handleShow();
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: 12,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div
        className={classes.twcss}
        style={
           location.pathname === "/search" || location.pathname ===   '/news' ||  location.pathname ===  '/image' || location.pathname ===   '/videos'
            ? { visibility: "visible" }
            : { display: "none" }
        }
      >
        <NavBar text={text} setText={setText} />
        <Results />
      </div>

      <Grid
        container
        direction="column"
        justifyContent="center"
        className={classes.roo}
        alignItems={"center"}
        style={
         location.pathname === "/"
            ? { visibility: "visible" }
            : { display: "none" }
        }
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item className={classes.root}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              className={classes.SearchIconContainer}
            >
              <InputBase
                placeholder="...search"
                inputProps={{ "aria-label": "search" }}
                className={classes.inputbase}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div>
                <Search />
              </div>
            </Grid>
          </Grid>
          <Link to="/search" style={{ display: "none" }}>
            <button onClick={handleShow}>submit</button>
          </Link>
        </Grid>
        <Grid className={classes.iconLinkContainer}>
          <Grid container justifyContent={"space-between"} spacing={7}>
            <Grid item xs={2}>
              <a href="https://twitter.com/">
                <Item>
                  <Twitter />
                </Item>
              </a>
              <p>Twitter</p>

            </Grid>
            <Grid item xs={2}>
              <a href="https://facebook.com/">
              <Item>
                <Facebook />
              </Item>
              </a>
              <p>Facebook</p>
            </Grid>
            <Grid item xs={2}>
              <a href="https://github.com/">
              <Item>
                <GitHub />
              </Item>
              </a>
              <p>GitHub</p>
            </Grid>
            <Grid item xs={2}>
              <a href="https://news.com/">
              <Item>
                <Newspaper />
              </Item>
              </a>
              <p>News</p>
            </Grid>
            <Grid item xs={2}>
              <a href="https://youtube.com/">
              <Item>
                <YouTube />
              </Item>
              </a>
              <p>YouTube</p>
            </Grid>
            <Grid item xs={2}>
            <a href="https://reddit.com/">
              <Item>
                <Reddit />
              </Item>
              </a>
              <p>Reddit</p>
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-between"} spacing={7}>
            <Grid item xs={2}>
              <a href="https://instagram.com/">
              <Item>
                <Instagram />
              </Item>
              </a>
              <p>Amazon</p>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
