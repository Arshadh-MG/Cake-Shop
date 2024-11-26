import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import logo from '../aa.jpg'
const Header = ({ cart }) => {
  return (
    <div className="navbar">
        <div className="logo"><img src={logo} alt="" /> <p>Homii Cakes</p></div>
        <ul>
            <li>
                 <Link to={"/"}>Home</Link>
            </li>
            <li>
                 <Link to={"/Cart"}>
                 <span className="cart-count">{cart.length}</span>
                 View Card</Link>
            </li>
        </ul>
        </div>
  )
}

export default Header