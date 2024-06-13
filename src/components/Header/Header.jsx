import "./Header.css"
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";

import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {


  return (
    <div className="">
      <div className="header-top container">

      <div className="drop-down">
        <div className="custom-dropdown">
          CURRENCY <RiArrowDropDownLine className="dropdown-icon" />
          <ul className="header-top-dropdown">
            <li>€ EUR</li><hr />
            <li>£ Pound Sterling</li><hr />
            <li>$ US Dollar</li>
          </ul>
        </div>
        <div className="custom-dropdown">
          LANGUAGE <RiArrowDropDownLine className="dropdown-icon" />
          <ul className="header-top-dropdown">
            <li>English</li><hr />
            <li>French</li>
          </ul>
        </div>
      </div>
          
          {/* <div className="drop-down">
                <li className="custom-dropdown">CURRENCY <RiArrowDropDownLine className="dropdown-icon"/></li>
                <ul className="header-top-dropdown1">
                  <li>€ EUR</li>
                  <hr />
                  <li>£ Pound Sterling</li>
                  <hr />

                  <li>$ Us Dollar</li>
                </ul>
                  <li className="custom-dropdown">LANGUAGE <RiArrowDropDownLine className="dropdown-icon"/></li>
                <ul className="header-top-dropdown2">
                  <li>English</li>
                  <hr />
                  <li>French</li>
                </ul>

          </div> */}
          {/* <div className="dropdown-container">
          <CustomDropdown 
            title="CURRENCY" 
            options={['€ EUR', '£ Pound Sterling', '$ US Dollar']}
          />
          <CustomDropdown 
            title="LANGUAGE" 
            options={['English', 'French']}
          />
        </div> */}
          <div>
              <ul className="left-ul">
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Register or Sign in</li>
                <li>Checkout</li>
              </ul>
          </div>
      </div>
      {/* <hr className="container"/> */}

      <div>

        <div >
          <div className="container header-mid">
            <div className="logo">

            <Link to="/"> <img src="/logo.png" alt="" /></Link>
            </div>
              {/* <div className="logo"><img src="/logo.png" alt="" /></div> */}
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





              {/* <select name="" id="">
                <option value="CURRENCY">CURRENCY</option>
                <option value="€ EUR">€ EUR</option>
                <option value="£ Pound Sterling">£ Pound Sterling</option>
                <option value="$ Us Dollar">$ US Dollar</option>
              </select>
              <select name="" id="">
                <option value="LANGUAGE">LANGUAGE</option>
                <option value="English"> English</option>;
                <option value="French">French</option>
              </select>  */}
              {/* <div className="dropdown-container">
              <CustomDropdown 
                options={['€ EUR', '£ Pound Sterling', '$ US Dollar']}
                defaultOption="CURRENCY"
              />
              <CustomDropdown 
                options={['English', 'French']}
                defaultOption="LANGUAGE"
              />
        </div> */}
