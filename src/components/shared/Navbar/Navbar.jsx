import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
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
            <li>
              <Link>Applied Jobs</Link>
            </li>
            <li>
              <Link>Add A Job</Link>
            </li>
            <li>
              <Link>My Jobs</Link>
            </li>
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
            <Link>All Jobs</Link>
          </li>
          <li>
            <Link>Applied Jobs</Link>
          </li>
          <li>
            <Link>Add A Job</Link>
          </li>
          <li>
            <Link>My Jobs</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#1967d2] hover:bg-[#1967d2] text-white">
          Login
        </button>
        <input
          type="checkbox"
          className="toggle bg-[#1967d2] toggle-info ml-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
