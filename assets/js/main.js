jQuery(document).ready(function($) {
  const heroSlide = $('.owl-carousel')
  if (heroSlide) {
    heroSlide.owlCarousel({
      loop: true,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 850
    })
  }
})
