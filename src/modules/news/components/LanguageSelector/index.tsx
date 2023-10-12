import { Select } from "antd";
import { languageOptions } from "./data";
import { SupportedLanguages } from "../../../../redux/types";
import { useAppDispatch } from "../../../../redux/hooks";
import { setLanguage } from "../../../../redux/features/filtersSlice";

export const LanguageSelector = () => {
  const dispatch = useAppDispatch();

  const handleSortByLanguage = (value: SupportedLanguages) => {
    dispatch(setLanguage(value));
  };
  return (
    <Select
      placeholder="Language"
      style={{ width: 120, marginLeft: 10 }}
      options={languageOptions}
      onChange={handleSortByLanguage}
    />
  );
};
