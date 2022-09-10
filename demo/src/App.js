import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";

function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default App;