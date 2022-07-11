import { useEffect, useState } from "react";
import { Piece } from "./piece.js";
import Square from "./square.js";
import Knight from "./knight.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
/** Styling properties applied to the board element */
const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};
/** Styling properties applied to each square element */
const squareStyle = { width: "12.5%", height: "12.5%" };
/**
 * The chessboard component
 * @param props The react props
 */
export const Board = ({ game }) => {
  const [[knightX, knightY], setKnightPos] = useState(game.knightPosition);
  useEffect(() => game.observe(setKnightPos));
  function renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere = x === knightX && y === knightY;
    const black = (x + y) % 2 === 1;
    const piece = isKnightHere ? <Knight /> : null;

    return (
      <DndProvider backend={HTML5Backend}>
        <div
          onClick={() => handleSquareClick(x, y)}
          key={i}
          style={{ width: "12.5%", height: "12.5%" }}
        >
          <Square black={black}>{piece}</Square>
        </div>
      </DndProvider>
    );
  }

  function handleSquareClick(toX, toY) {
    if (game.canMoveKnight(toX, toY)) {
      game.moveKnight(toX, toY);
    }
  }

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }
  return <div style={boardStyle}>{squares}</div>;
};
