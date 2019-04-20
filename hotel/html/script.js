var Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var d = new Date();
var m = d.getMonth();
var n = d.getDate();
var h = d.getHours();
var min = d.getMinutes();
var s = d.getSeconds();
var y = d.getFullYear();







function guestNameButton1 () {
    if  (ol1.children.length < 4) {
    var guestAskName1 = document.getElementById('guestAskName1').value;
    document.getElementById('guestAskName1').value = "";
    var newList1 = document.createElement('li');
    var newText1 = document.createTextNode(guestAskName1 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList1.appendChild(newText1);
    var position1 = document.getElementById('ol1');
    position1.appendChild(newList1);
    
    
    newListUl1 = document.createElement('li');
    newListUl1.id = 'ullog1';
    var newTextUl1 = document.createTextNode ( guestAskName1 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl1.appendChild(newTextUl1);
    var positionUl1 = document.getElementById('ullog');
    positionUl1.appendChild(newListUl1);


    }
    else {
        document.getElementById('add1').disabled = true;
        document.getElementById('add1').innerHTML = "Room Full"
    }
}

function remove1 () {
    var getV1 = document.getElementById('people1').value;
    var getLi1 = document.getElementsByTagName('li')[getV1 - 1];
    var parent1 = getLi1.parentNode;
    parent1.removeChild(getLi1);
    document.getElementById('add1').disabled = false;
    document.getElementById('add1').innerHTML = "Check In";


}
function removeAll1 () {
   var removeList1 = document.getElementById('ol1');
   removeList1.innerHTML = '';
   document.getElementById('add1').disabled = false;
   document.getElementById('add1').innerHTML = "Check In"


}
function lock1 () {
    document.getElementById('add1').disabled = true;
    document.getElementById('add1').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock1 () {
    document.getElementById('add1').disabled = false;
    document.getElementById('add1').innerHTML = "Check In";
}



function guestNameButton2 () {
    if  (ol2.children.length < 4) {
    var guestAskName2 = document.getElementById('guestAskName2').value;
    document.getElementById('guestAskName2').value = "";
    var newList2 = document.createElement('li');
    newList2.id = 'li2';
    var newText2 = document.createTextNode(guestAskName2 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList2.appendChild(newText2);
    var position2 = document.getElementById('ol2');
    position2.appendChild(newList2);
    document.getElementById('add2').disabled = false;
    document.getElementById('add3').innerHTML = "Check In"
    
    newListUl2 = document.createElement('li');
    newListUl2.id = 'ullog2';
    var newTextUl2 = document.createTextNode ( guestAskName2 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl2.appendChild(newTextUl2);
    var positionUl2 = document.getElementById('ullog');
    positionUl2.appendChild(newListUl2);
    }
    else {
        document.getElementById('add2').disabled = true;
        document.getElementById('add2').innerHTML = "Room Full"
    }
}

function remove2 () {
    var getV2 = document.getElementById('people2').value;
    var getLi2 = document.getElementsByTagName('li')[getV2 - 1];
    var parent2 = getLi2.parentNode;
    parent2.removeChild(getLi2);
    document.getElementById('add2').disabled = false;
    document.getElementById('add2').innerHTML = "Check In"
}
function removeAll2 () {
   var removeList2 = document.getElementById('ol2');
   removeList2.innerHTML = '';
   document.getElementById('add2').disabled = false;
   document.getElementById('add2').innerHTML = "Check In"


}
function lock2 () {
    document.getElementById('add2').disabled = true;
    document.getElementById('add2').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock2 () {
    document.getElementById('add2').disabled = false;
    document.getElementById('add2').innerHTML = "Check In";
}



function guestNameButton3 () {
    if  (ol3.children.length < 4) {
    var guestAskName3 = document.getElementById('guestAskName3').value;
    document.getElementById('guestAskName3').value = "";
    var newList3 = document.createElement('li');
    newList3.id = 'li3';
    var newText3 = document.createTextNode(guestAskName3 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList3.appendChild(newText3);
    var position3 = document.getElementById('ol3');
    position3.appendChild(newList3);

    newListUl3 = document.createElement('li');
    newListUl3.id = 'ullog3';
    var newTextUl3 = document.createTextNode ( guestAskName3 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl3.appendChild(newTextUl3);
    var positionUl3 = document.getElementById('ullog');
    positionUl3.appendChild(newListUl3);


    }
    else {
        document.getElementById('add3').disabled = true;
        document.getElementById('add3').innerHTML = "Room Full"
    }
}

function remove3 () {
    var getV3 = document.getElementById('people3').value;
    var getLi3 = document.getElementsByTagName('li')[getV3 - 1];
    var parent3 = getLi3.parentNode;
    parent3.removeChild(getLi3);
    document.getElementById('add3').disabled = false;
    document.getElementById('add3').innerHTML = "Check In"
}
function removeAll3 () {
   var removeList3 = document.getElementById('ol3');
   removeList3.innerHTML = '';
   document.getElementById('add3').disabled = false;
   document.getElementById('add3').innerHTML = "Check In"


}
function lock3 () {
    document.getElementById('add3').disabled = true;
    document.getElementById('add3').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock3() {
    document.getElementById('add3').disabled = false;
    document.getElementById('add3').innerHTML = "Check In";
}

function guestNameButton4 () {
    if  (ol4.children.length < 4) {
    var guestAskName4 = document.getElementById('guestAskName4').value;
    document.getElementById('guestAskName4').value = "";
    var newList4 = document.createElement('li');
    newList4.id = 'li4';
    var newText4 = document.createTextNode(guestAskName4 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList4.appendChild(newText4);
    var position4 = document.getElementById('ol4');
    position4.appendChild(newList4);

    newListUl4 = document.createElement('li');
    newListUl4.id = 'ullog4';
    var newTextUl4 = document.createTextNode ( guestAskName4 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl4.appendChild(newTextUl4);
    var positionUl4 = document.getElementById('ullog');
    positionUl4.appendChild(newListUl4);
    }
    else {
        document.getElementById('add4').disabled = true;
        document.getElementById('add4').innerHTML = "Room Full"
    }
}

function remove4 () {
    var getV4 = document.getElementById('people4').value;
    var getLi4 = document.getElementsByTagName('li')[getV4 - 1];
    var parent4 = getLi4.parentNode;
    parent4.removeChild(getLi4);
    document.getElementById('add4').disabled = false;
    document.getElementById('add4').innerHTML = "Check In"
}
function removeAll4 () {
   var removeList4 = document.getElementById('ol4');
   removeList4.innerHTML = '';
   document.getElementById('add4').disabled = false;
   document.getElementById('add4').innerHTML = "Check In"

}
function lock4 () {
    document.getElementById('add4').disabled = true;
    document.getElementById('add4').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock4() {
    document.getElementById('add4').disabled = false;
    document.getElementById('add4').innerHTML = "Check In";
}

function guestNameButton5 () {
    if  (ol5.children.length < 4) {
    var guestAskName5 = document.getElementById('guestAskName5').value;
    document.getElementById('guestAskName5').value = "";
    var newList5 = document.createElement('li');
    newList5.id = 'li5';
    var newText5 = document.createTextNode(guestAskName5 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList5.appendChild(newText5);
    var position5 = document.getElementById('ol5');
    position5.appendChild(newList5);

    newListUl5 = document.createElement('li');
    newListUl5.id = 'ullog5';
    var newTextUl5 = document.createTextNode ( guestAskName5 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl5.appendChild(newTextUl5);
    var positionUl5 = document.getElementById('ullog');
    positionUl5.appendChild(newListUl5);


    }
    else {
        document.getElementById('add5').disabled = true;
        document.getElementById('add5').innerHTML = "Room Full"
    }
}

function remove5 () {
    var getV5 = document.getElementById('people5').value;
    var getLi5 = document.getElementsByTagName('li')[getV5 - 1];
    var parent5 = getLi5.parentNode;
    parent5.removeChild(getLi5);
    document.getElementById('add5').disabled = false;
    document.getElementById('add5').innerHTML = "Check In"
}
function removeAll5 () {
   var removeList5 = document.getElementById('ol5');
   removeList5.innerHTML = '';
   document.getElementById('add5').disabled = false;
   document.getElementById('add5').innerHTML = "Check In"

}
function lock5 () {
    document.getElementById('add5').disabled = true;
    document.getElementById('add5').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock5() {
    document.getElementById('add5').disabled = false;
    document.getElementById('add5').innerHTML = "Check In";
}

function guestNameButton6 () {
    if  (ol6.children.length < 4) {
    var guestAskName6 = document.getElementById('guestAskName6').value;
    document.getElementById('guestAskName6').value = "";
    var newList6 = document.createElement('li');
    newList6.id = 'li6';
    var newText6 = document.createTextNode(guestAskName6 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newList6.appendChild(newText6);
    var position6 = document.getElementById('ol6');
    position6.appendChild(newList6);

    newListUl6 = document.createElement('li');
    newListUl6.id = 'ullog6';
    var newTextUl6 = document.createTextNode ( guestAskName6 + " has checked in at " + h + ":" + min + " on " + Month[m] + " " + n +" "+ y);
    newListUl6.appendChild(newTextUl6);
    var positionUl6 = document.getElementById('ullog');
    positionUl6.appendChild(newListUl6);


    }
    else {
        document.getElementById('add6').disabled = true;
        document.getElementById('add6').innerHTML = "Room Full"
    }
}

function remove6 () {
    var getV6 = document.getElementById('people6').value;
    var getLi6 = document.getElementsByTagName('li')[getV6 - 1];
    var parent6 = getLi6.parentNode;
    parent6.removeChild(getLi6);
    document.getElementById('add6').disabled = false;
    document.getElementById('add6').innerHTML = "Check In"
}
function removeAll6 () {
   var removeList6 = document.getElementById('ol6');
   removeList6.innerHTML = '';
   document.getElementById('add6').disabled = false;
   document.getElementById('add6').innerHTML = "Check In"

}
function lock6 () {
    document.getElementById('add6').disabled = true;
    document.getElementById('add6').innerHTML = "Room Locked. Contact Staff for Assistance";
}
function unlock6() {
    document.getElementById('add6').disabled = false;
    document.getElementById('add6').innerHTML = "Check In";
}












