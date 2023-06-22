import { Link } from "react-router-dom"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import {StyleLoginPage} from "./style"
import { useForm } from "react-hook-form"
import { loginSchema } from "./loginSchema"
import {zodResolver} from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

const LoginPage= () =>{

    const {loginUser}= useContext(UserContext)

    const {register,handleSubmit, reset,formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})

    const submit=(data)=>{
        loginUser(data)
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