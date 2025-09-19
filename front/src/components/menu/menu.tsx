import { useEffect, useState } from "react";
import Logo from "../ui/logo/Logo";
import Style from "./menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${Style.nav} ${scrolled ? Style.scrolled : ""}`}>
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
