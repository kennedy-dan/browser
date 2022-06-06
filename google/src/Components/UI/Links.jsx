import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  minadiv: {
    display: "flex",
    // justifyContent: "center",
    marginTop: "4px",
    // alignItems: "center",
    width: "900px",
  },
  navLink: {
    // color: "blue",
    paddingBottom: "5px",
    textDecoration: "none",
    marginTop: "20px",
    paddingRight: "20px",
    fontSize: "12px",
    "& p": {
      fontFamily:'Poppins'
    }
  },
  linkCont: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  activeTab: {
    color: "blue",

    borderBottom: "2px solid blue",
    borderBottomWidth: "2px",
    borderColor: "blue",

  },
  dummy: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      
    },
  }
}));

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => {
  const classes = useStyles();
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container justifyContent={matchesXS? 'center': ''} className={classes.linkCont}>
      <Grid container justifyContent={matchesXS? 'center': ''}  xs >
        <Grid item xs={matchesXS? 0 : 3} style={{visibility:'hidden'}} className={classes.dummy}>
          <p>hkgjk</p>
        </Grid>
        <Grid item xs={matchesXS? 0 : 9} className={classes.minadiv}>
          {links.map(({ url, text }) => (
            <NavLink
              to={url}
              className={classes.navLink}
              activeClassName={classes.activeTab}
            >
              <p>{text}</p>
            </NavLink>
          ))}
        </Grid>
      </Grid>
      <Grid container xs justifyContent="flex-end" style={{visibility:'hidden'}} >
        <p>buihu</p>
      </Grid>
    </Grid>
  );
};
