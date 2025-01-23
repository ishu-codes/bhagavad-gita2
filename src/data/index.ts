import type { Locale } from "@/i18n-config";
import {
  ChapterInterface,
  GroupInterface,
  GroupWVerseInterface,
  SectionInterface,
} from "@/interface";
import { getLocale, getScript } from "./langs";

// Get Data
async function getData(type: string, lang: Locale["code"] | string) {
  try {
    const module = await import(`./${lang}/${type}.json`);
    return module.default;
  } catch (error) {
    console.error(
      `Error fetching data for type "${type}" and language "${lang}":`,
      error
    );
    throw new Error("Failed to load data.");
  }
}

// Get chapters
export async function getChapters(language?: string) {
  return getData("chapters", getLocale(language));
}

// Get chapter
export async function getChapter(chId: string, language?: string) {
  const lang = getLocale(language);
  try {
    const [chapters, sections] = await Promise.all([
      getData("chapters", lang),
      getData("sections", lang),
    ]);

    const chapter = chapters.find((ch: ChapterInterface) => ch.id === chId);
    const selectedSections = sections.filter(
      (sec: SectionInterface) => sec.id.slice(0, 2) === chId
    );

    if (!chapter) {
      throw new Error(`Chapter with ID "${chId}" not found.`);
    }

    return { ...chapter, sections: selectedSections };
  } catch (error) {
    console.error(
      `Error fetching chapter with ID "${chId}" for language "${lang}":`,
      error
    );
    throw new Error("Failed to fetch chapter.");
  }
}

// Get section
export async function getSection(secId: string, language?: string) {
  const lang: Locale["code"] = getLocale(language);
  const script: string = getScript(lang);

  try {
    const [sections, groups, verses] = await Promise.all([
      getData("sections", lang),
      getData("groups", lang),
      getData("verses", script),
    ]);

    const section = sections.find((sec: SectionInterface) => sec.id === secId);
    const selectedGroups: GroupWVerseInterface = groups
      .filter((grp: GroupInterface) => grp.secId === secId)
      .map((selGrp: GroupInterface) => ({
        ...selGrp,
        verses: verses[selGrp.id],
      }));

    if (!section) throw new Error(`Section with ID "${secId}" not found.`);

    return { ...section, groups: selectedGroups };
  } catch (error) {
    console.error(
      `Error fetching section with ID "${secId}" for language "${lang}":`,
      error
    );
    throw new Error("Failed to fetch section.");
  }
}

// Get section with group
export async function getSectionAndGroup(grpId: string, language?: string) {
  const lang: Locale["code"] = getLocale(language);
  const script: string = getScript(lang);

  try {
    const [chapters, sections, groups, verses] = await Promise.all([
      getData("chapters", lang),
      getData("sections", lang),
      getData("groups", lang),
      getData("verses", script),
    ]);

    const group: GroupInterface = groups.find(
      (grp: GroupInterface) => grp.id === grpId
    );
    if (!group) throw new Error(`Group with ID "${grpId}" not found.`);

    const section = sections.find(
      (sec: SectionInterface) => sec.id === group.secId
    );
    const selectedGroups: GroupWVerseInterface = groups
      .filter((grp: GroupInterface) => grp.secId === group.secId)
      .map((selGrp: GroupInterface) => ({
        ...selGrp,
        verses: verses[selGrp.id],
      }));

    if (!section)
      throw new Error(`Section with ID "${group.secId}" not found.`);

    const chapter: ChapterInterface = chapters.find(
      (ch: ChapterInterface) => ch.id === section.id.slice(0, 2)
    );
    if (!chapter)
      throw new Error(`Chapter with ID "${section.id.slice(0, 2)}" not found.`);

    return {
      chapter,
      section: { ...section, groups: selectedGroups },
      group: { ...group, verses: verses[group.id] },
    };
  } catch (error) {
    console.error(
      `Error fetching group with ID "${grpId}" for language "${lang}":`,
      error
    );
    throw new Error("Failed to fetch section.");
  }
}
