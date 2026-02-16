import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";
import $ from "jquery";
window.$ = $;
window.jquery = $;

// setupCounter(document.querySelector("#counter"));

if (document.querySelector(".test")) {
  import("./test.js");
}
if (document.querySelector(".test2")) {
  import("./test2.js");
}
