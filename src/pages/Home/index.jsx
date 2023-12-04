import { useEffect, useState } from "react";
import { data } from "../../games";
import { Link } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Home = () => {
  const randomNum = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [selected, setSelected] = useState(null);
  const [positionSelected, setPositionSelected] = useState(null);
  useEffect(() => {
    const newPos = randomNum(data.length - 1, 0);
    setPositionSelected(newPos);
    setSelected(data[newPos]);
  }, []);

  const changeSelected = (to) => {
    var newPos = positionSelected + to;
    if (newPos === data.length) newPos = 0;
    if (newPos < 0) newPos = data.length - 1;

    setPositionSelected(newPos);
    setSelected(data[newPos]);
  };

  return (
    <main className="p-5 h-full w-full flex justify-center items-center">
      <div
        className={`h-1/2 w-1/2 ${
          selected == null ? "flex items-center justify-center" : ""
        } bg-slate-400 rounded-lg opacity-80`}
      >
        {selected != null ? (
          <>
            <div className="h-1/6 flex items-center bg-slate-500 rounded-t-lg p-5">
              <h2 className="font-bold text-lg">{selected.name}</h2>
            </div>
            <div className="p-5 h-5/6 rounded-b-lg flex gap-5 flex-row items-center justify-center">
              <div>
                <FaChevronCircleLeft
                  onClick={() => changeSelected(-1)}
                  className="text-3xl"
                />
              </div>
              <div className="w-72 h-72  flex flex-col gap-3">
                <img
                  className="w-auto rounded-3xl h-60 bg-white p-6"
                  src={`assets/${selected.slug}.png`}
                  alt=""
                />
                <Link
                  className="w-full h-14 rounded-xl font-bold bg-blue-500 flex justify-center items-center"
                  to={`/games/${selected.slug}`}
                >
                  Play
                </Link>
              </div>
              <div>
                <FaChevronCircleRight
                  onClick={() => {
                    changeSelected(1);
                  }}
                  className="text-3xl"
                />
              </div>
            </div>
          </>
        ) : (
          <VscLoading className="spining text-8xl" />
        )}
      </div>
    </main>
  );
};

export default Home;
