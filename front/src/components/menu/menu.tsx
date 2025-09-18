import Logo from "../ui/logo/Logo";
import Style from "./menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={Style.nav}>
      <Logo />
      <ul className={Style.navLinks}>
        <li>
          <Link to="">Inicio</Link>
        </li>
        <li>
          <Link to="">Certificações</Link>
        </li>
        <li>
          <Link to="">Validar Certificado</Link>
        </li>
        <li>
          <Link to="">Sobre</Link>
        </li>
      </ul>

      <div className={Style.authLinks}>
        <Link to="/auth/login" title="Entrar" className={Style.login}>
          Entrar
        </Link>
        <Link
          to="/auth/registration"
          title="Registrar-se"
          className={Style.registration}
        >
          Cadastrar-se
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
