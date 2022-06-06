import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useStateContext } from "../contexts/StateContextProvider";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { padding, width } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  SearchGrid: {
    marginTop: "2rem",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  searchGridContent: {
    // width:'40%'
    width: "900px",
    [theme.breakpoints.only("lg")]: {
      width: "900px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    // [theme.breakpoints.only("sm")]: {
    //   width:'200%'
    //   // width: "auto",
    // },
    "& p": {
      fontFamily: "Poppins",
    },
  },
  searchGridTitle: {
    textDecoration: "none",
  },
  searchHttpLink: {
    fontSize: "0.9rem",
    color: "black",
    // marginBottom:"0px"
  },
  searchHttpText: {
    "&:hover": {
      textDecoration: "underline",
    },
    fontSize: "18px",
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    // },
  },
  searchHttpdesc: {
    color: "black",
    // width: "700px",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  googleImgCont: {
    padding: "55px",
    "& p": {
      overflowWrap: "break-word",
    },
  },
  textImg: {
    width: "9rem",
  },
  newsGrid: {
    textDecoration: "none",

    "& a": {
      textDecoration: "none",
      color: "black",
    },
    "& p": {
      color: "gray",
    },
  },
  newsGridCont: {
    marginTop: "2rem",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  eg: {
    border: "1px solid black",
    borderRadius: 10,
    marginBottom: "20px",
    padding: "10px",
    // background: "blue",
  },
  videoGrid: {
    marginTop: "30px",
    marginLeft: "40px",
  },
  dommy: {
       [theme.breakpoints.down('md')]:{
      display:'none'
    }
  }
}));

export const Results = () => {
  const classes = useStyles();
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();
  console.log(results);
  const theme = useTheme();
  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  if (loading) return <p>Loading</p>;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <Grid
          className={classes.SearchGrid}
          container
          direction="row"
          alignItems="cente"
          justifyContent="space-between"
        >
          <Grid item container xs={matchesXS? 12 : 'auto'}>
            <Grid item xs className={classes.dommy} style={{ visibility: "hidden" }}>
              jjk
            </Grid>
            <Grid item xs={matchesXS? 12 : 9}>
              {results?.map(({ link, title, description }, index) => (
                <Grid className={classes.searchGridContent} item key={index}>
                  <a
                    className={classes.searchGridTitle}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Grid className={classes.newsdiv}>
                      <p className={classes.searchHttpLink}>
                        {link.length > 30 ? link.substring(0, 30) : link}
                      </p>
                      <p className={classes.searchHttpText}>{title}</p>
                      <p className={classes.searchHttpdesc}>{description}</p>
                    </Grid>
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            justifyContent="flex-end"
            style={{ visibility: "hidden" }}
            className={classes.dommy}
          >
            ygyugyu
          </Grid>
        </Grid>
      );
    case "/image":
      return (
        <Grid container justifyContent="center">
          {console.log(results)}

          {results?.map(({ image, link: { href, title } }, index) => (
            <Grid item className={classes.googleImgCont}>
              <a
                className=""
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: "blue" }}
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className={classes.textImg}>{title}</p>
              </a>
            </Grid>
          ))}
        </Grid>
      );
    case "/news":
      return (
        <Grid
          className={classes.newsGridCont}
          container
          direction="column"
          alignItems="center"
          // justifyContent="space-between"
        >
          {results?.map(({ id, links, source, title }, index) => (
            <Grid className={classes.searchGridContent} item>
              <div className={classes.eg}>
                <a
                  className={classes.newsGrid}
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <a href={source?.href} target="_blank" rel="noreferrer">
                      {source?.title}
                    </a>
                  </div>
                  <p className={classes.searchHttpText}>{title}</p>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      );
    case "/videos":
      return (
        <Grid>
          <>{console.log(results)}</>
          {results?.map((video, index) => (
            <Grid container key={index}>
              <div className={classes.videoGrid}>
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="255px"
                  height="200px"
                />

                <p>{video.additional_links?.[0].text}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      );

    default:
      return "ERROR";
  }

  return <div></div>;
};
