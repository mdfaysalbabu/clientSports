// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const headerOption = (
    <>
      <li className="text-teal-500 hover:text-yellow-400 text-xl font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-teal-500 hover:text-yellow-400 text-xl font-semibold">
        <Link to="/instructor">Instructor</Link>
      </li>
      <li className="text-teal-500 hover:text-yellow-400 text-xl font-semibold">
        <Link to="/classes">Classes</Link>
      </li>
      <li className="text-teal-500 hover:text-yellow-400 text-xl font-semibold">
        <Link to="/dashboard/students">Dashboard</Link>
      </li>
      <li className="text-teal-500 hover:text-yellow-400 text-xl font-semibold">
        <Link to="secret">Secret</Link>
      </li>

      {/* {
                isAdmin ? <li><Link to= '/dashboard/adminhome'>Dashboard</Link></li> : 
                <li><Link to= '/dashboard/userhome'>Dashboard</Link></li>
              }
            
          <li>
            <Link to='/dashboard/mycart'>
              <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length||0}</div>
              </button>
            </Link>
          </li> */}
    </>
  );
  return (
    <div>
      <div className="navbar z-index bg-violet-800 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-500 rounded-box w-52"
            >
              {headerOption}
            </ul>
          </div>
          <a className="text-transparent bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text font-bold text-3xl">
            Sports Academy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{headerOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className=" mr-5 text-xl text-yellow-500">
                {user?.displayName}
              </span>
              {/* <button onClick={handleLogOut} className="btn btn-ghost">
                Logout
              </button> */}
              <button
                onClick={handleLogOut}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            // <>
            //   <Link to="/login">Login</Link>
            // </>
            <Link to="/login">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
