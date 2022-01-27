var MyName = "Jaswant";
console.log(MyName);
var MyAge = 23;
console.log(MyAge);
var Flag = false;
console.log(Flag);
var array = [5, 1, 7, 2, 3];
console.log(array);
var arr = ["Ram", "Shyam", "Krishna"];
console.log(arr);
// create a tuple , which keeps a string as the first value, and boolean as the second
var Movie;
Movie = [["Bahubali", true], ["Pushpa", false]];
console.log(Movie);
// create an enum it should have User, SuperUser, Admin, SuperAdmin
var UserPrivilege;
(function (UserPrivilege) {
    UserPrivilege[UserPrivilege["User"] = 1] = "User";
    UserPrivilege[UserPrivilege["SuperUser"] = 2] = "SuperUser";
    UserPrivilege[UserPrivilege["Admin"] = 3] = "Admin";
    UserPrivilege[UserPrivilege["SuperAdmin"] = 4] = "SuperAdmin";
})(UserPrivilege || (UserPrivilege = {}));
console.log(UserPrivilege);
var params = { a: 20, b: 30 };
function StudentData(params) {
    return params.a + params.b;
}
console.log(StudentData(params));
function DivideXandY(argument) {
    return Math.floor(Number(argument.x / argument.y));
}
var arguments = { x: 50, y: 10 };
console.log(DivideXandY(arguments));
// create a function that takes a name and prints it without returning anything
function DisplayName(employee) {
    console.log(employee);
}
DisplayName("Alice");
