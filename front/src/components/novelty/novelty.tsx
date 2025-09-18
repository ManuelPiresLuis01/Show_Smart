import Style from "./novelty.module.css";
import SeeMore from "../ui/btnSeeMore/seeMore";
import { Link } from "react-router-dom";
import type { NoveltyProps } from "../types/components.types";

const Novelty = (p: NoveltyProps) => {
  return (
    <div className={Style.novelty}>
      <div className={Style.banner}>
        <img src={p.banner} alt={p.title} />
      </div>
      <div className={Style.content}>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <Link to={`/v1/novelty/${p.id}`} className={Style.link}>
          <SeeMore />
        </Link>
      </div>
    </div>
  );
};

export default Novelty;
