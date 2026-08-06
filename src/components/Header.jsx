import React from "react";
import logo from "../assets/cat-ready-to-eat.webp";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center border-b">
        <div>
          <img src={logo} className="w-28 rounded-4xl" />
        </div>
        <div>
          <ul className="flex space-x-4 mr-6 items-center text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li >Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
