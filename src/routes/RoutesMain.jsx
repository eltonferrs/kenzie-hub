import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"

export const RoutesMain=() => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<HomePage  />} />
        </Routes>
    )
}
