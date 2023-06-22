import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import { StyleHomePage } from "./style"
import { useContext, useEffect } from "react"
import TechItem from "../../components/Tech"
import { TechContext } from "../../providers/TechContext"

const HomePage = ()=>{

    const {userTechs, getTechs,setuserTechs}= useContext(TechContext)
    
    useEffect(()=>{
        getTechs()
    },[])
    const logout =()=>{
        localStorage.clear()
        setuserTechs({})
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
                    <h2>Óla,{userTechs.name}</h2>
                    <p>{userTechs.course_module}</p>
                </div>
            </header>
            <section>
               <div>
                    <h2>Tecnologias</h2>
                    <button>+</button>
                </div>
                <ul>
                    {userTechs.techs? userTechs.techs.map((Element=><TechItem key={Element.id}><p>{Element.title}</p><p>{Element.status}</p></TechItem>)):<></>}
                </ul>
            </section>
            
        </StyleHomePage>
    )
}

export default HomePage