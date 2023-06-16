import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import { StyleHomePage } from "./style"

const HomePage = ({user})=>{
    const logout =()=>{
        localStorage.clear()
    }
    console.log(user)
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