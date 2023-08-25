import { Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "../pages/landing"
import Dashboard from "../pages/dashboard"

const AuthPath = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/registrasi" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>  
    </>
  )
}

export default AuthPath