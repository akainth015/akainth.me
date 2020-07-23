matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (ev) {
    document.querySelector(`link[rel='icon']`).href = ev.matches ? "/images/light64.png" : "/images/dark64.png";
})