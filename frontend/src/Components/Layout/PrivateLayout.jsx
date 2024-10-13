import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; 
import SideNav from "../Dashboard/SideNav";
import Navbar from "../Dashboard/NavBar";
import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";
import { useState } from "react";


// import Footer from "../Common/Footer/Footer1";

function DashBoard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState(' ');
  const handleLogout = () => {
    logout(); // Set authentication state to false
    navigate("/log-in"); // Redirect to login page
  };
  return (
    <>
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <SideNav onLogout={handleLogout} />
        <div className="flex-1 flex flex-col">
          <Navbar onLogout={handleLogout} search={search} setSearch={setSearch}/>
          <Breadcrumbs />
          <div className="flex-1 overflow-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default DashBoard;
