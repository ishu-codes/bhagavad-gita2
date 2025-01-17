import { Link, type To } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  as: "link" | "btn";
  active: boolean;
  title: string;
  subtitle?: string;
  numbering: string;
  handleClick?: () => void;
  to?: To;
};

function InnerContent(props: {
  numbering: string;
  title: string;
  subtitle?: string;
}) {
  if (props.subtitle)
    return (
      <>
        <p className="w-16 md:w-20 text-center text-[2rem]">
          {props.numbering}
        </p>
        <div className="w-full flex-grow flex flex-col items-start text-left">
          <h3 className="w-full text-xl font-semibold">{props.title}</h3>
          <p className="w-full text-sm font-normal text-muted-foreground">
            {props.subtitle}
          </p>
        </div>
      </>
    );
  return (
    <>
      <p className="w-20 md:w-32 text-center text-2xl">{props.numbering}</p>
      <h3 className="w-full text-left text-lg font-medium">{props.title}</h3>
    </>
  );
}

export default function ChapterName(props: Props) {
  return props.as === "btn" ? (
    <Button
      variant={"ghost"}
      className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal ${
        props.active ? "bg-active pointer-events-none" : ""
      }`}
      onClick={props.handleClick}
    >
      <InnerContent
        numbering={props.numbering}
        title={props.title}
        subtitle={props.subtitle}
      />
    </Button>
  ) : (
    <Link
      to={props.to ?? "./"}
      className={`w-full h-auto flex rounded-xl py-5 pl-2 pr-4 whitespace-normal hover:bg-accent hover:text-accent-foreground gap-4 ${
        props.active ? "bg-active pointer-events-none" : ""
      }`}
    >
      <InnerContent
        numbering={props.numbering}
        title={props.title}
        subtitle={props.subtitle}
      />
    </Link>
  );
}
