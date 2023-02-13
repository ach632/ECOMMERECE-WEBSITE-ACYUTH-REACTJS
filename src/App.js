import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<checkOut/>} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
