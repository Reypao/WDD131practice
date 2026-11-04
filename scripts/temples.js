// Mostrar el año actual.
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Mostrar la fecha y hora de la última modificación.
document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
});