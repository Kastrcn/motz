import React from 'react'
import './App.css';
import {
  BrowserRouter
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./Routes";

export default function App(props: any) {
  return (
    <BrowserRouter>
        {renderRoutes(routes)}
    </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}