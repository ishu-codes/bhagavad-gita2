import { Link, useOutletContext, useParams } from "react-router-dom";
import { sections, blogs, verseGrp } from "@/data/home";
import { ForwardIcon } from "@/icons/HomeIcons";
import { Dict } from "@/interface";
import Verse from "./Verse";

export default function Home() {
  const { dict } = useOutletContext<{ dict: Dict }>();
  const { lang } = useParams();
  return (
    <div className="w-full bg-background text-foreground flex flex-col md:flex-row pt-6">
      <div className="left flex-grow space-y-14 py-4">
        {sections.map((section, index) => (
          <div className="flex flex-col items-center space-y-2" key={index}>
            <h1 className="text-2xl font-bold uppercase font-yatra">
              {section.name}
            </h1>
            <div className="w-full flex justify-evenly">
              {section.subsections.map((subsec, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <Link
                    className="p-2 rounded-full hover:bg-accent"
                    to={`./${subsec.href}`}
                  >
                    <subsec.icon className="p-2" />
                  </Link>
                  <h2 className="text-center text-lg text-secondary-foreground font-medium font-yatra">
                    {subsec.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center px-24 space-y-4">
          <h1
            // className={cn(
            //     "text-2xl font-bold uppercase",
            //     yatraOne.variable
            // )}
            className={`text-2xl font-bold uppercase font-yatra`}
          >
            Blogs
          </h1>
          <div className="w-full flex items-center px-6 py-4 rounded-xl border-2 border-border">
            <div className="w-full flex-grow flex flex-col text-secondary-foreground">
              {blogs.map((blog, index) => (
                <h2 className="text-lg" key={index}>
                  {blog}
                </h2>
              ))}
            </div>
            <Link
              to={`/${lang}/blogs`}
              className="hover:bg-accent rounded-full"
            >
              <ForwardIcon className="p-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Verse Section */}
      <div className="w-1/2 flex flex-col items-center border-l-2 border-border pt-4">
        <Verse
          title="Verse of the Day"
          verseGrp={verseGrp}
          numerals={dict?.numerals}
        />
      </div>
    </div>
  );
}
