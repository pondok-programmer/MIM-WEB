import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Article, Home } from "../pages/main"
import { ResetPassword, } from '../pages/landing/'
import DashboardRoute from "./DashboardRoute"

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='*' element={ <Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path="/lupa-katasandi" element={<ResetPassword/>}/>
            <Route path='/dashboard/*' element={<DashboardRoute/>} />
            <Route path='/artikel/:path' element={<Article/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing