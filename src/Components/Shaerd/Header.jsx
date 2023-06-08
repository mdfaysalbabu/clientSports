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
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructor</Link>
      </li>
      <li>
        <Link to="/order/salad">Class</Link>
      </li>
      <li>
        <Link to="/dashboard/students">Dashboard</Link>
      </li>
      <li>
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
      <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-xl">
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
          <a className="btn btn-ghost normal-case text-xl">Sports Academy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{headerOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="text-white">{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
