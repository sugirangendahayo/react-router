import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mx-[5%] py-5">
      <Link to="/" className="font-bold text-xl">
        <span className="text-orange-600">#</span>
        VANLIFE
      </Link>
      <nav>
        <ul className="flex  items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
