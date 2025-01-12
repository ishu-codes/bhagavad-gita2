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

export const verse = {
  verse: [
    "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।। ४/७",
  ],
  transliteration: "",
  meaning:
    "हे भारतवंशी! जब-जब सत्धर्म की हानि और अधर्म की वृद्धि होती है, तब ही मैं स्वयं जन्म लेता हूँ।",
};
export const verseIcons = [
  { name: "Bookmark", icon: BookmarkIcon, isActive: false, action: null },
  { name: "Favourite", icon: FavouriteIcon, isActive: true, action: null },
  { name: "Audio", icon: AudioIcon, isActive: false, action: null },
  { name: "Download", icon: DownloadIcon, action: null },
  { name: "Share", icon: ShareIcon, action: null },
];
