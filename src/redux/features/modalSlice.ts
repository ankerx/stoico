import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ModifiedArticle } from "../../modules/news/components/Table/data";

type State = {
  isModalOpen: boolean;
  details: ModifiedArticle;
};
const initialState: State = {
  isModalOpen: false,
  details: {
    author: null,
    content: "",
    description: null,
    publishedAt: "",
    source: "",
    title: "",
    url: "",
    urlToImage: null,
  },
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setDetails: (state, action: PayloadAction<ModifiedArticle>) => {
      state.details = { ...action.payload };
    },
  },
});

export const { toggleModal, setDetails } = modalSlice.actions;

export const selectIsModalOpen = (state: RootState) => state.modal.isModalOpen;
export const selectDetailsOfArticle = (state: RootState) => state.modal.details;

export default modalSlice.reducer;
