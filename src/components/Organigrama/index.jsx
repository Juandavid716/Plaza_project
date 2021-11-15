import { Template } from "../Template";
import organigramaImg from "../../images/organigrama.jpeg";
import "./organigrama.css";

export const Organigrama = () => {
  return (
    <Template>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3
          className="title_section"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "36px",
            marginLeft: 0,
            textAlign: "initial",
            marginTop: "40px",
          }}
        >
          Organigrama
        </h3>
        <img
          style={{ justifyContent: "center", flexDirection: "column" }}
          src={organigramaImg}
          alt="organigrama"
          className="org"
        />
      </div>
    </Template>
  );
};
