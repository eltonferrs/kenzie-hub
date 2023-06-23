import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"
import { AutoLogin } from "./ProtectRoutes/AutoLogin"
import { ProtectedDashboard } from "./ProtectRoutes/ProtectDashbord"
import { TechProvider } from "../providers/TechContext"

export const RoutesMain=() => {
    return(
        <Routes>
            <Route element={<AutoLogin/>}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedDashboard />}>
                <Route path="/dashboard" element={
                <TechProvider>
                    <HomePage  />
                </TechProvider> } />
            </Route>
        </Routes>
    )
}
