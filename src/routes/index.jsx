import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Article, Home } from "../pages/main"
import { SignIn, } from '../pages/landing/'
import AuthPath from "./AuthPath"
import AuthRoute from "./AuthRoute"

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='*' element={ <Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/admin/*' element={<AuthRoute><AuthPath/></AuthRoute>} />
            <Route path='/artikel/:path' element={<Article/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing