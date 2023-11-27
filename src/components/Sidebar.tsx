import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/svg/Logo.svg";
import Home from "../assets/svg/home.svg";
import plus from "../assets/svg/health-plus.svg";
import message from "../assets/svg/message.svg";
import settings from "../assets/svg/settings.svg";
import calendar from "../assets/svg/calendar.svg";
import file from "../assets/svg/file.svg";
import headset from "../assets/svg/headset.svg";
import gift from "../assets/svg/gift.svg";

const sidebarUpNavItems = [
  {
    display: "Dashboard",
    icon: Home,
    to: "/",
    section: "",
  },
  {
    display: "Consult a Doctor",
    icon: message,
    to: "/started",
    section: "started",
  },
  {
    display: "Appointments",
    icon: calendar,
    to: "/calendar",
    section: "calendar",
  },
  {
    display: "Medical History",
    icon: file,
    to: "/user",
    section: "user",
  },
  {
    display: "My Hospitals",
    icon: plus,
    to: "my-hospital",
    section: "order",
  },
];

const sidebarDownNavItems = [
  {
    display: "Settings",
    icon: settings,
    to: "/settings",
    section: "",
  },
  {
    display: "Help Center",
    icon: headset,
    to: "/help-center",
    section: "started",
  },
  {
    display: "Refer family & friends",
    icon: gift,
    to: "/refer",
    section: "calendar",
  },
];

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current?.querySelector(
        ".sidebar__menu__item"
      ) as HTMLDivElement | null;
      if (indicatorRef.current && sidebarItem) {
        indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      }
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarUpNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
        <Link to={"/"}>
          <img className="w-auto h-6 sm:h-7" src={Logo} alt="Logo" />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {sidebarUpNavItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                  activeIndex === index ? "active" : ""
                } hover:bg-gray-100  hover:text-gray-700`}
              >
                <img src={item.icon} alt={item.display} />

                <span className="mx-4 font-medium">{item.display}</span>
              </Link>
            ))}
          </nav>

          {sidebarDownNavItems.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className="flex items-center px-4 -mx-2"
            >
              <img src={item.icon} alt={item.display} />

              <span className="mx-2 font-medium text-gray-800 ">
                {item.display}
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
