import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"

const TechItem= ({children,id, className})=>{
    const {setnameTech,setidtech, handleModal,setmodalType}= useContext(TechContext)
    return <li id={id} className={className} onClick={(event)=>(setidtech(event.target.id),handleModal(),setmodalType("edit"),setnameTech(event.target.className))}>{children}</li>
}
export default TechItem