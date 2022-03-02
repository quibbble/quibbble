import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Scaling from "./components/Scaling";
import "./index.css"

render(
    <Scaling>
        <App />
    </Scaling>,
    document.getElementById("root")
    );
