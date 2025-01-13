export type PhraseInterface = {
  id: string;
  title: string;
  group: string;
};

export type GroupInterface = {
  code: string;
  translation: string;
  meanings: { [key: string]: string }[];
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
