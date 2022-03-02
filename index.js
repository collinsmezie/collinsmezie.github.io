const click = document.querySelector(".hamburger");
const newPage = document.querySelector(".popUp");
const body = document.querySelector("body");
const cancel = document.querySelector("#cancel-icon");
const items = document.querySelectorAll(".item")

items.forEach(item => item.addEventListener("click", () => {newPage.classList.toggle('window')
body.style.overflow = 'scroll'
}))

click.addEventListener("click", () => {
    newPage.classList.toggle('window');
    body.style.overflow = 'hidden';
})

cancel.addEventListener("click", () => {
    newPage.classList.toggle('window');
    body.style.overflow = 'scroll';
})
