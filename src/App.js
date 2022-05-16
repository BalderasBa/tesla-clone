import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/teslaclone" exact element={<Signin />} />
        <Route path="/teslaclone/signup" exact element={<Signup />} />
        <Route path="/teslaclone/home" exact element={<Home />} />
        <Route path="/teslaclone/shop" exact element={<Shop />} />
        <Route path="/teslaclone/account" exact element={<Account />} />
        <Route path="/teslaclone/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
