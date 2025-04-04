import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCoinPage from "./pages/CreateCoinPage";
import SwapPage from "./pages/SwapPage";
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCoinPage />} />
        <Route path="/swap" element={<SwapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
