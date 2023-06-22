const TechItem= ({children})=>{
    
    return(
        <li onClick={(event)=>console.log(event.target)}>{children}</li>
    )
}
export default TechItem