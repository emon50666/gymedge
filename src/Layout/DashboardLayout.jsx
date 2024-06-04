import { Outlet } from "react-router-dom";
import SideBar from "../Components/DashBoard/SideBar";


const DashboardLayout = () => {
    return (
        <div className=" min-h-screen md:flex ">
            {/* side bar */}
            <div>
                <SideBar></SideBar>
            </div>
            {/* outlet dynamic content */}
            <div className="flex-1 md:ml-64 shadow-lg px-10  md:px-20 pt-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;