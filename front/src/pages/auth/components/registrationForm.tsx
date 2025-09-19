import { useState } from "react";
import type{ user } from "../../../service/types/auth.types";
import TermsModal from "../../../components/modals/termsmodal/termsmodal";
import newOrder from "../../../service/authservice/registry";
import Style from "../style/index.module.css"
import { FaGoogle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { LuCircleCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<user>({} as user);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) return setError("Aceite os termos");
    setError("");
    setLoading(true);
    try {
      await newOrder.Registry(user);
    } catch (error: any) {
      setLoading(false);
      setError("Preencha tudo por favor");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <h1>Registro</h1>
      <input
        type="text"
        placeholder="Nome"
        required
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email "
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        required
        type="password"
        placeholder="Senha"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <select
        required
        onChange={(e) => setUser({ ...user, idiom: e.target.value })}
      >
        <option disabled selected>
          Selecione o seu idioma
        </option>
        <option value="Portuguese">Português</option>
        <option value="English">English</option>
      </select>
      <select
        required
        onChange={(e) => setUser({ ...user, gender: e.target.value })}
      >
        <option disabled selected>
          Selecione o gênero
        </option>
        <option value="Male">Masculino</option>
        <option value="Female">Feminino</option>
        <option value="Other">Outro</option>
      </select>
      <input
        type="date"
        onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
      />

      <p className={Style.remember}>
        <i
          onClick={() => {
            setTerms(true);
            setUser({ ...user, terms: true });
          }}
        >
          {!terms ? (
            <MdRadioButtonUnchecked />
          ) : (
            <LuCircleCheck className={Style.red} />
          )}
        </i>
        Aceito os{" "}
        <span onClick={() => setShowModal(true)}>termos e condições</span>
      </p>
      <TermsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <p className={Style.error}>{error}</p>

      <button className={Style.login}>
        {!loading ? "Registrar" : "Registrando ..."}
      </button>
      <button className={Style.google}>
        Registrar com Google{" "}
        <i className={Style.red}>
          <FaGoogle />
        </i>
      </button>
      <div className={Style.authlinks}>
        <Link to={"/auth/login"}>Ja tenho uma conta !</Link>
      </div>
    </form>
  );
}
