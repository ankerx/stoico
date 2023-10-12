import { useGetNewsQuery } from "../../../../redux/api/news/newsApi";
import { useAppSelector } from "../../../../redux/hooks";
import {
  selectLanguage,
  selectSearchQuery,
  selectSortBy,
} from "../../../../redux/features/filtersSlice";

import { formatArticlesData } from "./utils";
import { TableWithNews } from "../Table";
import { SearchBarWithTitle } from "../SearchBarWithTitle";
import { SortOptions } from "../SortOptions";
import styles from "./styles.module.css";
export const NewsList = () => {
  const searchQuery = useAppSelector(selectSearchQuery);
  const language = useAppSelector(selectLanguage);
  const sortBy = useAppSelector(selectSortBy);

  const { data, isLoading, isFetching } = useGetNewsQuery({
    searchQuery,
    lng: language,
    sortBy,
  });

  const transformedArticles = formatArticlesData(data?.articles);

  return (
    <div className={styles.wrapper}>
      <SearchBarWithTitle isLoading={isLoading || isFetching} />
      <SortOptions />

      <TableWithNews
        articles={transformedArticles}
        isLoading={isLoading || isFetching}
      />
    </div>
  );
};
