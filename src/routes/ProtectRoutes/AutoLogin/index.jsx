import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../../providers/UserContext"

export const AutoLogin=()=> {
    const {idUser}= useContext(UserContext)

    return idUser ? <Navigate to={"/dashboard"}/> :<Outlet />
}