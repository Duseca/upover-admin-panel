import { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiCloseFill, RiCoupon3Line, RiHome9Line, RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import {  FaUsers } from "react-icons/fa";
import {  MdBarChart, MdHistory,  MdLocationOn,  MdPayment,  MdSettings, MdSportsGymnastics, MdStorefront, MdSubscriptions } from "react-icons/md";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { getMenu } from "../../components/data";
import {  MdInsights } from "react-icons/md";
import { VscCalendar, VscQuestion } from "react-icons/vsc";
import { GiCook, GiMeal, GiWeightLiftingUp } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
const ICONS: Record<string, React.ElementType> = {
  RiHome9Line,
  AiOutlineUser,
  FaUsers, 
  MdInsights,
  MdStorefront,
  MdSportsGymnastics,
  MdHistory,
  MdBarChart,
  VscQuestion,
  MdSettings,
  GiWeightLiftingUp,
  MdPayment,
  MdSubscriptions,
  VscCalendar,
  AiOutlineShoppingCart,
  RiCoupon3Line,
  MdLocationOn,
  IoLocationSharp,
  GiMeal,
  TbTruckDelivery,
  GiCook
};
interface SidebarProps {
  smallSidebar: boolean;
  setSmallSidebar: (val: boolean) => void;
}
interface SidebarItemProps {
  to: string;
  label: string;
  icon: string;
  small: boolean;
  onClick: () => void;
}
const navClasses = ({ isActive = true, small = false }: { isActive?: boolean; small?: boolean }) =>
  isActive
    ? `flex items-center ${small ? "justify-center" : "px-5"} gap-1.5 py-2 rounded-lg bg-primary shadow text-gray-50 font-semibold`
    : "flex items-center gap-1.5 py-2 px-5 text-gray-600 rounded-lg hover:bg-primary/10 drop-shadow hover:text-primary hover:font-medium outline-none";

function SidebarItem({ to, label, icon, small, onClick }: SidebarItemProps) {
  const Icon = ICONS[icon] ?? Fragment;
  return (
    <li onClick={onClick}>
  <NavLink
    to={to}
    className={({ isActive }) =>
      navClasses({ isActive, small }) + " flex items-center gap-2"
    }
  >
    <Icon className="shrink-0 text-md" /> 
    {!small && <span className="whitespace-nowrap capitalize">{label}</span>}
  </NavLink>
</li>
  );
}
const Sidebar: React.FC<SidebarProps> = ({ smallSidebar, setSmallSidebar }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="bg-white px-4 sm:px-8 py-2 lg:py-0">
        <button
          type="button"
          onClick={() => setShowMenu(true)}
          className="flex items-center p-2 text-sm text-primary bg-primary/5 border-2 border-primary/20 rounded-lg lg:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        aria-label="Sidebar"
        className={`fixed top-2.5 left-2.5 z-40 bottom-2.5 rounded-2xl bg-white border-2 border-black/10 ${
          showMenu ? "" : "hidden"
        } ${smallSidebar ? "w-20" : "w-64"} lg:block`}
      >
        <div className={` ${smallSidebar ? 'h-full px-3 py-4 overflow-y-visible relative':
          'h-full px-3 py-4 overflow-y-visible relative'}`}>
          {showMenu && (
            <button
              className="absolute top-4 -right-4 bg-primary rounded-xl size-8 flex items-center justify-center text-xl text-white lg:hidden"
              onClick={() => setShowMenu(false)}
              aria-label="Close sidebar"
            >
              <RiCloseFill className="size-6" />
            </button>
          )}

          <div className="flex flex-col justify-between h-full">
            <ul className={`${smallSidebar ? 'font-normal text-sm overflow-y-auto sidebar-scrollbar': 'flex-1 overflow-y-auto sidebar-scrollbar space-y-2 font-normal text-sm px-3 py-4'} `}>
              {!smallSidebar && (
                <li>
                  <Link to="/" className="flex items-center justify-center rounded-lg">
                    {/* <img src={logo} alt="Logo" className="object-contain w-20 h-20" /> */}
                  </Link>
                </li>
              )}

              {getMenu()?.map((item:any) => (
  <SidebarItem
    key={item.key}
    to={item.to}
    label={item.label}
    icon={item.icon}
    small={smallSidebar}
    onClick={() => setShowMenu(false)}
  />
))}
            </ul>

            <div>
              <Link to="/login">
                <div className="flex items-center px-5 py-2 rounded-lg bg-gray-150/5 text-gray-600 gap-2.5 cursor-pointer font-medium hover:bg-gray-150/10 drop-shadow hover:text-gray-150">
                  <RiLogoutCircleLine />
                  {!smallSidebar && <p>Logout</p>}
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block absolute bg-white top-2.5 -right-5 rounded-lg w-fit border-2 border-black/20 outline-none">
            <div className="flex items-end justify-end">
              <button
                onClick={() => setSmallSidebar(!smallSidebar)}
                className="text-xs px-2 py-1.5"
              >
                {smallSidebar ? (
                  <GoSidebarCollapse className="size-5" />
                ) : (
                  <GoSidebarExpand className="size-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar
