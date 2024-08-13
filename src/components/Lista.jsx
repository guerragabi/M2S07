import { useState } from "react";
import "../css/Lista.css";

function Lista() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (texto) {
      setLista((listaAnterior) => {
        return [...listaAnterior, texto];
      });
      setTexto("");
    }
  }

  function handleClear() {
    setLista([]);
  }

  return (
    <>
      <div className="div-lista">
        <h2>Lista</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
        </form>
        <div className="btn">
          <button className="btn-limpar" onClick={handleClear}>
            Limpar
          </button>
          <button className="btn-add" onClick={handleSubmit}>
            Adicionar
          </button>
        </div>

        <ul className="lista">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Lista;
