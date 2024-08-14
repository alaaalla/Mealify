var choose = document.querySelector("input");
var bodyEl = document.querySelector("body");
choose.onchange = function () {
 const mode = this.checked ? "moon" : "sun";
    if (mode == "moon") {
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark");
    }
};