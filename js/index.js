const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Detecta preferência salva
const savedTheme = localStorage.getItem("theme");

// Detecta sistema
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
} else if (systemDark) {
    root.setAttribute("data-theme", "dark");
}

updateIcon();

toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");

    if (current === "dark") {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }

    updateIcon();
});

function updateIcon() {
    const current = root.getAttribute("data-theme");
    toggle.textContent = current === "dark" ? "☀️" : "🌙";
}


