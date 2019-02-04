var foods = {
    "foodlist0" : "Orange Chicken",
     "cost" : 10.99,

    "foodlist1" : "Bowl of Rice",
     "cost1" : 1.99,
    
    "foodlist2" : "Water", 
    "cost2" : 0.99,

    "foodlist3" : "Cake Noodle", 
    "cost3" : 5.00,

    "foodlist4" : "Fried Rice", 
    "cost4" : 2.99,

    "foodlist5" : "Juice", 
    "cost5" : 1.99,
    
    "tax" : 4.712
};



//Item Array
var items = JSON.stringify(foods);
var mydata = JSON.parse(foods);  
document.getElementById("itemName").innerHTML = mydata.foodlist0;


//Order Button for Orange Chicken
function submit0() {
var q = document.getElementById("quantity").value;
var c = mydata.cost;
var z = c * q;
document.getElementById("SubTotal").innerHTML = "$" + z + "" + " : " + "" + q + " x " + "Spicy Ahi";
}