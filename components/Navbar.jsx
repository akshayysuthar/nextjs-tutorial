import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="font-bold text-2xl">
        <Link href="/">Akshay Suthar</Link>
      </div>
      <div className="flex gap-5 items-center" >
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className="bg-green-400 text-black py-1 px-3 rounded-md">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
