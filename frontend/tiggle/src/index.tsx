import { createRoot } from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { GlobalStyle } from "./styles/GlobalStyle";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
);
