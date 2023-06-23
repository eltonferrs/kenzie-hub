import { useContext } from "react"
import Input from "../Input"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditTechSchema } from "./editTechSchema"
import { EditTechStyle } from "./style"

const EditTech= ()=>{
    
    const {nameTech ,handleModal, TechUppdate, idtech, TechDelete}= useContext(TechContext)
    const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver:zodResolver(EditTechSchema)})
    const optionValues=[ "Iniciante", "Intermediário", "Avançado"]

    const submit=(data)=>{
        TechUppdate(data,idtech)
        reset()
    }

    return(
        <EditTechStyle>
            <div className="modalHeader"> <h2>Tecnologia Detalhes</h2> <button onClick={handleModal}>x</button></div>
            <form onSubmit={handleSubmit(submit)}>
                <Input disabled={true} label={"Nome"} placeholder={nameTech}/>
                <Input select={true} label={"Selecionar Status"} optionValues={optionValues} 
                {...register("status")} errors={errors.status}/>
                <div className="buttons__box">
                    <button className="submitButton" >Salvar alterações</button>
                    <button onClick={(event)=>(event.preventDefault(),TechDelete(idtech),handleModal())}>Excluir</button>
                </div>
            </form>
        </EditTechStyle>
    )
}

export default EditTech