import Style from "./style/index.module.css";
import LoginForm from "./components/loginForm";
import Menu from "../../components/menu/menu";

const Login = () => {
  return (
    <>
      <Menu />
      <div className={Style.container}>
        <div className={Style.containerBackground}></div>
        <div className={Style.containerForm}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
