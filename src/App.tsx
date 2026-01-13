
import {Routes, Route } from "react-router-dom";
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

function App() {

  return (
    <Routes>

    <Route path="/" element={<RootLayout />} >
     <Route index element={<Home />} />
     </Route>
     </Routes>
  )
}

export default App
