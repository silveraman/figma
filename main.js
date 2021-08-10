
const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".nav_menu");

toggle.addEventListener("click", function(){
    if(siteNav.classList.contains("nav_menu--open")) {
      siteNav.classList.remove("nav_menu--open");
      toggle.classList.remove("open");

      siteNav.classList.add("nav_menu--closed");
    } else{
        siteNav.classList.add("nav_menu--closed");
        toggle.classList.add("open");

        siteNav.classList.add("nav_menu--open");
    }
});