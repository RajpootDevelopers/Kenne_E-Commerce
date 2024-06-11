import "./Header.css"
const Header = () => {
  return (
    <div className="">
      <div className="header-top">


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
      <hr />
        <div className="logo"><img src="/logo.png" alt="" /></div>
        <ul className="header-items">
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>

        <div className="icons">
        
        </div>
    
    </div>
  )
}

export default Header
