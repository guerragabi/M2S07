import "./App.css";
import Lista from "./components/Lista";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Noticia from "./components/Noticia";

function App() {
  return (
    <>
      <div className="div-app">
        <Lista></Lista>
        <div className="div-form-cont">
          <Contador></Contador>
          <Formulario></Formulario>
        </div>
        <Noticia></Noticia>
      </div>
    </>
  );
}

export default App;
