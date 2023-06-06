import { Outlet } from "react-router-dom";
import Header from "../Shaerd/Header";
import Footer from "../Shaerd/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;