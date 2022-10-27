import { createRoot } from "react-dom/client";
import App from "./App";

const scrollFunction = () => {
  const header = document.getElementById("header");
  if (window.scrollY > 80) {
    header.style.borderBottom = "1px black solid";
    header.style.backgroundColor = "white";
    header.style.zIndex = "2";
  }
  if (window.scrollY === 0) {
    header.style.borderBottom = "none";
    header.style.backgroundColor = "#fff0e5";
    header.style.zIndex = "0";
  }
};

window.onscroll = function () {
  scrollFunction();
};
createRoot(document.getElementById("root")).render(<App />);
