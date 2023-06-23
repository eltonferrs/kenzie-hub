import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import { StyleHomePage } from "./style"
import { useContext, useEffect } from "react"
import TechItem from "../../components/Tech"
import { TechContext } from "../../providers/TechContext"
import Modal from "react-modal"
import AddTech from "../../components/AddTech"
import EditTech from "../../components/EditTech"

Modal.setAppElement("#root")
const HomePage = ()=>{

    const {modalType,setmodalType, userTechs, getTechs,setuserTechs,handleModal,modalIsOpen}= useContext(TechContext)
    
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
               <div className="addTech">
                    <h2>Tecnologias</h2>
                    <button className="newTech" onClick={()=>(handleModal(),setmodalType("create"))}>+</button>
                </div>
                <ul>
                    {userTechs.techs? userTechs.techs.map((Element=><TechItem id={Element.id} className={Element.title} key={Element.id}><p>{Element.title}</p><p className="status">{Element.status}</p></TechItem>)):<></>}
                </ul>
                <Modal isOpen={modalIsOpen} onRequestClose={handleModal}
                overlayClassName="modal-overlay" className="modal-content">
                    {modalType == "create"?<AddTech />:<EditTech />}
                </Modal>
                
            </section>
            
        </StyleHomePage>
    )
}

export default HomePage