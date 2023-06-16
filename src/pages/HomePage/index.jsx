import { Link, useNavigate } from "react-router-dom"
import Logo from "../../components/Logo"
import { StyleHomePage } from "./style"
import { useEffect, useState } from "react"
import { api } from "../../service/api"

const HomePage = ()=>{
    const [user,setuser]=useState({})
    const navegate= useNavigate('')
    const idUser= JSON.parse(localStorage.getItem('@KenzieHub:userId'))

    useEffect(()=>{
        const getUser=async()=>{
            const response= await api.get(`/users/${idUser}`)
            setuser(response.data)
        }

        if(idUser==null){
            navegate("/")
        }else{
            getUser()
        }
    },[])
    const logout =()=>{
        localStorage.clear()
    }
    return (
        <StyleHomePage>
            <nav>
                <div className="box">
                    <Logo />
                    <Link to={"/"} onClick={logout}>Sair</Link>
                </div>
            </nav>
            <header className="userHeader">
                <div className="box">
                    <h2>Óla,{user.name}</h2>
                    <p>{user.course_module}</p>
                </div>
            </header>
            <section>
                <h2>Que pena! Estamos em desenvolvimento :{"("}</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
            
        </StyleHomePage>
    )
}

export default HomePage