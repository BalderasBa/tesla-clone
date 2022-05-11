import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/teslaclone" element={<Signin />} />
        <Route path="/teslaclone/signup" element={<Signup />} />
        <Route path="https://balderasba.github.io/teslaclone/home" element={<Home />} />
        <Route path="/teslaclone/shop" element={<Shop />} />
        <Route path="/teslaclone/account" element={<Account />} />
        <Route path="/teslaclone/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
