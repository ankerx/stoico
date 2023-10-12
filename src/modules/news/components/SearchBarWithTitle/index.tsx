import Search from "antd/es/input/Search";
import { setSearchQuery } from "../../../../redux/features/filtersSlice";
import { debounce } from "lodash";
import { useAppDispatch } from "../../../../redux/hooks";
import styles from "./styles.module.css";

const DEBOUNCE_DELAY = 300;

type Props = {
  isLoading: boolean;
};

export const SearchBarWithTitle = ({ isLoading }: Props) => {
  const dispatch = useAppDispatch();

  const handleSearchQuery = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      dispatch(setSearchQuery(inputValue));

      if (inputValue === "") {
        dispatch(setSearchQuery("USA"));
      }
    },
    DEBOUNCE_DELAY
  );
  return (
    <div className={styles.wrapper}>
      <Search
        size="large"
        style={{ maxWidth: "800px" }}
        loading={isLoading}
        onChange={handleSearchQuery}
        placeholder="Search for the news"
        aria-label="search"
      />
    </div>
  );
};
