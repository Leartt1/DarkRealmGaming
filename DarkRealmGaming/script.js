
setTimeout(function() {
  document.querySelector('.preloader').style.opacity = '0';
  document.querySelector('.preloader').style.pointerEvents = 'none';
  document.querySelector('.header').style.opacity = '1';
  document.querySelector('.home').style.opacity = '1';
  document.querySelector('.home').style.transform = 'translateY(0)';
}, 2000);


window.addEventListener('scroll', reveal);

function reveal() {
    var sections = document.querySelectorAll(".scroll-section");

    sections.forEach(function (section) {
        var windowheight = window.innerHeight;
        var sectionTop = section.getBoundingClientRect().top;
        var revealPoint = 150;
        var animationType = section.getAttribute("data-animation");

        if (sectionTop < windowheight - revealPoint) {
            section.style.animation = `animate-${animationType} 2s ease forwards`;
        } else {
            section.style.animation = '';
        }
    });
}
function submitForm() {
    // You can add form submission logic here
    alert("Form submitted!");
}



const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

function showAlert() {
    alert('Thank you for subscribing!');
}