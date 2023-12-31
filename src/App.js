import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DishVoting from "./components/DishVoting";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

function App() {
  return<>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dishvoting" element={<DishVoting />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </>
  
}

export default App;
