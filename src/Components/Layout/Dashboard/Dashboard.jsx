import { Link, Outlet } from "react-router-dom";
import { FaBookOpen, FaBookmark, FaHome, FaRegAddressCard, FaUserCircle, FaUserShield } from "react-icons/fa";
import Useradmin from "../../Hooks/userAdmin";
import { FiChrome, FiHome } from "react-icons/fi";

const Dashboard = () => {
  // Todo
  const isAdmin = true;
  // const [isAdmin] = Useradmin();
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-30 h-full  bg-purple-700 text-white">
            <div className="py-4 px-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <Link to="/"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FiHome className="h-5 w-5 mr-2" />
                    User Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaUserCircle className="h-5 w-5 mr-2" />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addClassPage"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaRegAddressCard className="h-5 w-5 mr-2" />
                    Add Class page
                  </Link>
                </li>
                 <li>
                  <Link to="/dashboard/totalUser"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaUserShield className="h-5 w-5 mr-2" />
                    All User
                  </Link>
                </li>
                {/* instructor dashboard link */}
                <li>
                  <Link to="/dashboard/addClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaRegAddressCard className="h-5 w-5 mr-2" />
                    Add Class 
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaRegAddressCard className="h-5 w-5 mr-2" />
                    My Class
                  </Link>
                </li>

              </>
            ) : (
              <>
                <li>
                  <Link to="/"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FiHome className="h-5 w-5 mr-2" />
                    User Home
                  </Link>
                  <Link to="/dashboard/students"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaBookOpen className="h-5 w-5 mr-2" />
                    My Selected Classes
                  </Link>
                
                  <Link to="/dashboard/enroll"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaBookmark className="h-5 w-5 mr-2" />
                    My Enrolled Classes
                  </Link>
                </li>
                {/* <li>
                  <Link to="/dashboard/totalUser">All User</Link>
                </li> */}
              </>
            )}

            <div className="divider"></div>
            <li>
              <Link>
                <FaHome></FaHome>Home
              </Link>
            </li>
            <li>
              <Link>
                <FaHome></FaHome>Review
              </Link>
            </li>
            <li>
              <Link>
                <FaHome></FaHome>Analysis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
