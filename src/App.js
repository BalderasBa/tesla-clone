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
         <Route path="/" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/account" element={<Account />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
