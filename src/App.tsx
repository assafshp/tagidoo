import "./App.css";
import InitCartPage from "./pages/InitCartPage/InitCartPage";
import VotingPage from "./pages/VotingPage/VotingPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import { Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/initCartPage" />} />
      <Route path="/initCartPage" element={<InitCartPage />} />
      <Route path="/votingPage" element={<VotingPage />} />
      <Route path="/resultsPage" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
