import { getLangNum } from "@/functions/lang";
import { GroupWVerseInterface } from "@/interface";
import { Link, useParams } from "react-router-dom";

type Props = {
  groups: GroupWVerseInterface[];
  numerals: string[];
};

function Phrases({
  phrases,
  verseCode,
  numerals,
}: {
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
      {`${result}${phrases.join(" ।  ")} ।।`}
      <span className="font-medium text-xl">{`${getLangNum(
        verseCode.slice(3),
        numerals
      )}`}</span>
    </>
  );
}

export default function Groups(props: Props) {
  const { lang, chId } = useParams();
  return (
    <>
      {props.groups.map((group, index) => (
        <Link
          to={`/${lang}/chapters/${chId}/verses/${group.id.slice(2)}`}
          className={`w-full rounded-xl text-center py-5 px-4 whitespace-normal hover:bg-accent hover:text-accent-foreground gap-4 space-y-1`}
          key={index}
        >
          {group.verses.map((ver, index) => (
            <div
              key={index}
              className="text-center"
              style={{ textJustify: "inter-word" }}
            >
              <p className="text-lg text-center text-balance" key={index}>
                <Phrases
                  phrases={ver.phrases}
                  verseCode={ver.code}
                  numerals={props.numerals}
                />
              </p>
            </div>
          ))}
        </Link>
      ))}
    </>
  );
}
