function onload() {
    document.body.classList.toggle("dark_mode", localStorage.getItem("DarkMode") === "true");
}