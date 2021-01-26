//var newList = document.createElement("li");
//newList.innerHTML = "I was added by JS";
//
//document.getElementById("change").appendChild(newList);


function myFunction() {
    var x = document.forms["myForm"];
    var text = "";
    var i;
    for (i = 0; i <x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("getValue").innerHTML = text;
}