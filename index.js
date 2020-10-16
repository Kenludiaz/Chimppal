const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.header')
const dispNav = () => {
    nav.classList.toggle("hide");
    hamburger.classList.toggle('slide');
}

hamburger.addEventListener("click", dispNav);