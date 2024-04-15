function toggleMenu() {
    var navbarLinks = document.querySelector(".navbar-links");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("change");
    navbarLinks.classList.toggle("show");
}
