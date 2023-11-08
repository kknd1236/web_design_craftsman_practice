$(function () {
    $('header > nav ul.gnb > li').hover(
        function () {
            // over
            $('header > nav .sub').stop().slideDown();
        },
        function () {
            // out

            $('header > nav .sub').stop().slideUp();
        }
    );

    $('.slide_all li').eq(0).siblings().css('top', '-300px');

    let index = 1;

    setInterval(() => {
        if (index > 2) index = 0;
        $('.slide_all>li').eq(index).siblings().animate({ top: '-300px' }, 500);
        $('.slide_all>li').eq(index).animate({ top: '0' }, 500);
        index++;
        console.log(index);
    }, 3000);

    $('.notice_gal h3').click(function (e) {
        e.preventDefault();
        $('.notice_gal h3').removeClass('on');
        $(this).addClass('on');

        $('.notice_gal ul').hide();
        $(this).next().show();
    });

    $('.modal  button').click(function (e) {
        e.preventDefault();
        $('.modal').fadeOut(500);
    });

    $('.notice li:nth-child(1)').click(function (e) {
        e.preventDefault();
        $('.modal').fadeIn(500);
    });
});
