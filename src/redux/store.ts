import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api/news/newsApi";
import filtersReducer from "./features/filtersSlice";
import modalReducer from "./features/modalSlice";
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    modal: modalReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
