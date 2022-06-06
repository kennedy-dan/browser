import React from "react";
import { Results } from "../Components/Results";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./UI/NavBar";

export const Try = () => (
    <Switch>
  
      <>
      <Route exact path={["/search", "/image", "/news", "/videos"]}>
        <NavBar />
        <Results />
      </Route>
      </>
      
    </Switch>
);
