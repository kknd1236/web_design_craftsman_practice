$(function () {
    
  let index = 0;

  setInterval(() => {    

    if(index >= 2) index = 0;
    else index++;
    
    $('.slide2 ul').animate({top:300* index * -1 +'px'},500);
    console.log(index);    
    
  }, 3000);

});
