import React from "react";
import ReactDOM from "react-dom/client";
import KBVE from "./KBVE";


const widgetRoots = document.querySelectorAll(".widget_seamless_m4t");


widgetRoots.forEach((Div) => {
    ReactDOM.createRoot(Div).render(
      <React.StrictMode>
        <KBVE ve={Div} key={Div} />
      </React.StrictMode>
    );
  });