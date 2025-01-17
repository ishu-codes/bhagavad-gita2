import type { Locale } from "@/i18n-config";
import {
  ChapterInterface,
  ChapterOnlyInterface,
  GroupInterface,
  PhraseInterface,
} from "@/interface";

export async function getChapters(lang: Locale["code"]) {
  return await import(`./data_${lang}.json`).then((module) =>
    module.default.map(
      ({ id, name, desc, verses_count }: ChapterOnlyInterface) => ({
        id,
        name,
        desc,
        verses_count,
      })
    )
  );
}
export async function getChapter(chId: string, lang: Locale["code"]) {
  return await import(`./data_${lang}.json`).then((module) =>
    module.default.find((ch: ChapterInterface) => ch.id === chId)
  );
}

// async function getPhrases(grpCode:string, script:string) {
//   return await import (`./phrases_${script}.json`).then(module => module.default.map(ph => ph.group === grpCode))
// }

// export async function getGroups(chId:string, secId:string, lang: Locale['code']) {
//   return await import(`./data_${lang}.json`).then((module) => {
//     const chapter = module.default.find((ch: ChapterInterface) => ch.id === chId);
//     return await chapter.sections[parseInt(secId)-1].groups.map(
//       ({code, phrases}:{code:string, phrases:PhraseInterface[]}) => ({code, getPhrases(code, 'dev')}));
//   })
// }
async function getPhrases(grpCode: string, script: string) {
  const module = await import(`./phrases_${script}.json`);
  return module.default.filter((ph: { group: string }) => ph.group === grpCode);
}

export async function getGroups(
  chId: string,
  secId: string,
  lang: Locale["code"]
): Promise<GroupInterface[]> {
  const module = await import(`./data_${lang}.json`);
  const chapter = module.default.find((ch: ChapterInterface) => ch.id === chId);

  if (!chapter) {
    throw new Error(`Chapter with id ${chId} not found.`);
  }

  const sectionIndex = parseInt(secId, 10) - 1;

  if (!chapter.sections[sectionIndex]) {
    throw new Error(`Section ${secId} not found in chapter ${chId}.`);
  }

  const section = chapter.sections[sectionIndex];

  const groups = await Promise.all(
    section.groups.map(
      async ({
        code,
        phrases,
      }: {
        code: string;
        phrases: PhraseInterface[];
      }) => {
        const phrasesData = await getPhrases(code, "dev");
        return { code, phrases: phrasesData };
      }
    )
  );

  return groups;
}
