//轮播图
var c = 0;
    
    $('.banner').children("a").hide()
    $('.bannerbtn').children("li").eq(0).css('background','#f80')
    $('.banner').children("a").eq(0).show()
    function bannerlist(){
        c++
        c = c >3?0:c;
        $('.banner').children("a").fadeOut()
        $('.bannerbtn').children("li").css('background','#fff')
        $('.bannerbtn').children("li").eq(c).css('background','#f80')
        console.log(c)
        $('.banner').children("a").eq(c).fadeIn()
    }

    var timer = setInterval(bannerlist,3000)
    
    $('.btnl').click(function(){
        c--
        c = c >3?0:c;

        clearInterval(timer)
        $('.banner').children("a").fadeOut()
        $('.bannerbtn').children("li").css('background','#fff')
        $('.bannerbtn').children("li").eq(c).css('background','#f80')
        console.log(c)
        $('.banner').children("a").eq(c).fadeIn()
        timer = setInterval(bannerlist,3000)
    })
    $('.btnr').click(function(){
        c++
        c = c >3?0:c;

        clearInterval(timer)
        $('.banner').children("a").fadeOut()
        $('.bannerbtn').children("li").css('background','#fff')
        $('.bannerbtn').children("li").eq(c).css('background','#f80')
        console.log(c)
        $('.banner').children("a").eq(c).fadeIn()
        timer = setInterval(bannerlist,3000)
    })




        //下拉框
   $('.dengru').hide()
   $('.dl').hover(function(){
       $('.dengru').show()
   },function(){
       $('.dengru').hide()
       $('.dengru').hover(function(){
           $('.dengru').show()
       },function(){
           $('.dengru').hide()
       });
   });





// 搜索框
   $('.zhenwuxians').css({display:'none'})

   $('.zhenwuxian').click(function(){
       $('.zhenwuxians').css({display:'block'})
       return false; 
   })
   $('.body').click(function(){
       $('.zhenwuxians').css({display:'none'})
   })
  