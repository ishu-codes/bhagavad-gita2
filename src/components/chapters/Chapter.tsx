import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useQueryState } from "nuqs";
import { getChapter, getGroups } from "@/data";
import { getLocale } from "@/functions/chapter";
import { getLangNum } from "@/functions/lang";
import { ChapterInterface, Dict, GroupInterface } from "@/interface";
import TitleBar from "./TitleBar";
import ChapterName from "./ChapterName";

export default function Chapter() {
  const { chId, lang } = useParams();
  const [secId, setSecId] = useQueryState("sec", { defaultValue: "1" });
  const { dict } = useOutletContext<{ dict: Dict }>();
  const [chapter, setChapter] = useState<ChapterInterface>();
  const [groups, setGroups] = useState<GroupInterface[]>();

  useEffect(() => {
    getChapter(chId || "01", getLocale(lang)).then((res) => setChapter(res));
    getGroups(chId || "01", secId || "0", getLocale(lang)).then((res) =>
      setGroups(res)
    );
    if (!secId) {
      console.log("Sec does not exist!");
      setSecId("1");
    }
  }, [chId, lang, secId]);
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full flex flex-col border-r-2 border-border">
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
      <div className="w-1/2 h-full flex flex-col">
        <TitleBar
          text={chapter?.sections[parseInt(secId) - 1 || 0].title}
          className="px-16"
        />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          {groups?.map((group, index) => (
            <ChapterName
              as="link"
              handleClick={() => console.log(group.code)}
              active={false}
              title={group.phrases
                .map((phrase: { title: string }) => phrase.title)
                ?.join(" ")}
              numbering={group.code}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
