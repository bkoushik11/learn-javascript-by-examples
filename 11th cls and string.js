// Constructor in class is a method. But it is actually a function outside the class.
// constructor method is called and executed when class is called using the object.
class student{
    // constructor()
    // {
    //     console.log("The object is created.")
    // }
    constructor(firstName , lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }
    displayFullname(){
        console.log(this.firstName + " " + this.lastName);
        // return  this.firstName + " " + this.lastName; If return is used then outside the program it must be catached
        // by using another variable
    }
}

const s1 = new student("koushik", "B");
const s2 = new  student("karthik", "c")
//Object is created using new keyword. It stores the o/p. 

s1.displayFullname()
s2.displayFullname() 
// Method is called so that it gives the output.

// const name1 =s1.displayFullname(); A new variable is created to store the return o/p of method in the class.
// console.log(name1); For displaying


// String methods knowing

var text = "Knowing about the strings is  interesting";
console.log(text);

var text = "Knowing about the strings \n is  interesting"; //\n is takes the paragraph to the next line.
console.log(text);

var text = "Knowing about the strings\t is  interesting"; //\t Tab space between the words.
console.log(text);

var text = "Knowing about the strings is  interesting";
var n = text.length
console.log(text, n);

var text = "Knowing About The Strings is  interesting";
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.slice(4));
console.log(text.slice(4,10));

var text = "    Knowing About The Strings is  interesting     ";
console.log(text);
console.log(text.trim()); //removes the white spaces from the lines. [trimStart] removes the starting whitespaces in the line





