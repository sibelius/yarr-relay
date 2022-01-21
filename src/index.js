import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import { App } from "./App";

const node = document.getElementById("root");
const root = createRoot(node);

root.render(<App />);
