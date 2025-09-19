import Style from "./style/index.module.css";
import Menu from "../../components/menu/menu";
import RegistrationForm from "./components/registrationForm";

const Registration = () => {
  return (
    <>
      <Menu />
      <div className={Style.container}>
        <div className={Style.containerBackground}></div>
        <div className={Style.containerForm}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Registration;
