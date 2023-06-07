import { Link, Outlet } from "react-router-dom";
import { FaBeer, FaHome } from "react-icons/fa";

const Dashboard = () => {
  // const isAdmin = true;
  return (
    <div className="p-40">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to='/'><FaHome></FaHome>User Home</Link>
            </li>
            <li>
              <Link to='/dashboard/students'>Students</Link>
            </li>
            <li>
              <Link>Students Sit</Link>
            </li>
            <div className="divider"></div>
            <li><Link><FaHome></FaHome>Home</Link></li>
            <li><Link><FaHome></FaHome>Review</Link></li>
            <li><Link><FaHome></FaHome>Analysis</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
