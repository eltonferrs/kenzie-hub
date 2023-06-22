import { Link } from "react-router-dom"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { useForm } from "react-hook-form"
import { StyleRegister } from "./style"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./registerSchema"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

const RegisterPage= () => {

    const {newUser} = useContext(UserContext)
    
    const optionValues=[
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)"
    ]
    const{register,handleSubmit,reset, formState: {errors}}= useForm({resolver: zodResolver(registerSchema)})
   
    const registerUser=(data)=>{
        newUser(data)
        reset()
    }
    return(
        <StyleRegister>
            <div className="header">
                <Logo />
                <Link to={"/"}>Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <Input type={"text"} placeholder={"Digite aqui seu nome"} label={"Nome"} 
                {...register("name")} errors={errors.name} />
                <Input type={"email"} placeholder={"Digite aqui seu email"} label={"Email"} 
                {...register("email")} errors={errors.email}  />
                <Input type={"password"} placeholder={"Digite aqui sua senha"} label={"Senha"} 
                {...register("password")} errors={errors.password} />
                <Input type={"password"} placeholder={"Digite novamente sua senha"} label={"Confirmar Senha"} 
                {...register("confirm")} errors={errors.confirm} />
                <Input type={"text"} placeholder={"Fale sobre você"} label={"Bio"} 
                {...register("bio")} errors={errors.bio}/>
                <Input type={"text"} placeholder={"Opção de contato"} label={"Contato"} 
                {...register("contact")} errors={errors.contact}/>
                <Input select={true} label={"Selecionar módulo"} optionValues={optionValues} 
                {...register("course_module")} errors={errors.course_module} />
                <button>Cadastar</button>
            </form>
        </StyleRegister>
    )
}
export default RegisterPage