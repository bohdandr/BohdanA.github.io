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
import SendingMoney from "./Pages/sendingMoney"
import PrivateRoute from "./Pages/PrivateRoute"
import ResetPassword from "./Pages/ResetPassword"

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
          <Route path="/update" element={<PrivateRoute> <Update/> </PrivateRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mywallet"  element={<PrivateRoute> <Wallet/> </PrivateRoute>} />
          <Route path="/sendingMoney" element={<PrivateRoute> <SendingMoney /> </PrivateRoute>} />
          <Route path="/forgot-password" element={<ResetPassword />} />

          {/* <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
