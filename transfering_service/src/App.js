import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "./sass/header.scss";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Contact from "./Pages/Contact"
import Dialog from "./Pages/Dialog"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Update from "./Pages/Update"
import Logout from "./Pages/Logout"
import Wallet from "./Pages/myWallet"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<Update />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mywallet" element={<Wallet />} />

          {/* <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} /> */}
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
