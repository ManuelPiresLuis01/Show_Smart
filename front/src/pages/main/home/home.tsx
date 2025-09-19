import Style from "./home.module.css";
import { BiSearch } from "react-icons/bi";
import Menu from "../../../components/menu/menu";
import Footer from "../../../components/footer/footer";

const Home = () => {
  

  return (
    <div>
      <div className={Style.home1}>
        <Menu />
        <div
          className={Style.topContent}
        >
          <h1 className={Style.topTitle}>
            Faz um teste, recebe certificado digital com QR code verificado e
            prova que és profissional.
          </h1>
          <h2>EMBARCA NESTA AVENTURA!</h2>
          <div className={Style.search}>
            <i className={Style.iconSearch}>
              <BiSearch />
            </i>
            <input type="search" placeholder="Veja quais certificações temos" />
          </div>
          <button title="Começar a aventura!" className={Style.start}>
            Começar gratuitamente
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
