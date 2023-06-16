import { StyleInput } from "./style"
import { forwardRef } from "react"

const Input= forwardRef(({ label,select, errors, modulesCurse,...rest }, ref)=>{
    return(
        <StyleInput>
            {label? <label>{label}</label> : <></> }
            {select ?<select ref={ref} {...rest} ><option hidden></option>{modulesCurse.map((Element)=><option  key={Element}>{Element}</option>)}</select>:<input  ref={ref} {...rest} />}
            {errors?<p>{errors.message}</p>:<></>}
        </StyleInput>
    )
})
export default Input