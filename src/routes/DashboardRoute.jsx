import { Navigate, Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "../pages/landing"
import Dashboard from "../pages/dashboard"

const DashboardRoute = () => {
  return (
    <>
        <Routes>
            {/* <Route path='*' element={ <Navigate to="masuk"/>}/> */}
            <Route path="/masuk" element={<SignIn/>}/>
            <Route path="/registrasi" element={<SignUp/>}/>
            <Route path="/*" element={<Dashboard/>}/>
        </Routes>  
    </>
  )
}

export default DashboardRoute