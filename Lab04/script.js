function DarkMode() {
    const wasDarkmode = localStorage.getItem("DarkMode") === "true";
    localStorage.setItem("DarkMode", !wasDarkmode);
    const elemnet = document.body;
    elemnet.classList.toggle("dark_mode", !wasDarkmode);
}

function onload() {
    document.body.classList.toggle("dark_mode", localStorage.getItem("DarkMode") === "true");
}