import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/"><li className="btn btn-outline btn-success">Home</li></NavLink>
      <NavLink to="/about"><li className="btn btn-outline btn-success">About</li></NavLink>
    </>
  );
  return (
    <div className="navbar mt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex-col gap-4"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn btn-success">Sing in</a>
        <a className="btn btn-accent">Sing up</a>
      </div>
    </div>
  );
};

export default Navbar;
