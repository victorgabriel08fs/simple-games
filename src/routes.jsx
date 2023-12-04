import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PaperScissorsRock from "./pages/PaperScissorsRock";
import Home from "./pages/Home";
import OldWomanGame from "./pages/OldWomanGame";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-600 flex flex-col min-h-screen h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Navigate to="/" />} path="/*" />
          <Route path="/games/paper-scissors-rock" element={<PaperScissorsRock />} />
          <Route path="/games/old-woman-game" element={<OldWomanGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default PublicRoutes;
