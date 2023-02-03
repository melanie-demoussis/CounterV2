import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // J'ai un tableau vide
  const tab = [];
  // Dans lequel je veux ajouter mes counter/setcounter quand j'appui sur Add.

  return (
    <div className="App">
      <header>
        <div>
          <p>"logo"</p>
          <h1>React Counter V2</h1>
        </div>
      </header>

      <main>
        <div>
          <button>add</button>
        </div>

        <div className="counter">
          <button
            onClick={() => {
              return setCounter(counter - 1);
            }}
          >
            moins
          </button>
          <p>{counter}</p>
          <button
            onClick={() => {
              return setCounter(counter + 1);
            }}
          >
            plus
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              return setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
