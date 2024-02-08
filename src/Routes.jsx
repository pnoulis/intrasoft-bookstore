import * as React from "react";
import { Scratch } from "./scratch/Scratch.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import { App } from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Book } from "./pages/Book.jsx";
import { AddBook } from "./pages/AddBook.jsx";

function Routes() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <App />,
          children: [
            { path: "/", element: <Home /> },
            { path: "books/:bookId", element: <Book /> },
            { path: "books/add", element: <AddBook /> },
          ],
        },
        {
          path: "/scratch",
          element: <Scratch />,
        },
      ])}
    />
  );
}

export { Routes };
