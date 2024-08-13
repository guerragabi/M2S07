import { useState } from "react"
import '../css/Contador.css'

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="div-contador">
        <h1>Contador</h1>
        <div >
          <div className="div-span">
            <span>{count}</span>
          </div>
          <div className="contador">
            <button
              className="menos"
              onClick={() => setCount((count) => count - 1)}
            >
              -
            </button>
            <button
              className="mais"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contador;
