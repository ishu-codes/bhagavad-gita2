import { verseIcons } from "@/data/home";
import { GroupWVerseInterface } from "@/interface";
// import { getLangNum } from "@/functions";

function Phrases({
  phrases,
}: //   verseCode,
//   numerals,
{
  phrases: string[];
  verseCode: string;
  numerals: string[];
}) {
  const len = phrases.length;
  if (len === 1) return <>{`${phrases[0]} ।`}</>;

  let result: string = "";
  if (len === 3) result += `${phrases.splice(0, 1)}- `;

  return (
    <>
      {result && <p>{result}</p>}
      <h2>
        {phrases[0]}
        {" ।"}
      </h2>
      <h2>
        {phrases[1]}
        {" ।।"}
      </h2>
    </>
  );
}

type Props = {
  title?: string;
  verseGrp?: GroupWVerseInterface;
  numerals: string[];
};

export default function Verse(props: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold uppercase font-yatra">
        {props.title ?? ""}
      </h1>
      <div className="w-full flex flex-col items-center py-4 space-y-6">
        <div className="w-full text-center p-4 text-2xl rounded-x font-yatra space-y-4">
          {props.verseGrp?.verses.map((ver, index) => (
            <div className="text-2xl text-center text-balance" key={index}>
              <Phrases
                phrases={ver.phrases}
                verseCode={ver.code}
                numerals={props.numerals}
              />
            </div>
          ))}
        </div>
        <p className="hidden md:block w-full text-center text-secondary-foreground text-[1.4rem] font-medium px-4 leading-10">
          {props.verseGrp?.translation}
          {/* {dictionary["verse_meaning"]} */}
        </p>
        <div className="hidden md:flex w-full justify-evenly px-24">
          {verseIcons.map((icon, index) => (
            // <Button
            <button
              key={index}
              // variant={"ghost"}
              className="h-auto p-2 md:p-2 rounded-full hover:bg-accent"
            >
              <icon.icon className="p-3" />
            </button>
            // </Button>
          ))}
        </div>
      </div>
    </>
  );
}
