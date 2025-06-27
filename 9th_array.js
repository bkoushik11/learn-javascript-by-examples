const family =["karthika", "koushik", "sony", "suresh"]
console.log(family);
console.log(family[1]);

// deleting the last elements in the array using pop

family.pop();
console.log(family)

// adding elements at the end of the array using push

family.push("srinivas");
console.log(family)

// using objects in array

const student = [
    {
        name:"Ravi",
        roll:3,
        marks:80
    },
    {
        name:"ankithha",
        roll:60,
        marks:95
    },
    {
        name:"akhil",
        roll:5,
        marks:90
    }
]

console.log(student[1])
console.log(student[1].name)
console.log(student)

// To know how many elements are there in array use the method LENGTH

console.log(student.length)


// getting only last certain number of elements using slice method

const cars=["ford","hyundai","kia","MG"]
// const newCars=cars.slice(2);
// console.log(cars)
// console.log(newCars)
// console.log(cars.slice(2)) By this line also it can be printed

console.log(cars.sort())

// To print last element as first element use REVERSE Method

cars.reverse()
console.log(cars);

const numb = [5,4,3,2];
numb.sort()
console.log(numb)
// In the array the elements can be modified by using their index number and value assign to it.

numb[0]=6;
console.log(numb)

// have to get know about the foreach loop