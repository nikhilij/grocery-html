let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    // search-form.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active'); 
}
let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
   
    autoplay: {
       delay:2200,
       disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      
      },
      1020: {
        slidesPerView: 3,
       
      },
     
    },
  });

  var swiper = new Swiper(".Review-slider", {
    loop: true,
    spaceBetween: 20,
   
    autoplay: {
       delay:2200,
       disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      
      },
      1020: {
        slidesPerView: 3,
       
      },
     
    },
  });