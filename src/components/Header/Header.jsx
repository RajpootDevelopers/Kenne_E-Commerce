import "./Header.css";
import MainHeaderDropDown from "./MainHeaderDropDown";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";



const Header = () => {
  return (
    <header>
      <div className="headerTop">
      <div className="container">
          <div className="header-top">
            <div className="header-dropdown">
              <div className="header-top-dropdown-heading">
                CURRENCY <RiArrowDropDownLine className="dropdown-icon" />
                <ul className="header-top-dropdown-list">
                  <li>€ EUR</li>
                  <li>£ Pound Sterling</li>
                  <li>$ US Dollar</li>
                </ul>
              </div>
              <div className="header-top-dropdown-heading">
                LANGUAGE <RiArrowDropDownLine className="dropdown-icon" />
                <ul className="header-top-dropdown-list">
                  <li>English</li>
                  <li>French</li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="left-ul">
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Register or Sign in</li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="headerMid">
        <div className="container">
          <div className="header-mid">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="" />
              </Link>
            </div>
            <div className="header-mid-call">
              <FaHeadphonesSimple className="head-phone-icon" />
              <div>
                <p>Call us</p>
                <p>Free Support: (012) 800 456 789</p>
              </div>
            </div>
            <div className="header-mid-search">
              <input type="text" placeholder="Search" />
              <IoSearchOutline className="head-input-icon" />
            </div>

            <div className="header-mid-checkout">
            <div className="checkout-items">
              <span>03</span>
            </div>
              <IoBagCheckOutline className="checkout-icon"/>
              <div className="verticleDivider"></div>
              <p>Cart: 2032</p>
            </div>
          </div>
        </div>
      </div>

    <div>
      <div className="container">
        <div className="main-header">
          <ul className="header-items">
            <li>Home</li>
            <li> <span className="shop">Shop</span>
              <RiArrowDropDownLine className="dropdown-icon"/>
              <MainHeaderDropDown/>
            </li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      </div>

  </header>
  );
};

export default Header;
