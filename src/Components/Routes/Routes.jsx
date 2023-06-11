import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Banner/Banner";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Students from "../Pages/Dashboard/Students/Students";
import Enroll from "../Pages/Dashboard/Students/Enroll";
import Addclass from "../Pages/Dashboard/Instructor/Addclass";
import Secret from "./Secret";
import PrivetRoutes from "./PrivetRoutes";
import Alluser from "../Pages/Dashboard/AllUser/Alluser";
import Classes from "../Pages/Classes/Classes";
import Manageclass from "../Pages/Dashboard/Admindashboard/Manageclass";
import ManageUser from "../Pages/Dashboard/Admindashboard/manageUser";
import MyClass from "../Pages/Dashboard/Instructor/myClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path:'/secret',
        element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
      },
      {
          path:'/classes',
          element:<Classes></Classes>
      },
      {
        path: "dashboard",
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children: [
          {
            path: "students",
            element:<Students></Students>
          },
          {
            path:"enroll",
            element:<Enroll></Enroll>
          },
          {
            path:"totalUser",
            element:<Alluser></Alluser>
          },
          // instructor Routes
          {
             path:"addClass",
             element:<Addclass></Addclass>
          },
          {
            path:"myClass",
            element:<MyClass></MyClass>
          },
          // admin routes
          {
            path:'manageClass',
            element:<Manageclass></Manageclass>
          
          },
          {
            path:'manageUser',
            element:<ManageUser></ManageUser>
          }
        ],
      },
    ],
  },
]);

export default router;
