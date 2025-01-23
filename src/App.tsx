import { Routes, Route, Navigate } from "react-router-dom";
import { Chapter, Chapters, Home, Navbar, Verses } from "./components";

export default function App() {
  return (
    <main className="w-full h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Navigate to="/hi" replace />} />
        <Route path=":lang" element={<Navbar />}>
          <Route index element={<Home />} />

          <Route path="chapters">
            <Route index element={<Chapters />} />
            <Route path=":chId">
              <Route index element={<Chapter />} />
              <Route path="verses">
                <Route index element={<Navigate to="../" replace />} />
                <Route path=":grpId" element={<Verses />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </main>
  );
}
