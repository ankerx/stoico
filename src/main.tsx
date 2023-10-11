import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NewsList } from "./modules/news/NewsList/index.tsx";
import { Headlines } from "./modules/headlines/index.tsx";
import { RootLayout } from "./core/UI/Layout/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<NewsList />} />
      <Route element={<Headlines />} path="headlines" />
      <Route element={<Headlines />} path="*" />
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
