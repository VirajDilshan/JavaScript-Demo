/*function increaseHighScore(currentScore) {
    
    var newHighScore = 2 * currentScore;
    return newHighScore;
}


var increaseHighScore = function (currentScore) {
    
    var newHighScore = 2 * currentScore;
    return newHighScore;
}

console.log(increaseHighScore(40));


document.getElementById("testOne").innerHTML =  increaseHighScore(10);

var increaseHighScore = function (currentScore) {
    
    var newHighScore = 2 * currentScore;
    return newHighScore;
}(50);



console.log(increaseHighScore);




var honda = {
    name : "CB Trigger",
    color : "Black",
    
    getBudget : function(cost) {
        return ("Budget is too much",
               console.log(this.name)
               )
    },
    
    shoutOuts : [
        {kevin : "A cool bike"},
         {sam : "Not powerful enough"}
    ]
}

honda.getBudget(8000); 
document.getElementById("testOne").innerHTML = honda.shoutOuts["1"];


var walk = function() {
    return ("He can walk");
}

var superHero = function(){
    var power, villian;
}

superHero.prototype.walk = walk;

peterParker = new superHero;
peterParker.power = "AirSwing";
peterParker.villian = "Green Goblin";

console.log(peterParker.walk());

clarkKent = new superHero;
clarkKent.power = "fly";
clarkKent.villian = "Lex Luther";

console.log(clarkKent.villian);




var multiplier = function() {
    var result = 1;
    for(var i = arguments.length-1; i >= 0; i--) {
        result *= arguments[i];
    }
    return result;
}

console.log(multiplier(2,5,2));



var doSomething = function(work) {
    console.log(work);
    console.log(this.benchPress);
}

doSomething("pushups");
var exercise = {benchPress : "4 sets", squats: "2 sets" }
doSomething.call(exercise, exercise.squats);
doSomething.apply(exercise,["crunches"]);
*/

var counter = (function()
    {
        var addOne = 0;
        return function(){
            return addOne += 1;
        }
    }
) ();

console.log(counter);










//document.getElementById("testOne").innerHTML = "";