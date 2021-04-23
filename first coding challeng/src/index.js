// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const first = document.querySelector("h2");

const superEventHandler = {
  mouseenter: function () {
    first.style.color = colors[0];
    first.innerHTML = "The mouse is here!";
  },
  Resize: function () {
    first.style.color = colors[2];
    first.innerHTML = "You just resized!";
  },

  contextmenu: function () {
    first.style.color = colors[3];
    first.innerHTML = "That was a right click!";
  },

  mouseleave: function () {
    first.style.color = colors[1];
    first.innerHTML = "The mouse is gone!";
  }
};

first.addEventListener("mouseenter", superEventHandler.mouseenter);
window.addEventListener("resize", superEventHandler.Resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
first.addEventListener("mouseleave", superEventHandler.mouseleave);
