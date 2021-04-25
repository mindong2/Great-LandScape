const header = document.querySelector(`header`);
const hamberger = document.querySelector(`.hamberger`);
const navbar = document.querySelector(`.navbar`);

function scrollEvent(){
    header.classList.toggle(`sticky`,scrollY>0 );
}


function viewMenu(){
    navbar.classList.toggle(`view`);
    header.classList.toggle(`color`)
}

hamberger.addEventListener(`click`, viewMenu);
window.addEventListener("scroll",scrollEvent);
