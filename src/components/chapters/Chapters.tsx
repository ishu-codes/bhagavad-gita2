import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChapters } from "@/data";
import { Locale, i18n } from "@/i18n-config";
import { ChapterOnlyInterface } from "@/interface";
import TitleBar from "./TitleBar";
import ChapterName from "./ChapterName";
import { getDictionary } from "@/get-dictionary";

const getLocale = (lang?: string): Locale["code"] => {
  if (!lang) return "hi";
  return i18n.locales.find((loc) => loc["code"] === lang)
    ? (lang as Locale["code"])
    : "hi";
};

export default function Chapters() {
  const { lang } = useParams();
  const [chapters, setChapters] = useState<ChapterOnlyInterface[]>([]);
  const [dict, setDict] = useState<any>();

  useEffect(() => {
    getChapters(getLocale(lang)).then((res) => setChapters(res));
    getDictionary(getLocale(lang)).then((res) => setDict(res));
  }, [lang]);

  return (
    <div className="w-full flex pt-8">
      <div className="w-1/2 flex flex-col">
        <TitleBar backBtn={true} text="अध्याय" className="px-16" />
        <div className="w-full h-[calc(100vh-12rem)] pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {chapters.map((chapter, index) => (
            <ChapterName
              chId={chapter.id}
              name={chapter.name}
              desc={chapter.desc}
              key={index}
              numerals={dict.numerals}
            />
            // <h2 key={index}>{chapter.name}</h2>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col border-l-2 border-border">
        {/* <Chapter lang={lang} numerals={dict.numerals} /> */}
      </div>
    </div>
  );
}
