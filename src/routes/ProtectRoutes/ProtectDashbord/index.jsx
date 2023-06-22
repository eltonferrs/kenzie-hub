import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../../providers/UserContext"

export const ProtectedDashboard=()=> {
    
    const {idUser}= useContext(UserContext)

    return idUser ? <Outlet />:<Navigate to={'/'}/>
}