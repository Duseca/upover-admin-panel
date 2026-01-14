
import {Routes, Route } from "react-router-dom";
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Categories from "./pages/Category/Categories";
import SubCategories from "./pages/SubCategory/SubCategories";
import Users from "./pages/Users/Users";
import UserDetail from "./pages/Users/UserDetail";
import Content from "./pages/Content/Content";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/Jobs/JobDetails";
import Login from "./pages/Auth/Login";
import SystemHealth from "./pages/System Health/SystemHealth";

function App() {

  return (
    <Routes>

    <Route path="/" element={<RootLayout />} >
     <Route index element={<Home />} />
     <Route path='/user' element={<Users />} />
     <Route path='/user/:userId' element={<UserDetail />} />
     <Route path='/category' element={<Categories />} />
     <Route path='/sub-category' element={<SubCategories />} />
     <Route path='/service' element={<Services />} />
     <Route path='/service/:serviceId' element={<ServiceDetail />} />
     <Route path='/job' element={<Jobs />} />
     <Route path='/job/:id' element={<JobDetails />} />
     <Route path='/system' element={<SystemHealth />} />
     <Route path='/content' element={<Content />} />
     </Route>
      <Route path='/login' element={<Login />} />
     </Routes>
  )
}

export default App
