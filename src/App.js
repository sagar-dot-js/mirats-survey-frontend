import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context, { ContextProvider } from "./Context";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
};

export default App;
