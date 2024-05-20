document.addEventListener("DOMContentLoaded", function () {
    function getHeader() {
        return `
        <div class="logo">
            <img src="../static/imgs/logonuevo_1.jpeg" alt="logo-catorce" />

        </div>
        <nav>
            <a href="../index.html">Inicio</a>
            <a href="../templates/destinos.html">Destinos</a>
            <a href="../templates/galería.html">Galería</a>
            <a href="../templates/contacto.html">Contacto</a>
        </nav>`
    }

    const headerElement = document.querySelector("header");

    if (headerElement) {
        headerElement.innerHTML = getHeader();
    } else {
        console.error("No se encontró el elemento <header> en el DOM.")
    }

})
