const menuIcon = document.querySelector(".menu-btn");
const responsiveMenu = document.querySelector(".responsive-menu");
menuIcon.addEventListener('click', () => {
    if (menuIcon.className == " active") {
        menuIcon.className.replace(" active", "")
    }
    else {menuIcon.className += " active";}
    
    responsiveMenu.className += " active"
})