function displayTable(y){
    for(var i=1; i<=5; i++)
        {
            console.log(y, "x", i, "=", y*i)
    }
}
console.log("The file is created to know about the functions");
displayTable(y=11);
var x=12;
console.log(x)

// Sum or addition function

function sum(x,y){
    console.log("sum :", x+y);
}

sum(20,5)

// subtraction function: It returns a value and it can be used in the progarm and performed different operations on it.

function sub(x,y)
{
    var z=x-y;
    return z;
}

var ret1 = sub(10,4) 
console.log(ret1*3)

var ret2 = sub(15,4)
console.log(ret2 ,"+", ret1*3)