import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { getLocale } from "@/data/langs";
import { getDictionary } from "@/get-dictionary";
import LanguageSelect from "./LanguageSelect";
import SearchBar from "./SearchBar";
import Theme from "./Theme";
import { Dict } from "@/interface";

export default function Navbar() {
  const { lang } = useParams();
  const [dict, setDict] = useState<Dict | undefined>();

  useEffect(() => {
    let fontLink: HTMLLinkElement | null = null;

    const updateDictionaryAndFont = async () => {
      const dictionary = await getDictionary(getLocale(lang));
      setDict(dictionary);

      if (fontLink && document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }

      fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = dictionary.font.url;

      fontLink.onload = () => {
        document.head.appendChild(fontLink!);
      };

      fontLink.onerror = () => {
        console.error("Failed to load font:", dictionary.font.url);
      };
    };

    updateDictionaryAndFont();

    return () => {
      if (fontLink && document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, [lang]);

  return (
    <>
      <header
        className="navbar fixed w-full flex items-center justify-between px-4 md:px-6 py-2 z-50"
        style={{ backdropFilter: "blur(8px)", fontFamily: dict?.font.family }}
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
        <SearchBar searchHere={dict?.search_here || ""} />
        <div className="hidden md:flex items-center space-x-4 gap-4">
          <LanguageSelect />
          <Theme />
        </div>
      </header>
      <div
        className="w-full h-screen pt-20"
        style={{ fontFamily: dict?.font.family }}
      >
        <NuqsAdapter>
          <Outlet context={{ dict }} />
        </NuqsAdapter>
      </div>
    </>
  );
}
