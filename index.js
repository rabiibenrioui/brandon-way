const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navlinks');

const bookBtn = document.querySelectorAll('.bookBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('bookingModal');

bookBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        overlay.classList.add("active");
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });
});

closeBtn.onclick = () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
};

menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle('active');
});
