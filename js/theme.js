// Light/dark theme toggle. Light is the default.
// The choice is saved in the browser (localStorage) so it is remembered.
(function () {
  var root = document.documentElement;

  function savedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked: still works for this visit */ }
    var button = document.getElementById("theme-toggle");
    if (button) {
      button.textContent = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    }
  }

  // Apply immediately (script runs in <head>) to avoid a flash of the wrong theme.
  root.setAttribute("data-theme", savedTheme() === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    setTheme(root.getAttribute("data-theme"));
    button.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  });
})();
