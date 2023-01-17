import { useState } from "react";
import { close, menu } from "../../assets";
import {Link, useNavigate } from 'react-router-dom';
import { navLinks } from "../../constants";
import styles from "../../style";
import React, { useContext } from "react";
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const {currentUser} = useContext(AuthContext)

  function GoToChat(){
    
  
    if (currentUser == null){
      alert("You must be logged in")
    }
  
    if (currentUser != null){
      navigate('/chatapp')
    }
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={'/'}>
      <h1 className="text-4xl font-extrabold dark:text-white">StreaME</h1>
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button onClick={GoToChat} className="rounded-md p-2 ml-5 bg-violet-500">Go chat!</button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;