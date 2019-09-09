var ote = document.querySelector(".te");
var otey = document.querySelector(".tey")
ote.onmouseover = function(){
    otey.style.display="block"
}
ote.onmouseout = function(){
    otey.style.display="none"
}


var okte = document.querySelector(".kte");
var okfy = document.querySelector(".kfy");
okte.onmouseover = function(){
    okfy.style.display="block"
}
okte.onmouseout = function(){
    okfy.style.display="none"
}






class Block{
    constructor(){
        this.display()
    }
    display(){
        $(".ls1").hover(()=>{
            $(".cate1").css({display:"block"})
        },()=>{
            $(".cate1").css({display:"none"})
        })
    }
}



new Block()

