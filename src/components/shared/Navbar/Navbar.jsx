import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar max-w-6xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden hover:text-[#1967d2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link>All Jobs</Link>
            </li>
            {user && (
              <li>
                <Link to="/applied-jobs">Applied Jobs</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/my-jobs">My Jobs</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/add-job">Add A Job</Link>
              </li>
            )}
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/allJobs">All Jobs</Link>
          </li>
          {user && (
            <li>
              <Link to="/applied-jobs">Applied Jobs</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/my-jobs">My Jobs</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/add-job">Add A Job</Link>
            </li>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center">
            {user.photoURL ? (
              <img
                className="w-[50%] rounded-full"
                src={user.photoURL}
                title={user.displayName || "User"}
                alt=""
              />
            ) : (
              <FaUser></FaUser>
            )}
          </div>
        ) : (
          <FaUser className="text-[#1967d2]"></FaUser>
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn capitalize bg-[#1967d2] text-white hover:bg-[#1967d2]"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn capitalize ml-2 bg-[#1967d2] text-white hover:bg-[#1967d2]">
              Login
            </button>
          </Link>
        )}
        <input
          type="checkbox"
          className="toggle bg-[#1967d2] toggle-info ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
