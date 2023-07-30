import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// import { ResetPassword, SignIn, SignUp } from "../pages/landing"
import { Home } from "../pages/main"
import Navbar from "../components/Navbar"

const Routing = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='*' element={ <Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing