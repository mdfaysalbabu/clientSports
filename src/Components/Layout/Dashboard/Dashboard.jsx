import { Link, Outlet } from "react-router-dom";
import {
  FaBookOpen,
  FaBookReader,
  FaBookmark,
  FaHome,
  FaReadme,
  FaRegAddressCard,
  FaUserCircle,
} from "react-icons/fa";
import Useradmin from "../../Hooks/userAdmin";
import { FiHome } from "react-icons/fi";
import useStudent from "../../Hooks/useStudent";
import useInstructor from "../../Hooks/useInstructor";

const Dashboard = () => {
  // Todo
  // const object= Useradmin();
  // console.log(object);

  const isAdmin = Useradmin();
  console.log(isAdmin);

  // const isStudent = useStudent();
  // console.log(isStudent)
  const isInstructor = useInstructor();
  console.log(isInstructor);
  return (
    <div className=" mb-10 ">
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
          <ul className="menu p-4 w-30 h-full  bg-purple-700 text-white shadow-2l">
            <div className="py-4 px-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            {/* Sidebar content here */}

            {/* Admin DashBoard */}

            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/manageClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaUserCircle className="h-5 w-5 mr-2" />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageUser"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaRegAddressCard className="h-5 w-5 mr-2" />
                    Manage Users
                  </Link>
                </li>
              </>
            )}

            {/* Student DashBoard */}

            {/* {isStudent && 
              <>
                <li>
                  <Link
                    to="/"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FiHome className="h-5 w-5 mr-2" />
                    Student Home
                  </Link>
                  <Link
                    to="/dashboard/students"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaBookOpen className="h-5 w-5 mr-2" />
                    My Selected Classes
                  </Link>

                  <Link
                    to="/dashboard/enroll"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaBookmark className="h-5 w-5 mr-2" />
                    My Enrolled Classes
                  </Link>
                </li>
              </>
            } */}

            {/* Instructor DashBoard */}

            {isInstructor && (
              <>
                <li>
                  <Link
                    to="/"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FiHome className="h-5 w-5 mr-2" />
                    Instructor Home
                  </Link>
                  <Link
                    to="/dashboard/addClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaBookOpen className="h-5 w-5 mr-2" />
                    Add a Class
                  </Link>

                  <Link
                    to="/dashboard/myClass"
                    href="#"
                    className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
                  >
                    <FaRegAddressCard className="h-5 w-5 mr-2" />
                    My Class
                  </Link>
                </li>
                {/* <li>
                <Link to="/dashboard/totalUser">All User</Link>
              </li> */}
              </>
            )}

            {/* dashBoard Under */}
            <div className="divider"></div>
            <li>
              <Link
                to="/"
                href="#"
                className="flex items-center py-2 px-4 text-sm font-medium hover:bg-purple-600 transition duration-300"
              >
                <FiHome className="h-5 w-5 mr-2" />
                 Home
              </Link>
            </li>
            <li className=" text-sm font-medium hover:bg-purple-600 transition duration-300">
              <Link>
                <FaBookReader className="h-5 w-5 mr-2"></FaBookReader>Review
              </Link>
            </li>
            <li className=" text-sm font-medium hover:bg-purple-600 transition duration-300">
              <Link>
                <FaReadme className="h-5 w-5 mr-2"></FaReadme>Review
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
