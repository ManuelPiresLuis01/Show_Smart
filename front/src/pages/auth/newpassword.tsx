import Footer from "../../components/footer/footer";
import Style from "./style/index.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword= () => {
     const [error, setError] = useState<string>("");
      const [email,setEmail] = useState<string>("")
    const navigate =useNavigate()

    const submit =(e: React.FormEvent) => {
    e.preventDefault();
        navigate(`/auth/login`)
    }
   
    return (
        <div>
            <div className={Style.container}>
                <form onSubmit={submit}>
                    <h1>Nova senha</h1>
                    <input type="text" placeholder="Digite o codigo no seu email" />
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Digite a nova password" />
                   {error && <p className={Style.error}>{error}</p>}
                    <button className={Style.login}>Definir senha</button>
                    <div className={Style.resend}>
                        Reenviar codigo
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default NewPassword;