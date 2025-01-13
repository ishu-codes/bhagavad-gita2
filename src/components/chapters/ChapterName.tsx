import { useShallow } from "zustand/shallow";
import { useCurrentChapterStore } from "@/store/chapterStore";
import { getLangNum } from "@/functions/lang";
import { Button } from "../ui/button";

type Props = {
  chId: string;
  name: string;
  desc: string;
  numerals: string[];
};

export default function ChapterName(props: Props) {
  const [currentChId, setChId] = useCurrentChapterStore(
    useShallow((state) => [state.chId, state.setChId])
  );

  return (
    <Button
      variant={"ghost"}
      className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal ${
        currentChId === props.chId ? "bg-active pointer-events-none" : ""
      }`}
      onClick={() => setChId(props.chId)}
    >
      <p className="w-16 md:w-20 text-center text-[2rem]">
        {getLangNum(props.chId, props.numerals)}
      </p>
      <div className="w-full flex-grow flex flex-col items-start text-left">
        <h3 className="w-full text-xl font-semibold">{props.name}</h3>
        <p className="w-full text-sm font-normal text-muted-foreground">
          {props.desc}
        </p>
      </div>
    </Button>
  );
}
