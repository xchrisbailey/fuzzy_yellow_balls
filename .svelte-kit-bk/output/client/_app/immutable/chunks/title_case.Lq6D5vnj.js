function r(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.split(" ").map(e=>e[0].toUpperCase()+e.substring(1).toLowerCase()).join(" ")}export{r as t};
