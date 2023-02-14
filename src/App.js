import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  let rows = 30;
  let cols = 50;
  let speed = 100;
  const [generation, setGeneration] = useState(0);
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
        if (Math.floor(Math.random() * 4) === 1) {
          copyGreed[i][j] = true;
        }
      }
    }
    setGridFull(copyGreed);
  };

  const playButton = () => {
    clearInterval(intervalId);
    let intervalId = setInterval(play, speed);
  };

  const play = () => {
    let g = gridFull;
    let g2 = [...gridFull];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < rows - 1) if (g[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    setGridFull(g2);
    setGeneration(generation + 1);
  };

  return (
    <div>
      <h1 onClick={play}>The Game of life</h1>
      <Grid selectBox={selectBox} cols={cols} gridFull={gridFull} rows={rows} />
      <h2>Generation: {generation}</h2>
    </div>
  );
}

export default App;
