import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useQueryState } from "nuqs";
import { getChapter, getSection } from "@/data";
import { getLangNum } from "@/functions/lang";
import {
  ChapterWSectionInterface,
  Dict,
  SectionWGroupInterface,
} from "@/interface";
import TitleBar from "./TitleBar";
import ChapterName from "./ChapterName";
import { getDoubleDigit } from "@/functions/chapter";
import Groups from "./Groups";
// import { sections } from "@/data/home";

export default function Chapter() {
  const { chId, lang } = useParams();
  const [secId, setSecId] = useQueryState("sec", { defaultValue: "1" });
  const { dict } = useOutletContext<{ dict: Dict }>();
  const [chapter, setChapter] = useState<ChapterWSectionInterface>();
  const [section, setSection] = useState<SectionWGroupInterface>();

  useEffect(() => {
    getChapter(chId || "01", lang).then((res) => setChapter(res));
    getSection(
      `${getDoubleDigit(chId || "01")}-${getDoubleDigit(secId || "0")}`,
      lang
    ).then((res) => setSection(res));

    if (!secId) {
      console.log("Sec does not exist!");
      setSecId("1");
    }
  }, [chId, lang, secId]);
  return (
    <div className="w-full h-full flex">
      <div className="w-[45%] h-full flex flex-col border-r-2 border-border">
        <TitleBar
          backBtn={true}
          text={chapter?.name}
          secondaryText={`${dict?.chapter} ${getLangNum(
            chapter?.id || "01",
            dict?.numerals
          )}`}
          className="px-16"
        />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {chapter?.sections.map((section, index) => (
            <ChapterName
              as="btn"
              handleClick={() => setSecId((index + 1).toString())}
              active={secId == (index + 1).toString()}
              title={section.title}
              numbering={getLangNum(section.range, dict?.numerals)}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-[55%] h-full flex flex-col">
        <TitleBar
          text={chapter?.sections[parseInt(secId) - 1 || 0].title}
          className="px-16"
        />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-center overflow-y-auto">
          <Groups groups={section?.groups || []} numerals={dict?.numerals} />
        </div>
      </div>
    </div>
  );
}
