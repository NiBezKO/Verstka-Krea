/* изменение класса Header на header--blue при скролле страницы */

(function StickyHeader () {

const header = document.querySelector ("header");
    
    
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY 
        
        if(scrollPos > 1000) {
            header.classList.add('blue');
        } else {
            header.classList.remove('blue');
        }  

    });
    
}());
    
    
/* выпадающее меню БУРГЕРА */
    
    
const burger = document.querySelector(".burger");
const kreaNav = document.querySelector('.krea__nav') 
    
    burger.addEventListener("click", function() {  
    burger.classList.toggle('_active');
    kreaNav.classList.toggle('_active');
    
});
    
    
/* Навигация */
    
    
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
        
    function  onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockvalue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;
    
                window.scrollTo({
                    top: gotoBlockvalue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    
}
    
/* Slider */
    
document.addEventListener('DOMContentLoaded', function () {
// инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 10000,
    });
});
    
    
/* pop-up  */
    
//let modalWindow = document.getElementById('modal');
//let showModal = document.getElementById(".block-one__photo");
//const showModalTwo = document.querySelectorAll(".block-two__item");
//const showModalThree  = document.querySelectorAll(".block-three__item");

    
/* showModal.addEventListener("click", function() {  
    modalWindow.classList.toggle('_active');
    showModal.classList.toggle('_active');
});  */ 
    
/* window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
    }
}; */

