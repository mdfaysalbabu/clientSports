import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Banner/Banner";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Banner></Banner>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
  },
]);

export default router;
