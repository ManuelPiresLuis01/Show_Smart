import Footer from "../../components/footer/footer";
import Style from "./style/index.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Recovery= () => {
    const [error, setError] = useState<string>("");
    const [email,setEmail] = useState<string>("")
    const navigate =useNavigate()

    const submit =(e: React.FormEvent) => {
    e.preventDefault();
        navigate(`/auth/newpass/${email}`)
    }
    return (
        <div>
            <div className={Style.container}>
                <form onSubmit={submit}>
                    <h1>Upsi! voce perdeu sua conta</h1>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Digite o seu email" />
                   {error && <p className={Style.error}>{error}</p>}
                    <button className={Style.login}>Recuperar conta</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Recovery;