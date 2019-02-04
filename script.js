var tally0 = [];
var tally1 = [];
var tally2 = [];
var tally3= [];
var tally4 = [];
var tally5 = [];
var deadify = [];
var foods = {
    "foodlist0" : "Orange Chicken Combo",
     "cost0" : 10.99,

    "foodlist1" : "Bowl of Rice",
     "cost1" : 1.99,
    
    "foodlist2" : "Fried Saimin Combo", 
    "cost2" : 5.99,

    "foodlist3" : "Mochiko Chicken Combo", 
    "cost3" : 10.00,

    "foodlist4" : "Soda", 
    "cost4" : 1.99,

    "foodlist5" : "Juice", 
    "cost5" : 1.99,
    
    "tax" : 4.712
};



var foods = JSON.stringify(foods);
var mydata = JSON.parse(foods);    
document.getElementById('foodName0').innerHTML = mydata.foodlist0;
document.getElementById('foodName1').innerHTML = mydata.foodlist1;
document.getElementById('foodName2').innerHTML = mydata.foodlist2;
document.getElementById('foodName3').innerHTML = mydata.foodlist3;
document.getElementById('foodName4').innerHTML = mydata.foodlist4;
document.getElementById('foodName5').innerHTML = mydata.foodlist5;
document.getElementById('foodPrice0').innerHTML = mydata.cost0;
document.getElementById('foodPrice1').innerHTML = mydata.cost1;
document.getElementById('foodPrice2').innerHTML = mydata.cost2;
document.getElementById('foodPrice3').innerHTML = mydata.cost3;
document.getElementById('foodPrice4').innerHTML = mydata.cost4;
document.getElementById('foodPrice5').innerHTML = mydata.cost5;




    
function submit0() {
var q0 = document.getElementById("quant0").value;
var c0 = mydata.cost0;
var t0 = c0 * q0;
document.getElementById("subTotal0").innerHTML = "$" + t0.toFixed(2) + "" + " : " + "" + q0 + " x " + mydata.foodlist0;
deadify.push(t0);
}
function submit1() {
var q1 = document.getElementById("quant1").value;
var c1 = mydata.cost1;
var t1 = c1 * q1;
document.getElementById("subTotal1").innerHTML = "$" + t1.toFixed(2) + "" + " : " + "" + q1 + " x " + mydata.foodlist1;
deadify.push(t1);
}
function submit2() {
var q2 = document.getElementById("quant2").value;
var c2 = mydata.cost2;
var t2 = c2 * q2;
document.getElementById("subTotal2").innerHTML = "$" + t2.toFixed(2) + "" + " : " + "" + q2 + " x " + mydata.foodlist2;
deadify.push(t2);
}
function submit3() {
var q3 = document.getElementById("quant3").value;
var c3 = mydata.cost3;
var t3 = c3 * q3;
document.getElementById("subTotal3").innerHTML = "$" + t3.toFixed(2) + "" + " : " + "" + q3 + " x " + mydata.foodlist3;
deadify.push(t3);
}
function submit4() {
var q4 = document.getElementById("quant4").value;
var c4 = mydata.cost4;
var t4 = c4 * q4;
document.getElementById("subTotal4").innerHTML = "$" + t4.toFixed(2) + "" + " : " + "" + q4 + " x " + mydata.foodlist4;
deadify.push(t4);
}
function submit5() {
var q5 = document.getElementById("quant5").value;
var c5 = mydata.cost5;
var t5 = c5 * q5;
document.getElementById("subTotal5").innerHTML = "$" + t5.toFixed(2) + "" + " : " + "" + q5 + " x " + mydata.foodlist5;
deadify.push(t5);
}
function checkOut() {
    if (deadify[0] != null) {

    const sum = deadify.reduce((total, amount) => total + amount); 
    localStorage.setItem('deadify', sum);
    location.href="checkout.html";


    var tally0 = document.getElementById("quant0").value;
    var tally1 = document.getElementById("quant1").value;
    var tally2 = document.getElementById("quant2").value;
    var tally3= document.getElementById("quant3").value;
    var tally4 = document.getElementById("quant4").value;
    var tally5 = document.getElementById("quant5").value;
    localStorage.setItem(tallyNumber0, tally0);

    }
    else {
        window.alert("You don't have any items selected!")
    }
}

function log() { 
    console.log(deadify);
}






