// <⚠️ DONT DELETE T
// <⚠️ /DONT DELETE THIS ⚠️>

function magicResize() {
    if (window.innerWidth < 500) {
        document.body.style.backgroundColor = "blue";
    } else if (window.innerWidth < 700) {
        document.body.style.backgroundColor = "purple";
    } else{
        document.body.style.backgroundColor = "yellow";
    }
  };
  window.addEventListener("resize", magicResize);
  