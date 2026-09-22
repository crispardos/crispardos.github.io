
(function () {
    "use strict";

    var STORAGE_KEY = "theme";
    var root = document.documentElement;

    // --- 1) Aplicar tema inicial (anti-parpadeo) ---
    var saved = localStorage.getItem(STORAGE_KEY);
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
        root.classList.add("dark");
    }

    // --- 2) Toggle (el botón existe solo después de parsear el HTML) ---
    document.addEventListener("DOMContentLoaded", function () {
        var toggle = document.getElementById("theme-toggle");
        if (!toggle) return;

        toggle.addEventListener("click", function () {
            var isDark = root.classList.toggle("dark");
            localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
        });
    });
})();
