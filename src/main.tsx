import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NuqsAdapter } from "nuqs/adapters/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
    </QueryClientProvider>
  </React.StrictMode>
);
