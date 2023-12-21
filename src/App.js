import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DishVoting from "./components/DishVoting";
import Result from "./components/Result";
import "./App.css";

function App() {
  return<>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dishvoting" element={<DishVoting />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  
}

export default App;
