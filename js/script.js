
 $(document).ready(function mostrar() {
      $(".openname").click(function (){
      $(".se_muestra_luego").css("display","block");
      $(".openname").click(function(){
      $(".se_muestra_luego").css("display","none");
      mostrar();
    });

   
    });
    //recorrido
    $(".mostrar_mapa1").click(function (){
      $(".recorrido_10").css("display","block");
      $(".mostrar_mapa1").click(function(){
      $(".recorrido_10").css("display","none");
      mostrar();
    });
  });
    $(".mostrar_mapa2").click(function (){
      $(".recorrido_25").css("display","block");
      $(".mostrar_mapa2").click(function(){
      $(".recorrido_25").css("display","none");
      mostrar();
    });

   
    });
//sponsor

 $(".sponsors").click(function (){
   if($(window).width()<=830){
      $(".sponsors_img").css({"display":"block"});
      $(".sponsors_grid").css({"display":"flex","flex-direction":"row","position":"relative","top":"128%","left":"4%","width":"100%"});
      $(".sponsors_name").css({" position":"relative","left":"86%","bottom": "96%"});
      $(".sponsors").click(function(){
      $(".sponsors_img").css("display","none");
      $(".sponsors_name").css({" font-size":"25px"," position":"relative","left":"0px","bottom": "138%"});
      
      mostrar();
    });
   }
   
  });

//hover

$(".openname_logo").hover(function(){
  $(".openname_logo").css("background-color", "red");
  }, function(){
    $(".openname_logo").css("background-color", "white");
  });






   $(function() {
  $(window).scroll(function() {
    
if ($(window).scrollTop() < 300 ) {
 $(".corredor").attr("src","img/corredor1.png");
 $(".animacion").css("margin-top","0");

}
if($(window).scrollTop() > 300 && $(window).scrollTop() < 700){
  $(".corredor").attr("src","img/corredor2.png");
 $(".animacion").css("margin-top","3%");
}

if($(window).scrollTop() > 700 && $(window).scrollTop() < 1200){
  $(".corredor").attr("src","img/corredor3.png");
  
 $(".animacion").css("margin-top","6%");
}

if($(window).scrollTop() > 1200 && $(window).scrollTop() < 1500){
  $(".corredor").attr("src","img/corredor2.png");
  
 $(".animacion").css("margin-top","9%");
}
if($(window).scrollTop() > 1500 && $(window).scrollTop() < 1700){
  $(".corredor").attr("src","img/corredor3.png");
  
 $(".animacion").css("margin-top","12%");
}
if($(window).scrollTop() > 1700 && $(window).scrollTop() < 1900){
  $(".corredor").attr("src","img/corredor2.png");
  
 $(".animacion").css("margin-top","15%");
}
if($(window).scrollTop() > 1900 && $(window).scrollTop() < 2300){
  $(".corredor").attr("src","img/corredor5.png");
  
 $(".animacion").css("margin-top","18%");
}

  });
});

        
});