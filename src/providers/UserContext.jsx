import { createContext, useEffect, useState } from "react"
import { api } from "../service/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const UserContext= createContext({})

export const UserProvider= ({children}) => {

    const [user, setuser]= useState({})
    const navigate= useNavigate("")
    const idUser= JSON.parse(localStorage.getItem('@KenzieHub:userId'))

    useEffect(()=>{
        if(idUser){
            getUser()
        }

    },[])

    const newUser= async(data)=>{
        try {
            await api.post("/users", data)
            toast.success("Registrado com Sucesso")
            navigate("/")
        } catch (error) {
            {error.response.status==401?toast.error("Email já cadastrado no sistema"): toast.error("Cadastro não realizado erro na API")}
        }
    }
    const loginUser= async (data)=>{
        try {
            const response = await api.post("/sessions",data)
            localStorage.setItem('@KenzieHub:userToken',JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:userId',JSON.stringify(response.data.user.id))
            toast.success("Logado com Sucesso")
            navigate("/dashboard")
            
        } catch (error) {
            toast.error("Email ou senha incorreta!")
            
        }
    }
    const getUser=async()=>{
        try {
            await api.get(`/users/${idUser}`)
        } catch (error) {
            localStorage.clear()
            navigate("/")    
        }
    }
    return(
        <UserContext.Provider value={{ newUser, loginUser,idUser}}>
            {children}
        </UserContext.Provider>
    )
}