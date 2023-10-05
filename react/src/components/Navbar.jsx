import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import background from "/images/logo.png";
import profile from "/images/profile.png";
import fav from "/images/fav.svg";
import App from "../App";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={background} alt="logo" id="logo" />
        <div className="navlinks">
          <BrowserRouter>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <Routes>
              <Route path="/"/>
              <Route path="/about" />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="icons">
            <img src={fav} alt="" />
            <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
