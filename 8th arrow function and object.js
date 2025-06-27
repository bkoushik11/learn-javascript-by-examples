// Arrow function is used mostly when we know more about the react.js 
// Just know how the function is declared and practice few times.
const demo = ()=>
    {
        console.log("Knowing Arrray ")
    }
demo();

const sum =(x,y)=>
    {
        return x+y;
    }
var z = sum(11,7);
console.log(z);

// Knowing and using the objects in javascript

console.log("object properties");

const student = {
    firstName: "B",
    lastName: "koushik",
    phone: 6302468,
    displayName:function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(student);
console.log(student.lastName);

const fullName=student.displayName();
console.log(fullName);

// objects can be used to store the functions and return when it is needed
// this: keyword is not explained now, so don't worry about that keyword.

