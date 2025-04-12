const navbar = document.querySelector("#navbar")
const hamburgerMenu = document.querySelector("#hamburger-icon")
const backIcon = document.querySelector("#back-aero-icon")

hamburgerMenu.addEventListener("click", (e) => {
    hamburgerMenu.classList.add("show-nav")
    navbar.classList.remove("show-nav")
    backIcon.classList.remove("show-nav")
})

backIcon.addEventListener("click", (e) => {
    backIcon.classList.add("show-nav")
    navbar.classList.add("show-nav")
    hamburgerMenu.classList.remove("show-nav")
})