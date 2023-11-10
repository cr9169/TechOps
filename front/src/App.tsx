import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AuthPage from "./components/AuthPage/AuthPage";
// import "./App.scss";

function App() {
  return (
    <Router>
      <div className="main-app-orientation">
        <Routes>
          <Route path="/authPage" element={<AuthPage />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
