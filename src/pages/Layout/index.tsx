import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./elements/DashboardLayout";
import Blank from "./components/Blank";
import Sidebar from "../../components/Sidebar";

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="my-hospital/*" element={<Blank />} />

        {/* <Route path="/" element={<DashboardLayout />}>
        </Route> */}
      </Routes>
    </>
  );
};

export default AppLayout;
