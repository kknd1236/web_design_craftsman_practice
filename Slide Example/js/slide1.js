$(function () {
    
  let index = 0;

  setInterval(() => {    

    if(index >= 2) index = 0;
    else index++;
    
    $('.slide1 ul').animate({left:1200* index * -1 +'px'},500);
    console.log(index);    
    
  }, 3000);

});
