import { useState } from "react";

const OldWomanGame = () => {
  const [matriz, setMatriz] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [finalResult, setFinalResult] = useState(null);
  const [turn, setTurn] = useState("X");
  const mark = (x, y) => {
    if (matriz[x][y] === "") {
      var m = matriz;
      m[x][y] = turn;
      setMatriz(m);

      const possibilities = ["X", "O"];
      var result = false;
      for (var p = 0; p < 2; p++) {
        for (var i = 0; i < 3; i++) {
          if (
            (matriz[i][0] === possibilities[p] &&
              matriz[i][1] === possibilities[p] &&
              matriz[i][2] === possibilities[p]) ||
            (matriz[0][i] === possibilities[p] &&
              matriz[1][i] === possibilities[p] &&
              matriz[2][i] === possibilities[p]) ||
            (matriz[0][0] === possibilities[p] &&
              matriz[1][1] === possibilities[p] &&
              matriz[2][2] === possibilities[p]) ||
            (matriz[0][2] === possibilities[p] &&
              matriz[1][1] === possibilities[p] &&
              matriz[2][0] === possibilities[p])
          ) {
            result = possibilities[p];
            setFinalResult(result);
          }
        }
      }
    }

    if (!matriz.map((item)=>(item.includes(""))) && finalResult === null) {
      setFinalResult("Tie");
    }
    if (finalResult !== null) {
      alert(finalResult);
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  return (
    <main className="p-5 h-full w-full flex justify-center items-center">
      <div className="h-1/2 w-1/2  bg-slate-400 rounded-lg opacity-80">
        <div className="h-1/6 flex items-center bg-slate-500 rounded-t-lg p-5">
          <h2 className="font-bold text-lg"></h2>
        </div>
        <div className="p-5 h-5/6 rounded-b-lg flex gap-5 flex-col items-center justify-center">
          <div className="grid grid-cols-3">
            <div
              onClick={() => {
                mark(0, 0);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-r-2 border-b-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[0][0]}
            </div>
            <div
              onClick={() => {
                mark(0, 1);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-r-2 border-b-2 border-l-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[0][1]}
            </div>
            <div
              onClick={() => {
                mark(0, 2);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-l-2 border-b-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[0][2]}
            </div>
            <div
              onClick={() => {
                mark(1, 0);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-t-2 border-r-2 border-b-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[1][0]}
            </div>
            <div
              onClick={() => {
                mark(1, 1);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[1][1]}
            </div>
            <div
              onClick={() => {
                mark(1, 2);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-l-2 border-t-2 border-b-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[1][2]}
            </div>
            <div
              onClick={() => {
                mark(2, 0);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-t-2 border-r-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[2][0]}
            </div>
            <div
              onClick={() => {
                mark(2, 1);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-l-2 border-t-2 border-r-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[2][1]}
            </div>
            <div
              onClick={() => {
                mark(2, 2);
              }}
              className="select-none cursor-pointer p-3 flex justify-center items-center border-l-2 border-t-2 w-12 h-12 text-lg font-bold"
            >
              {matriz[2][2]}
            </div>
          </div>
      <button>Play again</button>
        </div>
      </div>
    </main>
  );
};

export default OldWomanGame;
