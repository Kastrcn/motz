import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./configureStore";
import App from "./App";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
const store = configureStore();

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App history={history} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
