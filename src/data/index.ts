import type { Locale } from "@/i18n-config";
import { ChapterInterface, ChapterOnlyInterface } from "@/interface";

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
