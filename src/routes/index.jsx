import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../pages/main"
import { Navbar } from "../components"

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