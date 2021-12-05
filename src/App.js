import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home } from "./pages";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
