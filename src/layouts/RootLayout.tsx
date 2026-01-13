import  { useState } from 'react'
import Sidebar from './partials/Sidebar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    const [smallSidebar, setSmallSidebar] = useState<boolean>(false);
  return (
     <div>
      <Sidebar smallSidebar={smallSidebar} setSmallSidebar={setSmallSidebar} />
      <div className={`${smallSidebar ? "lg:ml-32" : "lg:ml-72"} mt-2.5`}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
