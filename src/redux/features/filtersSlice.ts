import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SortOptions, SupportedLanguages } from "../types";

type State = {
  selectedLanguage: SupportedLanguages;
  searchQuery: string;
  sortBy: SortOptions;
};
const initialState: State = {
  selectedLanguage: "en",
  searchQuery: "USA",
  sortBy: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<SupportedLanguages>) => {
      state.selectedLanguage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortOptions>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setLanguage, setSearchQuery, setSortBy } = filtersSlice.actions;

export const selectSearchQuery = (state: RootState) =>
  state.filters.searchQuery;

export const selectSortBy = (state: RootState) => state.filters.sortBy;

export const selectLanguage = (state: RootState) =>
  state.filters.selectedLanguage;

export default filtersSlice.reducer;
