import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  let rows = 30;
  let cols = 50;
  const [gridFull, setGridFull] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const selectBox = (row, col) => {
    let copyGreed = [...gridFull];
    copyGreed[row][col] = !copyGreed[row][col];
    setGridFull(copyGreed);
  };

  const generateSeed = () => {
    let copyGreed = [...gridFull];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random()) * 4 === 1) {
          copyGreed[i][j] = true;
        }
      }
    }
    setGridFull(copyGreed);
  };

  return (
    <div>
      <h1>The Game of life</h1>
      <Grid selectBox={selectBox} cols={cols} gridFull={gridFull} rows={rows} />
      <h2>Generation: </h2>
    </div>
  );
}

export default App;
