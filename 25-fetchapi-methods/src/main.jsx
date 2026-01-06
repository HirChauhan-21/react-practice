//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import Quotes from "./routes/Quotes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const res = await fetch("https://dummyjson.com/quotes/6");

      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }

      return res.json();
    },
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //<QueryClientProvider client={client}>
      <RouterProvider router={router} />
  //</QueryClientProvider>
  // </StrictMode>,
);
