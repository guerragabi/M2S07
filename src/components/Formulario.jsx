import { useState, useEffect } from "react";
import "../css/Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const [message, setMessage] = useState(null);

  useEffect(() => {
    const isError = Object.values(formData).reduce((totalizador, item) => {
      if (!item) totalizador += 1;
      return totalizador;
    }, 0);

    if (isError > 0) {
      setMessage("Todos os campos devem ser preenchidos.");
    } else {
      setMessage("Todos os campos foram preenchidos.");
    }
  }, [formData]);

  return (
    <>
      <div className="div-form">
        <h2>Formulário</h2>
        <form>
          <div className="div-input">
            <input
              id="input-nome"
              type="text"
              placeholder="Digite seu nome"
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  nome: event.target.value,
                }))
              }
            />
            <input
              id="input-email"
              type="text"
              placeholder="Digite seu email"
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
            />
            <input
              id="input-idade"
              type="text"
              placeholder="Digite sua idade"
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  idade: event.target.value,
                }))
              }
            />

            <button className="btn-input">Cadastrar</button>
          </div>
        </form>

        <code>{message}</code>

        <div className="display">
          <h3>Nome: {formData.nome}</h3>
          <h3>Email: {formData.email}</h3>
          <h3>Idade: {formData.idade}</h3>
        </div>
      </div>
    </>
  );
}

export default Formulario;
