$(function () {


  if ($(window).width() > 991) {        
    $(window).scroll(function() {
      let offset = $(window).scrollTop();
      if ($(this).scrollTop() > 0) {
        $('.menu').css('opacity', '1');
        $('.menu').css('z-index', '999');
      } else {
        $('.menu').css('opacity', '0');
        $('.menu').css('z-index', '-1');
      }
    });

    $('.serviceItem').click(function () {    
      $('.serviceItem').removeClass('active').eq($(this).index()).addClass('active');
      $('.serviceItem .serviceTitle').removeClass('active').eq($(this).index()).addClass('active');
      $('.serviceDescription').removeClass('active').eq($(this).index()).addClass('active');
    })
  };

  $('.serviceItem').click(function () {    
    $('.serviceItem').removeClass('active').eq($(this).index()).addClass('active');
    $('.serviceItem .serviceTitle').removeClass('active').eq($(this).index()).addClass('active');
  })

  $('.choiceBlock .label').click(function () {    
    $('.label').removeClass('active').eq($(this).index()).addClass('active');
  })

  if ($(window).width() < 991) { 
    $('.serviceItem').click(function () {    
      $('.serviceArrowLeft').removeClass('active').eq($(this).index()).addClass('active');
      $('.serviceDescriptionAdaptive').removeClass('active').eq($(this).index()).addClass('active');
    })
  };

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 70000,
    from: 2500,
    to: 7500,
    grid: true,
    step: 2500,
    prettify_enabled: true,
    prettify_separator: "",
    onChange: function (data) {
      $('.banner .to').html(' ' + data.to);
      $('.banner .from').html(' ' + data.from);
    }
  });

  let info = document.querySelectorAll('.info');
  let dot = $('.location');

  for(let i = 0; i < info.length; i++){
    dot[i].addEventListener('click', () => {
      $('.info').removeClass('active');
      info[i].classList.add('active');
    })
  }

  $('.menu_btn_bars').click(function () {
    $('.menu_btn_bars').hide();
    $('.menu_btn_close').show();
    $('.menu_ul').css('transform', 'translateY(0%)');
    $('body').css('overflow', 'hidden');
  })
  $('.menu_btn_close').click(function () {
    $('.menu_btn_close').hide();
    $('.menu_btn_bars').show();
    $('.menu_ul').css('transform', 'translateY(-100%)');
    $('body').css('overflow', 'auto');
  })
  
  // if ($(window).width() < 767) {
  //   $('.menu_li a').click(() => {      
  //     $('.menu_ul').css('transform', 'translateY(-110%)');
  //     $('.menu_btn_close').hide();
  //     $('.menu_btn_bars').show();
  //   })
  // };

    // let link = $('.menu_ul li a');

    // link.on('click', function (e) {
    //     e.preventDefault();

    //     let selector = $(this).addClass('active').attr('href');
    //     let target = $(selector);

    //     $('html, body').animate({ scrollTop: target.offset().top - 120 }, 1000);


    // })

  })