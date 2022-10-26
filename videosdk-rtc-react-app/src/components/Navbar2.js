import { useState } from "react";
import { close, logo, menu } from "../assets";
import {Link} from 'react-router-dom';
import { navLinks } from "../constants";

const Navbar2 = () => {
  

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={'/'}>
      <h1 className="text-4xl font-extrabold dark:text-white">StreaME</h1>
      </Link>
    </nav>
  );
};

export default Navbar2;