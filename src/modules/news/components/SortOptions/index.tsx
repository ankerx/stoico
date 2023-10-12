import { Button } from "antd";
import { setSortBy } from "../../../../redux/features/filtersSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import { LanguageSelector } from "../LanguageSelector";

export const SortOptions = () => {
  const dispatch = useAppDispatch();

  const handleSortByPopularity = () => {
    dispatch(setSortBy("popularity"));
  };
  return (
    <div>
      <p>Sort by:</p>
      <Button onClick={handleSortByPopularity}>Popularity</Button>
      <LanguageSelector />
    </div>
  );
};
