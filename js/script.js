let menuIcon = document.querySelector('.menu-icn');
// let menuBar = document.querySelector('#menu-bars');
// let menuBarStyle = getComputedStyle(menuBar);
// let menuXmark = document.querySelector('#menu-xmark');
// let menuXmarkStyle = getComputedStyle(menuXmark);





// console.log(menuBarStyle.visibility);
// console.log(menuXmarkStyle.visibility);


menuIcon.onclick = function(){

    let navbar = document.querySelector(".navbar");

    let menuBar = document.querySelector('#menu-bars');
    let menuBarStyle = getComputedStyle(menuBar);
    let menuXmark = document.querySelector('#menu-xmark');

    
    if (menuBarStyle.visibility == "hidden") {
        menuBar.style.visibility = "visible";
        navbar.style.clipPath = "polygon(0 0,100% 0,100% 0,0 0)";
    } else {
        menuBar.style.visibility = "hidden";
        menuXmark.style.visibility = "visible";
        navbar.style.clipPath = "polygon(0 0,100% 0,100% 100%,0% 100%)"; 
    }
}

window.onscroll = function() {

    let navbar = document.querySelector(".navbar");
    let menuBar = document.querySelector('#menu-bars');
    let menuBarStyle = getComputedStyle(menuBar);

    navbar.style.clipPath = "polygon(0 0,100% 0,100% 0,0 0)";
    menuBar.style.visibility = "visible";
    
}



function showSearch(){
    document.querySelector("#search-form").classList.toggle('active');
}

function hideSearch(){
    document.querySelector("#search-form").classList.remove('active');
    document.querySelector("#search-box").value = "";
}

// sweeper

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
});