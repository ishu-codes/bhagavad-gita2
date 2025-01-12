import { Link, useParams } from "react-router-dom";
import { sections, blogs, verse, verseIcons } from "../data/home";
import { ForwardIcon } from "../icons/HomeIcons";

export default function Home() {
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
        <h1 className="text-2xl font-bold uppercase font-yatra">
          Verse of the day
        </h1>
        <div className="w-full flex flex-col items-center px-32 py-4 space-y-6">
          <div className="w-full text-center p-4 text-2xl rounded-x font-yatra">
            {verse.verse.map((part, index) => (
              <h2 key={index}>{part}</h2>
            ))}
          </div>
          <p className="hidden md:block w-full text-center text-secondary-foreground text-[1.4rem] font-medium px-4 leading-10">
            {verse.meaning}
            {/* {dictionary["verse_meaning"]} */}
          </p>
          <div className="hidden md:flex w-full justify-evenly">
            {verseIcons.map((icon, index) => (
              // <Button
              <button
                key={index}
                // variant={"ghost"}
                className="h-auto p-1 md:p-2 rounded-full hover:bg-accent"
              >
                <icon.icon className="p-2" />
              </button>
              // </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
