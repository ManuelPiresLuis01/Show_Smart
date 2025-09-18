import Style from "./footer.module.css";
import Logo from "../ui/logo/Logo";
import { BiSearch } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <Logo />
        <ul>
          <li className={Style.title}>Contactos</li>
          <li>
            <FaFacebook />
            Facebook
          </li>
          <li>
            <RiInstagramFill />
            Instagram
          </li>
          <li>
            <BsTwitterX />
            Twitter
          </li>
        </ul>
        <ul>
          <li className={Style.title}>Navegação</li>
          <li>Inicio</li>
          <li>Certificações</li>
          <li>Validar Certificado</li>
          <li>Sobre</li>
        </ul>
        <div className={Style.selectSearch}>
          <select>
            <option disabled>Selecionar Idioma</option>
            <option value="">Português</option>
            <option value="">Inglês</option>
          </select>
          <div className={Style.search}>
            <i className={Style.iconSearch}>
              <BiSearch />
            </i>
            <input
              type="search"
              placeholder="Veja quais certificações temos..."
            />
          </div>
          <p className={Style.Fquestion}>Perguntas frequentes !</p>
        </div>
      </div>
      <p>
        Site developed by Manuel Pires Luís. ©{" "}
        {currentYear} Show Smart
      </p>
    </footer>
  );
};

export default Footer;
