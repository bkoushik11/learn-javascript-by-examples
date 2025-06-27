// Only If condition
var x=10;
if (x%2 ==0){
    console.log("even");
}
if (x%2 !=0){
    console.log("odd");
}

// If-else condition

var t=11;
if (t%2 ==0){
    console.log("even");
}
else{
    console.log("odd");
}

// Multiple If and else conditions checking 

var s=10;
if(s>100){
        console.log("First")
}
if(s>1){
    console.log("Second")
    if(s!=10){
        console.log("Third")
    }
    console.log("Fourth")
}
else{
    console.log("go and sleep")
}

// If and else-if ladder

console.log("Hello");
var x=10;
var y=15;
var z=30;
if(x>y && x>z){
    console.log(x, " is greater number")
}
else if(y>x && y>z){
    console.log(y, " is greater number");
}
// else
else if(z>x && z>y){
    console.log(z, "is greater number")
}