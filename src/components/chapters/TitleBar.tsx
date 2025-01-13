import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
import { LeftArrow } from "@/icons/NavIcons";

interface Props {
  text?: string | React.ReactNode;
  secondaryText?: string | React.ReactNode;
  backBtn?: boolean;
  className?: string;
}

export default function TitleBar(
  props: Props = {
    text: "",
    secondaryText: "",
    backBtn: false,
    className: "",
  }
) {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full flex items-center justify-between border-b-2 border-border ${props.className}`}
    >
      <button
        // variant={"ghost"}
        className={`p-1 rounded-full hover:bg-accent hover:text-accent-foreground ${
          props.backBtn ? "" : "opacity-0 -z-10"
        }`}
        onClick={() => navigate(-1)}
      >
        <LeftArrow className="w-full" />
      </button>
      <h2 className="text-2xl font-semibold">{props.text}</h2>
      <h3
        className={`min-w-6 text-xl ${
          props.secondaryText ? "" : "opacity-0 -z-10"
        }`}
      >
        {props.secondaryText}
      </h3>
    </div>
  );
}
