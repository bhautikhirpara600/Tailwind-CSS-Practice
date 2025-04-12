const navbar = document.querySelector("#navbar")
const hamburgerMenu = document.querySelector("#hamburger-icon")
const backIcon = document.querySelector("#back-aero-icon")

hamburgerMenu.addEventListener("click", (e) => {
    hamburgerMenu.classList.add("open")
    navbar.classList.remove("open")
    backIcon.classList.remove("open")
})

backIcon.addEventListener("click", (e) => {
    backIcon.classList.add("open")
    navbar.classList.add("open")
    hamburgerMenu.classList.remove("open")
})