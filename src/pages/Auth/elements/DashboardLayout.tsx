import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const DashboardLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default DashboardLayout;