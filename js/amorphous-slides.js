  $(document).ready(function() {
    $('.slides', ).slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear'
    });

    $('.concept-slides').slick({
      infinite: true,
slidesToShow: 2,
slidesToScroll: 2,
arrows: true,
dots: true,

  });

  $('.model-slides').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });

  // $('.animation-slides').slick({
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: 'linear'
  // });
  });
