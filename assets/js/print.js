/**
 * Impresión / "Descargar CV".
 *
 * Abre el diálogo de impresión forzando el tema claro: quita .dark antes de
 * imprimir y lo restaura al cerrar el diálogo (evento afterprint).
 */
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("btn-imprimir");
        if (!button) return;

        button.addEventListener("click", function () {
            var root = document.documentElement;
            var wasDark = root.classList.contains("dark");

            root.classList.remove("dark");
            window.print();

            window.addEventListener("afterprint", function () {
                if (wasDark) root.classList.add("dark");
            }, { once: true });
        });
    });
})();
