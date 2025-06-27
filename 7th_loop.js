// While loop
console.log("Hello");
var x=0;
while (x<3){
    console.log("World", x);
    x++;
}
console.log("Bye")

// Table 2 display using loop

var x=2;
var i=1;
while(i<=4)
    {
        console.log(x,"x",i,"=", x*i );
        i++;
    }

    // For loop

for(var i=1; i<=5; i++)
console.log(i)

// Do while Loop

var j=10;
do{
    console.log(j);
    j++;
}
while(j>15)

// Break statement

var x=0;
while (x<30){
    if(x==2){
        break;
    }
    console.log(x);
    x++;
}
console.log("The loop is ended");

// Continue statement

var x=0;
while (x<3){
    x++;
    if(x==1){
        continue;
    }
    console.log(x);
}
console.log("The loop is ended now only");