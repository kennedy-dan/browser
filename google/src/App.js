import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Components/UI/Theme";
import Home from "./Components/Home";
import { Try } from "./Components/Try";
import { StateContextProvider } from "./contexts/StateContextProvider";
import NavBar from "./Components/UI/NavBar";
function App() {
  return (
    <StateContextProvider>
      <ThemeProvider theme={Theme}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
        {/* <Try /> */}
      </ThemeProvider>
    </StateContextProvider>
  );
}

export default App;
