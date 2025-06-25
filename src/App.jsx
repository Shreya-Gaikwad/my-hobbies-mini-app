import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <>
      <div
        className={
          isDarkMode
            ? "bg-dark text-light min-vh-100"
            : "bg-white text-dark min-vh-100"
        }
      >
        <div className="container py-3">
          <div className="text-end">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={toggleTheme}
            >
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
