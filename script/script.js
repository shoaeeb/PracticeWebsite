"use strict";
let qs = (selector) => document.querySelector(selector);
let $ = {};
$.collapseNav = qs('[data-id="collapse-nav"]');
$.navLinks = qs('[data-id="nav-links"]');
let visible = true;
$.collapseNav.addEventListener("click", () => {
  visible
    ? ($.navLinks.classList.add("collapse"),
      ($.navLinks.style.display = "flex"),
      $)
    : ($.navLinks.style.display = "none");
  visible = !visible;
});

// setInterval(() => {
//   window.innerWidth >= 1025
//     ? ($.navLinks.classList.remove("collapse"),
//       ($.navLinks.style.display = "flex"))
//     : $.navLinks.classList.add("collapse");
// }, 1000);
window.onresize = () => {
  window.innerWidth >= 1025
    ? ($.navLinks.classList.remove("collapse"),
      ($.navLinks.style.display = "flex"))
    : ($.navLinks.classList.add("collapse"),
      ($.navLinks.style.display = "none"));
};
