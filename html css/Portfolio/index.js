const nav_bar = document.querySelector(".mobile-navbar");
const nav_header = document.querySelector("#home-container");
const toggleNavbar = () =>{
    nav_header.classList.toggle("active")
}
nav_bar.addEventListener("click", ()=> toggleNavbar());