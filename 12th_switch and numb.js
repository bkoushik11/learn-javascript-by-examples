var num=11.184568
console.log(num.toFixed(2)) //only 2 fractional numbers it is giving the o/p

var num = 1811;
var str = num.toString(); //converting number to string explicitly
console.log(str, typeof str)


switch(2){
    case 1:
        console.log("hello");
    case 2:
        console.log("hi");
    case 3:
        console.log("bye");
}

// switch(x) Another way using indirectly switch case i.e variables

let x=2;
switch(x){
    case 1:
        console.log("good morning");
        break;
    case 2:
        console.log("good evening");
        break;
    case 3:
        console.log("good night");
        break;
    default:
        console.log("good bye");
}