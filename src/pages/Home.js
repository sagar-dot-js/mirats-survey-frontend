import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";

const Home = () => {
  let { user } = useContext(ContextProvider);
  return (
    <div>
      <Link to="/about">Home </Link>{" "}
    </div>
  );
};

export default Home;
