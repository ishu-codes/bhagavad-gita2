type VerseInterface = {
  code: string;
  phrases: string[];
};

export type GroupInterface = {
  id: string;
  translation: string;
  meanings: { [key: string]: string };
  secId: string;
};
export type GroupWVerseInterface = GroupInterface & {
  verses: VerseInterface[];
};

export type SectionInterface = {
  id: string;
  title: string;
  range: string;
};

export type SectionWGroupInterface = SectionInterface & {
  groups: GroupWVerseInterface[];
};

export type ChapterInterface = {
  id: string;
  name: string;
  desc: string;
  versesCount: number;
};

export type ChapterWSectionInterface = ChapterInterface & {
  sections: SectionInterface[];
};

export type Dict = {
  chapter: string;
  verse: string;
  search_here: string;
  font: {
    url: string;
    family: string;
  };
  numerals: string[];
  credits: string;
  verse_meaning: string;
};
