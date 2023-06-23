import { useContext } from "react"
import Input from "../Input"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditTechSchema } from "./editTechSchema"

const EditTech= ()=>{
    
    const {nameTech ,handleModal, TechUppdate, idtech, TechDelete}= useContext(TechContext)
    const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver:zodResolver(EditTechSchema)})
    const optionValues=[ "Iniciante", "Intermediário", "Avançado"]

    const submit=(data)=>{
        TechUppdate(data,idtech)
        reset()
    }

    return(
        <div>
            <div> <h2>Tecnologia Detalhes</h2> <button onClick={handleModal}>x</button></div>
            <form onSubmit={handleSubmit(submit)}>
                <Input disabled={true} label={"Nome"} placeholder={nameTech}/>
                <Input select={true} label={"Selecionar Status"} optionValues={optionValues} 
                {...register("status")} errors={errors.status}/>
                <div>
                    <button >Salvar alterações</button>
                    <button onClick={(event)=>(event.preventDefault(),TechDelete(idtech),handleModal())}>Excluir</button>
                </div>
            </form>
        </div>
    )
}

export default EditTech