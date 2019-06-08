import React from "react";
import Jumbotron from "../Jumbotron";

function Wrapper(props) {
  return <div className="container"><Jumbotron />{props.children}</div>;
}

export default Wrapper;
