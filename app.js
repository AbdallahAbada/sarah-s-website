const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// display the mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++
    if (counter > 7) {
        counter = 1;
    }
}, 5000)