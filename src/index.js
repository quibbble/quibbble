import React from "react";
import { render } from "react-dom";
import Discord from "./components/Discord";
import Routing from "./components/Routing";
import "./index.css";

render(
    <div>
        <Discord />
        <Routing />
    </div>, document.getElementById("root"))
