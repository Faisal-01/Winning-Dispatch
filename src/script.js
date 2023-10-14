const toggleButton = document.querySelector("#toggleButton");
const nav = document.querySelector("#nav");
const cross = document.querySelector("#cross");


toggleButton.addEventListener("click", () => {
    nav.classList.remove("hidden")
    nav.classList.add("show-nav")
    cross.classList.remove("hidden")
})

cross.addEventListener("click", () => {
    nav.classList.add("hidden")
    nav.classList.remove("show-nav")
    cross.classList.add("hidden")
})