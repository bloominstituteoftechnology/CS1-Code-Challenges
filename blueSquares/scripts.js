$(document).ready(function(){
  $('.box').click(function(){
    $(this).toggleClass('blue-box');
  });
  $('.box').mouseenter(function(){
    $(this).addClass('animated pulse');
  }).mouseleave(function(){
    $(this).removeClass('animated pulse');
  });
});
