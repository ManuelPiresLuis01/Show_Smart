import Footer from "../../components/footer/footer";
//import Logo from "../../components/ui/marvelLogo/Logo";
import { FaGoogle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { LuCircleCheck } from "react-icons/lu";
import Style from "./style/index.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [remember, setRemember] = useState<boolean>(false)
    const [error, setError] = useState<string>("");
    return (
        <div>
            <div className={Style.container}>
                <form>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="Email ou numero de Telefone" />
                    <input type={!remember ? "password" : "text"} placeholder="Senha" />
                    <p className={Style.remember} onClick={() => setRemember(!remember)}><i>{!remember ? <MdRadioButtonUnchecked /> : <LuCircleCheck className={Style.red} />}</i>Ver senha</p>
                     {error && <p className={Style.error}>{error}</p>}
                    <button className={Style.login}>Entrar</button>
                    <button className={Style.google}>Entrar com Google <i className={Style.red} ><FaGoogle /></i></button>
                    <div className={Style.authlinks}>
                        <Link to={"/auth/recovery"}>Esqueceu a senha?</Link>
                        <p>Novo? <Link to={"/auth/registration"}>Crie uma conta</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;