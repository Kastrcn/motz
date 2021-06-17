import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { ConnectedRouter } from "connected-react-router";

export default function App({ history }: any) {
  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        {" "}
        {/* place ConnectedRouter under Provider */}
        {renderRoutes(routes)}
      </ConnectedRouter>
    </BrowserRouter>
  );
}
