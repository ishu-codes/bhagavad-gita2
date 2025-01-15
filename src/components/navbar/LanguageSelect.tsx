import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { i18n } from "@/i18n-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useLangStore } from "@/stores";
import { LanguageIcon } from "@/icons/NavIcons";
import { useParams } from "react-router-dom";

export default function LanguageSelect() {
  const [currentLang, setCurrentLang] = useLangStore(
    useShallow((state) => [state.currentLang, state.setCurrentLang])
  );

  const { lang } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const changeLang = (newLangCode: string = "") => {
    const validNewLang = i18n.locales.find(
      (locale) => locale.code === newLangCode
    );
    if (validNewLang) {
      setCurrentLang(validNewLang);

      const segments = pathname.split("/");
      segments[1] = newLangCode;
      navigate(segments.join("/"), { replace: true });
    } else {
      console.log("Invalid path!");
    }
  };

  useEffect(() => {
    changeLang(lang);
  }, [lang]);
  return (
    <Select
      onValueChange={(newLangCode) => changeLang(newLangCode)}
      defaultValue={lang}
    >
      <SelectTrigger className="w-auto dark:bg-secondary rounded-full outline-none">
        <LanguageIcon className="p-1" />
        <p className="hidden md:block text-lg ml-2 mr-4">{currentLang.local}</p>
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => (
          <SelectItem key={locale.code} value={locale.code}>
            {locale.local}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
