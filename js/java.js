
$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = 0;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }
  });
});

$(function(){
	$(".btn-gnavi").click(function(){
		$(".header-nav").slideToggle(400);
	});
	$(".header-nav li a").click(function(){
		$(".btn-gnavi").css({display:"none"});
	});
});





$(function () {
  var headerHight = 200; //ヘッダの高さ
  $('a[href^="#"]').click(function(){
      var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top-headerHight;
      $("html, body").animate({scrollTop:position}, 550, "swing");
         return false;
    });
 });