import { useState } from "react";
import Box from "./Box";

export default function Grid({ rows, cols, gridFull, selectBox }) {
  var boxClass = "";
  var rowsArr = [];

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      let boxId = i + "_" + j;
      boxClass = gridFull[i][j] ? "box on" : "box off";
      rowsArr.push({ boxClass, i, j, boxId });
    }
  }

  return (
    <div className="grid" style={{ width: cols * 15 + 30 }}>
      {rowsArr.map((e) => (
        <div
          onClick={() => selectBox(e.i, e.j)}
          className={e.boxClass}
          key={e.boxId}
        ></div>
      ))}
    </div>
  );
}
