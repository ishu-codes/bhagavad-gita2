import {
  ChaptersIcon,
  VersesIcon,
  RandomIcon,
  BookmarksIcon,
  FavouritesIcon,
} from "../icons/HomeIcons";
import {
  BookmarkIcon,
  FavouriteIcon,
  AudioIcon,
  DownloadIcon,
  ShareIcon,
} from "../icons/VerseIcons";

export const sections = [
  {
    name: "Explore",
    subsections: [
      { name: "Chapters", href: "chapters", icon: ChaptersIcon },
      { name: "Verses", href: "verses", icon: VersesIcon },
      { name: "Random", href: "random", icon: RandomIcon },
    ],
  },
  {
    name: "Saved Content",
    subsections: [
      { name: "Bookmarks", href: "bookmarks", icon: BookmarksIcon },
      { name: "Favourites", href: "favourites", icon: FavouritesIcon },
    ],
  },
];
export const blogs = [
  "श्रीमद्भगवद्गीता क्या है ?",
  "श्रीमद्भगवद्गीता का भगवान कौन है ?",
];

export const verseGrp = {
  id: "4:7",
  translation:
    "जब जब धरती पर धर्म का पतन और अधर्म में वृद्धि होती है तब उस समय मैं पृथ्वी पर अवतार लेता हूँ।",
  meanings: {
    "यदा-यदा": "जब-जब भी",
    हि: "निश्चय ही",
    धर्मस्य: "धर्म की",
    ग्लानिः: "पतन",
    भवति: "होती",
    भारत: "भरतवंशी, अर्जुन",
    अभ्युत्थानम्: "वृद्धि",
    अधर्मस्य: "अधर्म की",
    तदा: "उस समय",
    आत्मानम्: "स्वयं को",
    सृजामि: "अवतार लेकर प्रकट होता हूँ",
    अहम्: "मैं",
  },
  secId: "04-01",
  verses: [
    {
      code: "04-07",
      phrases: [
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
        "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्",
      ],
    },
  ],
};

export const verseIcons = [
  { name: "Bookmark", icon: BookmarkIcon, isActive: false, action: null },
  { name: "Favourite", icon: FavouriteIcon, isActive: true, action: null },
  { name: "Audio", icon: AudioIcon, isActive: false, action: null },
  { name: "Download", icon: DownloadIcon, action: null },
  { name: "Share", icon: ShareIcon, action: null },
];
