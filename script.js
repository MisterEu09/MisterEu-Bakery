
const menuButtons = document.querySelectorAll('.navbar [id^="menu-"]');

function handleResize() {
  const displayStyle = window.innerWidth > 900 ? 'none' : 'block';
  menuButtons.forEach(button => button.style.display = displayStyle);
}

handleResize();
window.addEventListener('resize', handleResize);

    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    menuOpenButton.addEventListener("click", () => {
        
    document.body.classList.toggle("show-mobile-menu")
    });
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    })

const swiper = new Swiper('.slider-wrapper', {

loop: true,
spaceBetween:25,
grabCursor:true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable:true,
dynamicBullets:true,
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

breakpoints:{
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    }
}


});


document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

document.getElementById("pedido-whatsapp").addEventListener("click", function() {
    window.location.href = "https://wa.me/5511917615997";
});

document.getElementById("pedido-ifood").addEventListener("click", function() {
    window.location.href = "https://www.ifood.com.br";
});