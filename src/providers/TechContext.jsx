import { createContext, useState } from "react"
import { api } from "../service/api"
import { useNavigate } from "react-router-dom"

export const TechContext= createContext({})

export const TechProvider= ({children}) => {

    const navigate= useNavigate("")
    const token=JSON.parse(localStorage.getItem('@KenzieHub:userToken'))
    const [userTechs, setuserTechs] = useState({})
    
    const getTechs= async()=>{
        try {
            const {data}= await api.get("/profile",{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setuserTechs(data)
        } catch (error) {
            localStorage.clear()
            navigate("/")
        }
        
    }

    return (
        <TechContext.Provider value={{getTechs,userTechs,setuserTechs}}>
            {children}
        </TechContext.Provider>
    )
}