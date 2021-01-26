var sampleString = "Let\'s start our journey with JavaScript";
console.log(sampleString.indexOf("start"));
console.log(sampleString.lastIndexOf("start"));
console.log(sampleString.slice(5,11));

//substring(start,end) --> can't accept negative values
//substr(start,lenght) --> second parameter specifies the length of the extracted part

console.log(sampleString.replace("journey","adventure"));
console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());


var name1 = "kevin";
var name2 = new String("kevin");

if (name1 === name2) {
    console.log("result is true");
} else {
    console.log("result false");
}