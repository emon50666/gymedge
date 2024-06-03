import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* side bar */}
            <div>
                sidebar
            </div>
            {/* outlet dynamic content */}
            <div className="flex-1 md:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;