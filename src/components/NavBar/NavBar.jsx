import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex justify-between mx-10 mt-10 text-black">
      <span className="flex items-center" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute duration-1000
           ${open ? "top-8" : "-top-40"}
            bg-amber-200`}
        >
          {links}
        </ul>
        <h3 className="ml-4 text-white">My Navbar</h3>
      </span>
      <ul className="md:flex hidden text-white">{links}</ul>
      <button className="text-white">Sign In</button>
    </nav>
  );
};

export default NavBar;
