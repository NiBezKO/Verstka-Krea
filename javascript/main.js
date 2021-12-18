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
     
        console.log(scrollPos)   
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











