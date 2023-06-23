import { createContext, useState } from "react"
import { api } from "../service/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const TechContext= createContext({})

export const TechProvider= ({children}) => {

    const navigate= useNavigate("")
    const token=JSON.parse(localStorage.getItem('@KenzieHub:userToken'))
    const [modalType,setmodalType] = useState("")
    const [userTechs, setuserTechs] = useState({})
    const [idtech, setidtech]= useState("")
    const [nameTech, setnameTech] =useState("")
    const [modalIsOpen, setIsOpen] =useState(false)

    const handleModal=() =>{
        setIsOpen(!(modalIsOpen))
    }

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

    const addNewTech=async(data)=>{
        try {
            await api.post("/users/techs",data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            getTechs()
            toast.success("Tecnologia cadastrada!")
        } catch (error) {
            if(error.status==401){
                toast.error("Erro tecnologia já cadastrada!")
            }
            toast.error("Erro no cadastro!")
        }
    }

    const TechUppdate= async(data, idTech)=>{
        try {
            await api.put(`/users/techs/${idTech}`, data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            getTechs()
            toast.success("Tecnologia Atualizada!")
        } catch (error) {
            toast.error("Erro na Atualização!")
        }
    }

    const TechDelete= async(idTech)=>{
        try {
            await api.delete(`/users/techs/${idTech}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            getTechs()
            toast.success("Tecnologia Deletada!")
        } catch (error) {
            toast.error("Erro no Deletação!")
        }
    }

    return (
        <TechContext.Provider value={{ nameTech, setnameTech,TechDelete, idtech, setidtech, TechUppdate, modalType, setmodalType, addNewTech,getTechs,userTechs,setuserTechs, modalIsOpen, setIsOpen, handleModal}}>
            {children}
        </TechContext.Provider>
    )
}