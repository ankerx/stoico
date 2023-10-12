import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NewsList } from "./modules/news/components/NewsList/index.tsx";
import { Headlines } from "./modules/headlines/components/Headlines/index.tsx";
import { RootLayout } from "./core/UI/Layout/index.tsx";
import { PageNotFound } from "./core/PageNotFound/PageNotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<NewsList />} />
      <Route element={<Headlines />} path="headlines" />
      <Route element={<PageNotFound />} path="*" />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
