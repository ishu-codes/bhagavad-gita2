import { Routes, Route, Navigate } from "react-router-dom";
import { Chapter, Chapters, Home, Navbar } from "./components";
import "./App.css";

function App() {
  // const getFontLink = (url: string) => {
  //   const fontLink: HTMLLinkElement = document.createElement("link");
  //   fontLink.rel = "stylesheet";
  //   fontLink.href = url;
  //   document.head.appendChild(fontLink);
  //   console.log(url);
  //   return fontLink;
  // };

  // useEffect(() => {
  //   let fontLink: HTMLLinkElement;
  //   getDictionary(getLocale(lang)).then((res) => {
  //     setDict(res);
  //     fontLink = getFontLink(res.font.url);
  //   });

  //   console.log("Lang changed!");

  //   return () => {
  //     if (fontLink) document.head.removeChild(fontLink);
  //   };
  // }, [lang]);

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

export default App;
