import sideMenu from "./sidemenu.js";
import Breakpoints from "./breakpoints.js";

const mobileNavmenu = new sideMenu('#sidemenu');

const openMenuButton = document.querySelector('#open-menu-button');
const closeMenuButton = document.querySelector('#close-menu-button');

openMenuButton.addEventListener('click', function() {
    mobileNavmenu.openMenu();
});

closeMenuButton.addEventListener('click', function () {
    mobileNavmenu.closeMenu();
})

window.addEventListener('resize', function () {
    if(this.innerWidth >= Breakpoints.desktop) {
        mobileNavmenu.disableMenu();
    }
    else {
        mobileNavmenu.enableMenu();
    }
})