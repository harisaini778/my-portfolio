import React from "react"
import "./App.css"
import BodyPortfolio from "./components/Body";

import Header from "./components/header";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header />
      <BodyPortfolio/>
   </Fragment>
  );
}

export default App;
