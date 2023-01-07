import { Button, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      title: "Exchanges",
    },
    {
      path: "/coins",
      title: "Coins",
    },
    
  ];
  return (
    
    <div className={style.navMain}>
      <div className={style.nav}>
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? style.active : style.default
            }
            key={link.path}
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
