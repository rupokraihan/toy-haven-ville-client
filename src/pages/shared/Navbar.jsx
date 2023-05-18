import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import logo from '../../assets/logo/H__1_-removebg-preview.png'
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="web-color text-lg px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* logo */}
            <div>
              <img className="h-[80px] w-[130px]" src={logo} alt="" />
            </div>

            <div>
              <Link to="/" className="inline-flex items-center">
                <span className="ml-2 text-4xl font-bold tracking-wide">
                  toyHaven Ville
                </span>
              </Link>
            </div>
          </div>

          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>

            {/* Conditional rendering for My Toys */}
            {user && (
              <li>
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}

            {/* Conditional rendering for Add A Toy */}
            {user && (
              <li>
                <NavLink
                  to="/add-toy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>

            <li>
              {/* Conditional rendering for user profile and login/logout */}
              {user ? (
                <>
                  <div className="flex gap-6 items-center space-x-2">
                    {/* Sign Out button */}
                    <NavLink
                      onClick={handleLogout}
                      className={({ isActive }) =>
                        isActive ? "default" : "active"
                      }
                    >
                      Sign out
                    </NavLink>
                    <div className="relative">
                      {/* User profile picture */}
                      <div className="w-11 h-11 rounded-full ring">
                        <img
                          className="rounded-full w-11 h-11 hover:opacity-75"
                          src={user.photoURL}
                          alt=""
                        />
                        {/* User's name on hover */}
                        <div className="absolute -top-5 left-24 transform -translate-x-1/2 bg-blue-300 px-2 py-2 rounded-md shadow opacity-0 transition-opacity duration-300">
                          {user.displayName}
                        </div>
                      </div>
                    </div>
                  </div>
                  <style>
                    {`
                      .w-11:hover .absolute {
                        opacity: 1;
                      }
                    `}
                  </style>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Flavors of Mexico
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Log in
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

