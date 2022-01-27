// create a type name with a string
type Name = string;
let MyName: Name = "Jaswant";
console.log(MyName);

// create a type age with a number
type Age = number;
let MyAge: Age = 23;
console.log(MyAge);

// create a type isFetching with boolean
type isFetching = boolean;
let Flag: isFetching = false;
console.log(Flag);

// create an array of numbers
type NumberArray = Array<number>;
let array: NumberArray = [5,1,7,2,3];
console.log(array);

// create an array of strings (using array constructor generic type)
type StringArray = Array<string>;
let arr: StringArray = ["Ram","Shyam","Krishna"];
console.log(arr);

// create a tuple , which keeps a string as the first value, and boolean as the second
let Movie: [string, boolean] [];
Movie = [["Bahubali", true], ["Pushpa", false]];
console.log(Movie);

// create an enum it should have User, SuperUser, Admin, SuperAdmin
enum UserPrivilege {
    User = 1,
    SuperUser,
    Admin,
    SuperAdmin
}
console.log(UserPrivilege);

// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
interface ArgumentType {
    a: number, 
    b: number
}
type Num = number;
const params = {a : 20, b: 30};
function StudentData(params : ArgumentType): number {
   return params.a+params.b;
}
console.log(StudentData(params));

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )

interface Type{
    x : number,
    y : number
}
function DivideXandY(argument:Type):number{
    return Math.floor(Number(argument.x/argument.y));
}
const arguments = {x:50, y:10};
console.log(DivideXandY(arguments));

// create a function that takes a name and prints it without returning anything
function DisplayName(employee:string):void{
    console.log(employee);
}
DisplayName("Alice");