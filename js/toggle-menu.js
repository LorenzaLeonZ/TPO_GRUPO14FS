document.addEventListener("DOMContentLoaded", function(){
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");
    const linksNav = document.querySelectorAll(".nav-menu a");

    menuBtn.addEventListener("click",()=>{
        menuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    linksNav.forEach(link =>{
        link.addEventListener("click", ()=>{
            menuBtn.classList.remove("active");
            navMenu.classList.remove("active");
        })
    })
})
