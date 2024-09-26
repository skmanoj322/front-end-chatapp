import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Chatpage from "./pages/chatPage";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;
