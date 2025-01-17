export type PhraseInterface = {
  id: string;
  title: string;
  group: string;
};

export type GroupOnlyInterface = {
  code: string;
  translation: string;
  meanings: { [key: string]: string }[];
};

export type GroupInterface = GroupOnlyInterface & {
  phrases: PhraseInterface[];
};

export type SectionOnlyInterface = {
  title: string;
  range: string;
};

export type SectionInterface = SectionOnlyInterface & {
  groups: GroupInterface[];
};

export type ChapterOnlyInterface = {
  id: string;
  name: string;
  desc: string;
  verses_count: number;
};

export type ChapterInterface = ChapterOnlyInterface & {
  sections: SectionInterface[];
};

export type Dict = {
  chapter: string;
  search_here: string;
  font: {
    url: string;
    family: string;
  };
  numerals: string[];
  credits: string;
  verse_meaning: string;
};
