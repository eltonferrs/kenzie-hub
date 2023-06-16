import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import {StyleLoginPage} from "./style"
import { useForm } from "react-hook-form"
import { loginSchema } from "./loginSchema"
import {zodResolver} from "@hookform/resolvers/zod"
import { api } from "../../service/api"

const LoginPage= ({ setUser }) =>{

    const navigate= useNavigate("")
    const {register,handleSubmit, reset,formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})
    const getUser= async (data)=>{
        try {
            const response = await api.post("/sessions",data)
            localStorage.setItem('@KenzieHub:userToken',JSON.stringify(response.data.token))
            setUser(response.data.user)
            localStorage.setItem('@KenzieHub:userId',JSON.stringify(response.data.user.id))
           // console.log(response.data)
            navigate("/dashboard")
            
        } catch (error) {
            console.log(error)
            //chama o tost de erro
        }
        finally{
            console.log("finally")
            //tost de sucesso e redireciona pra dash board
            //armazena o response.data no localStorage
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