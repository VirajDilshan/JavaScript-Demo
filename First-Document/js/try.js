/*
try {
    aleert("Hello User");
}
catch(err){
    document.getElementById("testOne").innerHTML = err.message;
}
*/


function myError() {
    
    var msg, x;
    
    msg = document.getElementById("msg");
    msg.innerHTML = "";
    
    x = document.getElementById("some").value;
    
    try{
        if(x=="") throw "Please insert a number";
        if(isNaN(x)) throw "Only numbers are allowed";
        if(x<4) throw "Insert a number greater than three";
    }
    catch(err) {
        msg.innerHTML = "Error!!!! Error!!!! " + err;
    }
    finally {
        document.getElementById("some").value = "";
    }
}