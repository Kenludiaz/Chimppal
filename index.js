const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.header')
const dispNav = () => {
    nav.classList.toggle("hide");
    hamburger.classList.toggle('slide');
}

hamburger.addEventListener("click", dispNav);
//This code was implemented for Lab 13
const friendList = document.querySelector(".call-to-action-btn")
friendList.addEventListener("click", () => {
    //Inner HTML alters the previous html
    friendList.innerHTML = "Congratulations for becoming a friend!!";
});

const changeColor = document.querySelector('.header');
changeColor.addEventListener("click", () => {
    //Chose to toggle class so that the user may switch back to light blue
    document.querySelector('.header').classList.toggle("white");
})
