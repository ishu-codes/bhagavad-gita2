import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import {
  ChapterInterface,
  Dict,
  GroupWVerseInterface,
  SectionWGroupInterface,
} from "@/interface";
import { getSectionAndGroup } from "@/data";
// import { getLangNum } from "@/functions";
import Groups from "./Groups";
import TitleBar from "./TitleBar";
import Verse from "../Verse";
import { getLangNum } from "@/functions";

export default function Verses() {
  const { chId, grpId, lang } = useParams();
  const { dict } = useOutletContext<{ dict: Dict }>();
  const [chapter, setChapter] = useState<ChapterInterface>();
  const [section, setSection] = useState<SectionWGroupInterface>();
  const [group, setGroup] = useState<GroupWVerseInterface>();

  const getGroupId = () => {
    if (chId && grpId) return parseInt(chId).toString() + ":" + grpId;
    return "1:1";
  };

  useEffect(() => {
    getSectionAndGroup(getGroupId(), lang).then((res) => {
      setChapter(res.chapter);
      setSection(res.section);
      setGroup(res.group);
    });
  }, [grpId, lang, chId]);
  return (
    <div className="w-full h-full flex">
      <div className="w-[55%] h-full flex flex-col border-r-2 border-border">
        <TitleBar
          backBtn={true}
          text={section?.title}
          // secondaryText={`${dict?.chapter} ${getLangNum(
          //   chId || '01',
          //   dict?.numerals
          // )}`}
          className="px-16"
        />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-start overflow-y-auto">
          <Groups groups={section?.groups || []} numerals={dict?.numerals} />
        </div>
      </div>
      <div className="w-[45%] h-full flex flex-col">
        <TitleBar
          text={`${dict?.verse} ${getLangNum(
            group?.id || "1:1",
            dict?.numerals
          )}`}
          // secondaryText={`${dict?.chapter} ${getLangNum(chId || "01", dict?.numerals)}`}
          secondaryText={chapter?.name}
          className="px-16"
        />
        <div className="w-full h-full pt-4 pb-4 px-16 flex flex-col items-center overflow-y-auto">
          <Verse verseGrp={group} numerals={dict?.numerals} />
        </div>
      </div>
    </div>
  );
}
