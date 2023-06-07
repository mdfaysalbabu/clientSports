import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Banner/Banner";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Students from "../Pages/Dashboard/Students/Students";

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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "students",
            element:<Students></Students>
          },
        ],
      },
    ],
  },
]);

export default router;
