// Map is a part of array. It takes the elements of the array, perform some operations on it. new generated values are store in new array
const number1=[3,5,6,8];
// value, index, array This 3 attributes can be passed into the parenthesis
const newNumb = number1.map(function(value){
    return value*2;
})
console.log(number1);
console.log(newNumb);

const members=["ram","shiva","krishna","vishnu"];
const gods = members.map(function(value){
    var x="lord"
    return x+" " +value;
})
console.log(members);
console.log(gods);
