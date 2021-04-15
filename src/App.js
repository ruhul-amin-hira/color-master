import { Route, Switch, useRouteMatch } from "react-router";
import { useLocation } from "react-router-dom";
import ColorDashboard from "./components/ColorDashboard";
import Footer from "./components/Footer";
import Gradient from "./components/gradient/Gradient";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import CopiedColors from "./components/copied_color/CopiedColors";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname == "/selected") {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = `white`;
    }
  }, [location]);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <ColorDashboard></ColorDashboard>
        </Route>
        <Route exact path="/gradient">
          <Gradient></Gradient>
        </Route>
        <Route exact path="/selected">
          <CopiedColors />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
