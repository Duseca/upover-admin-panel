import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Headerprops {
    header : string, 
    link: string,
    arrow?:boolean
}

const Header: React.FC <Headerprops>= ({ header, link, arrow })=> {
    const [showMenue, setShowMenue] = useState<boolean>(false);
  return (
    <div>
    <div className="bg-white rounded-2xl">
      <nav className="text-gray-350 rounded-2xl">
        <div className=" flex flex-wrap items-center justify-between px-4 py-9 sm:p-8 ">
          <div className="flex items-center drop-shadow-lg">
            
              <Link to={link}>
                <div className="flex items-center gap-1">
                  {arrow && <IoArrowBack className="w-5 h-5" />}
                  <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap capitalize ">
                    {header}
                  </span>
                </div>
              </Link>
            
          </div>
          <div className="relative" id="navbar-default">
           
          
          </div>
        </div>
      </nav>
    </div>

    <aside
      className={`fixed top-0 right-0 z-40 w-96 text-black from-gray-50 to-gray-100 h-screen ${
        showMenue ? "block" : `hidden`
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto space-y-3">
        {showMenue && (
          <button
            className="float-right text-xl text-black"
            onClick={() => setShowMenue(false)}
          >
            <RiCloseFill />
          </button>
        )}
        <div className="pt-5">
          <div className="rounded-md border px-4 py-1.5 space-y-1 bg-white shadow-md">
            <h1 className="font-semibold">Title</h1>
            <p className="text-xs font-medium text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              eligendi.
            </p>
          </div>
        </div>
      </div>
    </aside>
  </div>
  )
}

export default Header
