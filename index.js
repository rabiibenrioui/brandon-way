const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navlinks');

menuToggle.addEventListener("click", () => 
    {
        navMenu.classList.toggle('active');
    });