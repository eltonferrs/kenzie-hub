import { useForm } from "react-hook-form"
import Input from "../Input"
import { AddTechStyle } from "./style"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddTechSchema } from "./addTechSchema"


const AddTech= ()=> {

    const {register, handleSubmit, reset,formState:{errors}} = useForm({resolver:zodResolver(AddTechSchema)})
    const optionValues=[ "Iniciante", "Intermediário", "Avançado"]
    const {addNewTech,handleModal}= useContext(TechContext)

    const submit=(data)=>{
        addNewTech(data)
        reset()
    }
    return(
        <AddTechStyle>
            <div className="modalHeader"> <h2>Cadastrar Tecnologia</h2> <button onClick={handleModal}>x</button></div>
            <form onSubmit={handleSubmit(submit)}>
                <Input type={"text"} placeholder={"Digite a tecnologia"} label={"Nome"}
                {...register("title")} errors={errors.title} />
                <Input select={true} label={"Selecionar Status"} optionValues={optionValues} 
                {...register("status")} errors={errors.status}/>
                <button>Cadastrar Tecnologia</button>
            </form>
        </AddTechStyle>
    )
}

export default  AddTech