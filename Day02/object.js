const mystery = "answer";
const a = 7;
const fullName = "Ashfaq";
const obj = {
    fullName ,
    a,
    b:25,
    ["fname"]: "Ashfaq",
    [mystery]:65,
    ["lname"]:"Shaikh",
}
console.log(obj.fullName);
console.log(obj.a);
console.log(obj.b);
console.log(obj.answer);
console.log(obj.lname);
console.log(obj.fname);