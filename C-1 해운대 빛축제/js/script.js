$(function () {
  // alert('hi');

  $('.notice li')
    .eq(0)
    .click(function () {
      $('.modal').fadeIn(500);
    });

  $('.btn').click(function () {
    $('.modal').fadeOut(500);
  });

  $('.fam p').click(function () {
    // if ($('.fam p').hasClass('on')) {
    //   $('.fam p').removeClass('on');
    //   $('.fam ul').slideUp(500);
    // } else {
    //   $('.fam p').addClass('on');
    //   $('.fam ul').slideDown(500);
    // }

    $(this).toggleClass('on');
    $('.fam ul').slideToggle();
  });

  $('.gnb > li').hover(
    function () {
      $('.nav_bg').stop().slideDown(300);
      $(' ul.sub').stop().slideDown(300);
      // alert('1');
    },
    function () {
      $('.nav_bg').stop().slideUp(300);
      $(' ul.sub').stop().slideUp(300);
      // alert('2');
    }
  );

  let index = 1;
  setInterval(function () {
    if (index > 2) index = 0;
    console.log(`index : ${index}`);

    $('ul.slide li').eq(index).siblings().animate({ left: '-1200px' }, 500);

    $('ul.slide li').eq(index).animate({ left: '0' }, 500);

    console.log($('ul.slide li').eq(index));
    index++;
  }, 3000);
});
