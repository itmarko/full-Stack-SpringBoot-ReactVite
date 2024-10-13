import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { FaRegCalendarCheck, FaRegFile } from "react-icons/fa";
import {
  MdHelpOutline,
  MdOutlineTask,
  MdReportGmailerrorred,
  MdSettings,
} from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const SideNav = ({ onLogout }) => {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <Link to="/dashboard">
            <SidebarItem icon={<IoHomeOutline size={18} />} text="Home" alert />
          </Link>
          <SidebarItem
            icon={<LuLayoutDashboard size={18} />}
            text="Dashboard"
          />
          <Link to="calender">
            <SidebarItem
              icon={<FaRegCalendarCheck size={18} />}
              text="Calender"
            />
          </Link>

          <SidebarItem icon={<MdOutlineTask size={18} />} text="Task" />
          <Link to="students">
          <SidebarItem icon={<FaRegFile size={18} />} text="Project" />
          </Link>

          <SidebarItem icon={<HiOutlineUserGroup size={18} />} text="Network" />
          {/* <h2 className="overflow-hidden transition-all text-white ml-4 font-semibold ">User</h2> */}

          <SidebarItem
            icon={<RiShieldUserLine size={18} />}
            text="Authentication"
            dropdownItems={[
              { text: "SignIn", link: "/settings/signin" },
              { text: "SignUp", link: "/settings/signup" },
              { text: "Privacy Settings", link: "/settings/privacy" },
            ]}
          />
          <hr />
          <SidebarItem icon text />
          <SidebarItem
            icon={<MdReportGmailerrorred size={18} />}
            text="Reporting"
          />
          <SidebarItem
            icon={<MdSettings size={18} />}
            text="Settings"
            dropdownItems={[
              { text: "Profile Settings", link: "/settings/profile" },
              { text: "Account Settings", link: "/settings/account" },
              { text: "Privacy Settings", link: "/settings/privacy" },
            ]}
          />
          <SidebarItem icon={<MdHelpOutline size={18} />} text="Help" />
          <hr />
          <SidebarItem icon={<FaRegCircleUser size={18} />} text="Profile" />
          <Link onClick={onLogout}>
            <SidebarItem icon={<IoMdLogOut size={18} />} text="LogOut" />
          </Link>
        </Sidebar>
      </div>
    </>
  );
};

export default SideNav;
