// import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Chapter, Chapters, Home, Navbar } from "./components";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Navigate to="/hi" replace />} />
        <Route path=":lang" element={<Navbar />}>
          <Route index element={<Home />} />

          <Route path="chapters">
            <Route index element={<Chapters />} />
            <Route path=":chId" element={<Chapter />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
