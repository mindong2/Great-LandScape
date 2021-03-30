const header = document.querySelector(`header`);
 
function scrollEvent(){
 header.classList.toggle(`sticky`, window.scrollY > 0);
}

window.addEventListener("scroll",scrollEvent);