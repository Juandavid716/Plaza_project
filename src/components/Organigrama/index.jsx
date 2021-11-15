import { Template } from "../Template";
import organigramaImg from "../../images/organigrama.jpeg";
import "./organigrama.css";

export const Organigrama = () => {
  return (
    <Template>
      <img src={organigramaImg} alt="organigrama" className="org" />
    </Template>
  );
};
