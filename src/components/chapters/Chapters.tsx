import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { useCurrentChapterStore } from "@/stores";
import { getChapters } from "@/data";
import { getLocale } from "@/functions/chapter";
import { getDictionary } from "@/get-dictionary";
import { ChapterOnlyInterface } from "@/interface";
import { getLangNum } from "@/functions/lang";
import ChapterName from "./ChapterName";
import TitleBar from "./TitleBar";
import Sections from "./Sections";

export default function Chapters() {
  const { lang } = useParams();
  const [chapters, setChapters] = useState<ChapterOnlyInterface[]>([]);
  const [dict, setDict] = useState<any>();

  const [currentChId, setChId] = useCurrentChapterStore(
    useShallow((state) => [state.chId, state.setChId])
  );

  useEffect(() => {
    getDictionary(getLocale(lang)).then((res) => setDict(res));
    getChapters(getLocale(lang)).then((res) => setChapters(res));
  }, [lang]);

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full flex flex-col">
        <TitleBar backBtn={true} text={dict?.chapter} className="px-16" />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {chapters.map((chapter, index) => (
            <ChapterName
              as="btn"
              handleClick={() => setChId(chapter.id)}
              active={chapter.id === currentChId}
              title={chapter.name}
              subtitle={chapter.desc}
              numbering={getLangNum(chapter.id, dict?.numerals)}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col border-l-2 border-border">
        <Sections numerals={dict?.numerals} chapterLocale={dict?.chapter} />
      </div>
    </div>
  );
}
