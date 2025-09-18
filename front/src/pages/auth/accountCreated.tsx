import Footer from "../../components/footer/footer";
import Style from "./style/index.module.css";
import { GrStatusGood } from "react-icons/gr";
import { useState } from "react";

const AccountCreated = () => {
  const [error, setError] = useState<string>("");
  return (
    <div>
      <div className={Style.container}>
        <form>
          <h1>Enviamos-te um email</h1>
          <i className={Style.icon}>
            <GrStatusGood />
          </i>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AccountCreated;
