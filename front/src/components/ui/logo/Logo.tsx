import Style from "./Logo.module.css"
import { Link } from "react-router-dom";
const Logo = ()=> {
  return (
    <div className={Style.Logo}><Link to={"/v1/home"}>S</Link></div>
  );
}

export default Logo;