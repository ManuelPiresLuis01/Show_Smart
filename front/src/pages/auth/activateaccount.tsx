import Footer from "../../components/footer/footer";
import Style from "./style/index.module.css"
import { useState } from "react";

const ActivateAccount= () => {
    const [error, setError] = useState<string>("");
    return (
        <div>
            <div className={Style.container}>
                <form>
                    <h1>Enviamos-te um email</h1>
                    <input type="text" placeholder="Digite o codigo no seu email" />
                   {error && <p className={Style.error}>{error}</p>}
                    <button className={Style.login}>Ativar conta</button>
                    <div className={Style.resend}>
                        Reenviar
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ActivateAccount;