


function total(){


    var y1=document.getElementById("pizzaSize1");
    var y2=document.getElementById("pizzaSize2");
    var y3=document.getElementById("pizzaSize3");
    var y4=document.getElementById("pizzaSize4");

    
    
    if(document.getElementById("pizzaSize1").checked){
       var pizzaprice=parseInt(y1)
    }
    if(document.getElementById("pizzaSize2").checked){
        var pizzaprice=parseInt(y2)
    }
    if(document.getElementById("pizzaSize3").checked){
        var pizzaprice=parseInt(y3)
    }
    if(document.getElementById("pizzaSize4").checked){
        var pizzaprice=parseInt(y4)
    }
    document.getElementById("money").innerHTML= pizzaprice;
  

}


function topping(){
   

    var x1 = document.getElementById("topping1").value;  
    var x2 = document.getElementById("topping2").value;  
    var x3 = document.getElementById("topping3").value;  
    var x4 = document.getElementById("topping4").value;  
    var x5 = document.getElementById("topping5").value;  
    var x6 = document.getElementById("topping6").value;  
    var x7 = document.getElementById("topping7").value;  
    var x8 = document.getElementById("topping8").value;
  
    var tTop="0"

    if(document.getElementById("topping1").checked){
        var t1=parseInt(x1)
        tTop=parseInt(tTop+t1)
    }
    if(document.getElementById("topping2").checked){
        var t2=parseInt(x2)
        tTop=parseInt(tTop+t2)
    }
    if(document.getElementById("topping3").checked){
        var t3=parseInt(x3)
        tTop=parseInt(tTop+t3)
    }
    if(document.getElementById("topping4").checked){
        var t4=parseInt(x4)
        tTop=parseInt(tTop+t4)
    }
    if(document.getElementById("topping5").checked){
        var t5=parseInt(x5)
        tTop=parseInt(tTop+t5)
    }
    if(document.getElementById("topping6").checked){
        var t6=parseInt(x6)
        tTop=parseInt(tTop+t6)
    }
    if(document.getElementById("topping7").checked){
        var t7=parseInt(x7)
        tTop=parseInt(tTop+t7)
    }
    if(document.getElementById("topping8").checked){
        var t8=parseInt(x8)
        tTop=parseInt(tTop+t8)
    }
      var totaltop=parseInt(tTop);
    return document.getElementById("result").innerHTML = totaltop;  
}


