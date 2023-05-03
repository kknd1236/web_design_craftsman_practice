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
});
