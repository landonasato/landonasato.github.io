window.onload = function() {
    pageLoad()
  }

var sburger = {
    name: ["Spicy Burger"],
    meat: ["Angus Beef"],
    veg: ["Lettuce, Tomato, Onion"],
    sauce: ["Mayo, Sriracha"],
    cheese: ["Cheddar Cheese"],
    price: ["Burger Price - $12.95"],
  }
  

  var mburger = {
    name: ["Mild Burger"],
    meat: ["Turkey"],
    veg: ["Lettuce, Tomato, Onion"],
    sauce: ["Mayo, Mustard"],
    cheese: ["Cheddar Cheese"],
    price: ["Burger Price - $10.95"],
  }
  
    

function pageLoad() {
    document.getElementById("nameOfBurger1").innerHTML = sburger.name;
    document.getElementById("meat1").innerHTML = sburger.meat;
    document.getElementById("veg1").innerHTML = sburger.veg;
    document.getElementById("sauce1").innerHTML = sburger.sauce;
    document.getElementById("cheese1").innerHTML = sburger.cheese;
    document.getElementById("price1").innerHTML = sburger.price;
    document.getElementById("nameOfBurger2").innerHTML = mburger.name;
    document.getElementById("meat2").innerHTML = mburger.meat;
    document.getElementById("veg2").innerHTML = mburger.veg;
    document.getElementById("sauce2").innerHTML = mburger.sauce;
    document.getElementById("cheese2").innerHTML = mburger.cheese;
    document.getElementById("price2").innerHTML = mburger.price;

}


function burgerCal1() {
    var priceCal1 = 12.95
    var tax1 = (priceCal1 * 0.04712) + priceCal1;
    document.getElementById("finalPrice1").innerHTML = tax1.toFixed(2);
    document.getElementById("yourPrice").innerHTML = "Your price is $"

    
}
function burgerCal2() {
    var priceCal3 = 10.95
    var tax1 = (priceCal3 * 0.04712) + priceCal3;
    document.getElementById("finalPrice2").innerHTML = tax1.toFixed(2);
    document.getElementById("yourPrice2").innerHTML = "Your price is $"
}
