import "./Header.css"
import { IoBagCheckOutline } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";

import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="">
      <div className="header-top container">
          <div className="drop-down">
              <select name="" id="">
                <option value="CURRENCY">CURRENCY</option>
                <option value="€ EUR">€ EUR</option>
                <option value="£ Pound Sterling">£ Pound Sterling</option>
                <option value="$ Us Dollar">$ US Dollar</option>
              </select>
              <select name="" id="">
                <option value="LANGUAGE">LANGUAGE</option>
                <option value="English"> English</option>;
                <option value="French">French</option>
              </select> 
          </div>
          <div>
              <ul>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Register or Sign in</li>
                <li>Checkout</li>
              </ul>
          </div>
      </div>
      <hr className="container"/>

      <div>

        <div >
          <div className="container header-mid">
              <div className="logo"><img src="/logo.png" alt="" /></div>
              <div className="header-mid-call">
                <FaHeadphonesSimple className="head-phone-icon"/>
                  <div>
                    <p>Call us</p>
                    <p>Free  Support: (012) 800 456 789</p>
                  </div>
              </div>
              <div className="header-mid-search">
                <input type="text" placeholder="Search" />
                <IoSearchOutline className="head-input-icon"/>
              </div>
              <div className="header-mid-checkout">
                <IoBagCheckOutline/>
                  <div className="verticleDivider"></div>
                <p>Cart : 2032</p>
              </div>
            </div>
          </div>
            <hr className="container"/>

        </div>

        

      <div className="main-header">
          <ul className="header-items">
              <li>Home</li>
              <li>Shop</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About Us</li>
          </ul>
      </div>
    
    </div>
  )
}

export default Header


