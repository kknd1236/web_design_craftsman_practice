$(function () {
    
  let index = 0;

  setInterval(() => {    

    if(index >= 2) index = 0;
    else index++;
    
    $('.slide3 ul li').fadeOut(500);
    $('.slide3 ul li').eq(index).fadeIn(500);
    console.log(index);    
    
  }, 3000);

});
