import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Article, Home } from "../pages/main"

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='*' element={ <Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/artikel/:path' element={<Article/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing