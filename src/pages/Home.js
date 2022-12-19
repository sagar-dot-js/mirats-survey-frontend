import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";

const Home = () => {
  let { user } = useContext(ContextProvider);
  return (
    <div className="test">

      <Link to="/about">Home </Link>{" "}
      <h1>kajal</h1>
<h1>Sagar</h1>
      

    </div>
  );
};

export default Home;
