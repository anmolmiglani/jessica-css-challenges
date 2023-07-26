let desc = document.getElementsByClassName("desc")[0];
let btn = document.getElementsByClassName("btn")[0];
btn.onclick = function () {
  desc.classList.toggle("navbar-height");
  if (desc.classList.contains("navbar-height-down")) {
    desc.classList.remove("navbar-height-down");
    desc.classList.add("navbar-height-up");
  } else {
    desc.classList.remove("navbar-height-up");
    desc.classList.add("navbar-height-down");
  }
};
