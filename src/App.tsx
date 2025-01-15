import { Routes, Route, Navigate } from "react-router-dom";
import { Chapter, Chapters, Home, Navbar } from "./components";

export default function App() {
  return (
    <main className="w-full h-screen bg-background text-foreground">
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
    </main>
  );
}
