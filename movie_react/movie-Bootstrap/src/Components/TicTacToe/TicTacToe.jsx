import React from "react";
import { useState } from "react";
import Board from "./Board";

const tictactoe = () => {
  const [boardVal, setBoardVal] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  return (
    <div>
      <Board boardVal={boardVal} setBoardVal={setBoardVal} />
    </div>
  );
};
export default tictactoe;
