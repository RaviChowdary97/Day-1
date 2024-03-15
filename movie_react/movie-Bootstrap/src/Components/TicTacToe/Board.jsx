import GameBox from "./GameBox";

const Board = ({ boardVal, setBoardVal }) => {
  return (
    <>
      <div className="board">
        {boardVal.map(() => (
          <GameBox />
        ))}
      </div>
    </>
  );
};
export default Board;
