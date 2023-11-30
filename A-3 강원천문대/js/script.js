$(function () {
  // alert('hi');

  $('header nav ul.gnb>li').hover(function(){
    $(this).find('ul').stop().slideDown(500);
  },function(){
    $(this).find('ul').stop().slideUp(500);
  });

  $('header nav ul.gnb>li').on('focusin',function(){
    $(this).find('ul').stop().slideDown(500);
  });

  $('header nav .sub li:last-child').on('focusout',function(){
    $(this).parent().stop().slideUp(500);
  });

  // $('header nav .sub li:last-child').blur(function(){
  //   $(this).parent().stop().slideUp(500);
  // })

  console.dir($('.sub li:last-child'));

  let index = 1;

  setInterval(function(){
    $('.slide>li').fadeOut('slow');
    if(index > 2) index=0;
    $('.slide>li').eq(index).fadeIn('slow');
    console.log(index);
    index++;
  },3000);

  $('.contents > .notice_gal > .notice  li').eq(0).click(function(){
    $('.modal').fadeIn('slow');
  });

  $('.modal button').click(function(){
    $('.modal').fadeOut('slow');
  });

  $('.notice h2').click(function(){
    $('.gal').removeClass('on');
    $('.gal>h2').removeClass('on');
    $('.gal  ul').css('display','none');

    $('.notice').addClass('on');
    $('.notice > h2').addClass('on');
    $('.notice  ul').css('display','block');


  });

  $('.contents .notice_gal .gal h2').click(function(){
    $('.notice').removeClass('on');
    $('.notice>h2').removeClass('on');
    $('.notice  ul').css('display','none');

    $('.gal').addClass('on');
    $('.gal > h2').addClass('on');
    $('.gal  ul').css('display','block');
  });

  $('.notice_focus').on('focusin',function(){
    $('.gal').removeClass('on');
    $('.gal>h2').removeClass('on');
    $('.gal  ul').css('display','none');

    $('.notice').addClass('on');
    $('.notice > h2').addClass('on');
    $('.notice  ul').css('display','block');
  })

  $('.gal_focus').on('focusin',function(){
    $('.notice').removeClass('on');
    $('.notice>h2').removeClass('on');
    $('.notice  ul').css('display','none');

    $('.gal').addClass('on');
    $('.gal > h2').addClass('on');
    $('.gal  ul').css('display','block');
  })

});
