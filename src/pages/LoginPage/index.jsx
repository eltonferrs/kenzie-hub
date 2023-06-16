import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import {StyleLoginPage} from "./style"
import { useForm } from "react-hook-form"
import { loginSchema } from "./loginSchema"
import {zodResolver} from "@hookform/resolvers/zod"
import { api } from "../../service/api"
import { toast } from "react-toastify"

const LoginPage= () =>{

    const navigate= useNavigate("")
    const {register,handleSubmit, reset,formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})
    const getUser= async (data)=>{
        try {
            const response = await api.post("/sessions",data)
            localStorage.setItem('@KenzieHub:userToken',JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:userId',JSON.stringify(response.data.user.id))
            toast.success("Logado com Sucesso")
            setTimeout(()=>{ navigate("/dashboard") },3500)
            
        } catch (error) {
            toast.error("Email ou senha incorreta!")

        }
    }

    const submit=(data)=>{
        getUser(data)
        reset()
    }
    return(
        <StyleLoginPage>
            <Logo />
            <div className="box">
                <form onSubmit={handleSubmit(submit)} >
                    <h2>Login</h2>
                    <Input type={"email"} placeholder={"Digite seu Email"} errors={errors.email} label={"Email"} {...register("email")}/>
                    <Input type={"password"} placeholder={"Digite sua Senha"} errors={errors.password} label={"Senha"} {...register("password")}/>
                    <button >Entrar</button>
                </form>
                <p>Ainda não possui uma conta?</p>
                <Link to={"/register"}>Cadastre-se</Link>
            </div>
        </StyleLoginPage>
    )
}
export default LoginPage