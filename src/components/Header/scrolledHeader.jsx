import "./ScrolledHeader.css"
import { useState, useEffect } from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const ScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTop > windowHeight / 2) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scrolled-header ${showHeader ? 'visible' : ''}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="header-items">
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <div className="header-icons">
        <IoBagCheckOutline className="check-out" />
        <IoMdSearch className="search-bar" />
        <RxHamburgerMenu className="hamburger" />
      </div>
    </div>
  );
};

export default ScrollHeader;
