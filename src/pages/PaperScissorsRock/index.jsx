import { useState } from "react";
import { FaHandScissors, FaHandBackFist, FaHand } from "react-icons/fa6";

const PaperScissorsRock = () => {
  const [result, setResult] = useState(null);
  const [machineChoose, setMachineChoose] = useState(null);
  const [choosed, setChoosed] = useState(null);

  const choose = (e) => {
    const possibilities = ["Paper", "Scissors", "Rock"];

    setChoosed(e);

    const randomChoose =
      possibilities[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    setMachineChoose(randomChoose);

    var roundResult = "";

    switch (e) {
      case "Paper":
        switch (randomChoose) {
          case "Paper":
            roundResult = "tie";
            break;
          case "Scissors":
            roundResult = "lose";
            break;
          case "Rock":
            roundResult = "win";
            break;
          default:
            roundResult = "error";
            break;
        }
        break;
      case "Scissors":
        switch (randomChoose) {
          case "Paper":
            roundResult = "win";
            break;
          case "Scissors":
            roundResult = "tie";
            break;
          case "Rock":
            roundResult = "lose";
            break;
          default:
            roundResult = "error";
            break;
        }
        break;
      case "Rock":
        switch (randomChoose) {
          case "Paper":
            roundResult = "lose";
            break;
          case "Scissors":
            roundResult = "win";
            break;
          case "Rock":
            roundResult = "tie";
            break;
          default:
            roundResult = "error";
            break;
        }
        break;
      default:
        roundResult = "error";
        break;
    }

    setResult(roundResult);
  };

  const reset = () => {
    setResult(null);
    setChoosed(null);
    setMachineChoose(null);
  };

  return (
    <main className="p-5 h-full w-full flex justify-center items-center">
      <div className="h-1/2 w-1/2  bg-slate-400 rounded-lg opacity-80">
        <div className="h-1/6 flex items-center bg-slate-500 rounded-t-lg p-5">
          <h2 className="font-bold text-lg"></h2>
        </div>
        <div className="p-5 h-5/6 rounded-b-lg flex gap-5 flex-col items-center justify-center">
          {result === null ? (
            <>
              <div>Choose one</div>
              <div className="flex flex-row justify-between gap-4">
                <FaHand
                  onClick={() => {
                    choose("Paper");
                  }}
                  className="cursor-pointer text-5xl"
                />
                <FaHandScissors
                  onClick={() => {
                    choose("Scissors");
                  }}
                  className="cursor-pointer text-5xl"
                />
                <FaHandBackFist
                  onClick={() => {
                    choose("Rock");
                  }}
                  className="cursor-pointer text-5xl"
                />
              </div>
            </>
          ) : (
            <>
              <p>
                You choosed "{choosed}" X The Machine choosed "{machineChoose}"
              </p>
              <b>You {result}</b>
              <button
                className="w-1/4 h-8 cursor-pointer bg-blue-400 rounded-lg font-bold"
                onClick={() => {
                  reset();
                }}
              >
                Play again
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default PaperScissorsRock;
