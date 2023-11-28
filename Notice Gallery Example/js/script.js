$(function () {
  // alert('hi');  
  $('.contents .tab li ').on('click',function(){
    let index = $(this).index();
    // alert(index);

    $('.contents .tab li').removeClass('on');
    $('.contents .tab li').eq(index).addClass('on');

    $('.contents div').hide();
    $('.contents div').eq(index).show();
  })
});


