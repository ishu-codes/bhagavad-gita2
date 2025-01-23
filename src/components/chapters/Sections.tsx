import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
// import { getLocale } from "@/functions/chapter";
import { ChapterWSectionInterface } from "@/interface";
import { useCurrentChapterStore } from "@/stores";
import TitleBar from "./TitleBar";
import { getLangNum } from "@/functions/lang";
import { useParams } from "react-router-dom";
import { getChapter } from "@/data";
import ChapterName from "./ChapterName";

export default function Sections({
  numerals,
  chapterLocale,
}: {
  numerals: string[];
  chapterLocale: string;
}) {
  const { lang } = useParams();
  const [chapter, setChapter] = useState<ChapterWSectionInterface>();
  const chId = useCurrentChapterStore(useShallow((state) => state.chId));

  useEffect(() => {
    getChapter(chId, lang).then((res) => setChapter(res));
  }, [chId, lang]);
  return (
    <>
      <TitleBar
        text={chapter?.name}
        secondaryText={`${chapterLocale} ${getLangNum(
          chapter?.id || "01",
          numerals
        )}`}
        className="px-16"
      />
      <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
        {chapter?.sections.map((section, index) => (
          <ChapterName
            as="link"
            to={{ pathname: `./${chapter.id}`, search: `?sec=${index + 1}` }}
            active={false}
            title={section.title}
            numbering={getLangNum(section.range, numerals)}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
