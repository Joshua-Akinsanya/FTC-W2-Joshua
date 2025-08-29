export default class SideMenu {
    constructor(id) {
        this.menuObj = document.querySelector(id);
        this.openState = false;
    }
    openMenu() {
        if(this.openState===false) {
            this.menuObj.style.transform = 'translateX(0)';
            this.openState = true;
        }
    }
    closeMenu() {
        if(this.openState===true) {
            this.menuObj.style.transform = 'translateX(100%)';
            this.openState = false;
        }
    }
    disableMenu() {
        this.menuObj.style.display = "none";
    }
    enableMenu() {
        this.menuObj.style.display = "flex";
    }
    getOpenState() {
        return this.openState;
    }
}