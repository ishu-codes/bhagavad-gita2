import { Link, Outlet, useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { lang } = useParams();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header
        className="navbar fixed w-full flex items-center justify-between px-4 md:px-6 py-2"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <figure className="py-2">
          <Link to={`/${lang}`}>
            <img
              className="h-8 md:h-10 dark:hidden"
              src="/logo.svg"
              alt="logo"
            />
            <img
              className="h-8 md:h-10 hidden dark:block"
              src="/logo-dark.svg"
              alt="logo"
            />
          </Link>
        </figure>
        {/* <SearchBar /> */}
        <div className="hidden md:flex items-center space-x-4 gap-4">
          {/* <LanguageSelect lang={params.lang} /> */}
          {/* <DynamicThemeSelect /> */}
          Lang: {lang}
          <button onClick={toggleTheme}>Theme: {theme}</button>
        </div>
      </header>
      <div className="w-full h-screen pt-20">
        <Outlet />
      </div>
    </>
  );
}
