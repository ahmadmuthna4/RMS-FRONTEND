import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";


import Sidebar from './components/Sidebar/Sidebar'
import Pagenation from './components/Pagenation/Pagenation'
import Navbar from './components/Navbar/Navbar'

// Dashboard
import PublishedResearch from './Pages/Dashboard/PublishedResearch/PublishedResearch'
import RegisteredResearch from './Pages/Dashboard/RegisteredResearch/RegisteredResearch'
import Researchers from './Pages/Dashboard/Researchers/Researchers'


import Alerts from './Pages/Alerts/Alerts'
import Profile from './Pages/MYyProfile/Profile'
import Settings from './Pages/Settings/Settings'
import Report from './Pages/Report/Report'

import AddResearch from './Pages/AddResearch/AddResearch'
import PublishResearch from './Pages/AddResearch/PublishResearch'
// import Login from './Pages/Login/Login'
import Login from './Pages/forms/Login'
import Register from './Pages/forms/Register'
import ResearchsRegistereSigle from './Pages/ResearchsRegistereSigle/ResearchsRegistereSigle'

import { useSelector } from "react-redux";







const App = () => {
  const { user } = useSelector((state) => state.auth);
   if (!user) {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/Dashboard" />} />
          {/* No Sidebar, Navbar, or Pagenation */}
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
    <>
      <Sidebar />
      <Navbar />

      
         <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/Dashboard" />} />

            <Route path="/Dashboard" >
                <Route index element={ user ? <PublishedResearch />: <Navigate to="/Login" />} />
                <Route path="RegisteredResearch" element={user ?<RegisteredResearch />: <Navigate to="/Login" />} />
                <Route path="Researchers" element={user ?<Researchers />: <Navigate to="/Login" />} />
            </Route>

            <Route path="/AddResearch" >
                <Route index element={ user ? <AddResearch />: <Navigate to="/Login" />} />
                <Route path="PublishResearch" element={user ?<PublishResearch />: <Navigate to="/Login" />} />
            </Route>



            <Route path="/Alerts" element={user ?<Alerts />: <Navigate to="/Login" />} />
            <Route path="/AddResearch" element={user ?<AddResearch />: <Navigate to="/Login" />} />
            <Route path="/Profile/:id" element={user ?<Profile />: <Navigate to="/Login" />} />
            <Route path="/researchsRegistere/Single/:id" element={user ?<ResearchsRegistereSigle />: <Navigate to="/Login" />} />
            <Route path="/Settings" element={user ?<Settings />: <Navigate to="/Login" />} />
            <Route path="/Report" element={user ?<Report />: <Navigate to="/Login" />} />

         </Routes>


      



      {/* <Login /> */}
    </>
  </BrowserRouter>
  )
}

export default App