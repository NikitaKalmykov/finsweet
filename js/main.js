var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const menuLinks = document.querySelectorAll(".menu__link[data-goto]"); 
if (menuLinks.length > 0) { 
  menuLinks.forEach(menuLink => { 
    menuLink.addEventListener("click", onMenuLinkClick); 
  }); 
  function onMenuLinkClick(e) { 
    const menuLink = e.target; 
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){ 
      const gotoBlock = document.querySelector(menuLink.dataset.goto); 
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight; 
      window.scrollTo({ 
        top: gotoBlockValue, 
        behavior: "smooth", 
      }); 
      e.preventDefault(); 
    } 
  } 
}

// const menuLinks = document.querySelectorAll(".menu__link[data-goto]"); 
// if (menuLinks.length > 0) { 
//     menuLinks.forEach(menuLink =>{ 
//         menuLink.addEventListener("click", onMenuLinkClick); 
//     }); 
//     function onMenuLinkClick(e) { 
//         const menuLink = e.target; 
//         if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){ 
//             const gotoBlock = document.querySelector(menuLink.dataset.goto); 
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; 
//             window.scrollTo({ 
//                 top: gotoBlockValue, 
//                 behavior: "smooth" 
//             }); 
//             e.preventDefault(); 
//         } 
//     } 
// }



