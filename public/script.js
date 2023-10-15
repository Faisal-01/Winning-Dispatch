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

const bgImage = document.querySelector(".bg-image");
const images = ['map1.gif', 'map2.jpg', 'map3.png'];

// setInterval(() => {
//     const image = images[Math.floor(Math.random() * images.length)]
//     bgImage.style.backgroundImage = `url('./images/${image}')`
// }, 3000)

let count = 0;
setInterval(() => {
    count++;
    if(count > 2){
        count = 0;
    }
    bgImage.style.backgroundImage = `url('./images/${images[count]}')`

    
}, 6000)