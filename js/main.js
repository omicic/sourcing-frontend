
    var typed = new Typed('.element', {
        strings: ['Junior developer', '30 dana kodiranja', 'JS radionica', 'Custom WP radionica'],
        loop: true,
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 100,
        loopCount: Infinity
    });

//transition na ikonicu
/* var image = document.getElementById("navbarimg");
image.addEventListener('mouseover', function(){
  image.src = "img/logo-plavi.png"
})
image.addEventListener('mouseout', function(){
    image.src = "img/logo-beli.png"
  }) */

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});