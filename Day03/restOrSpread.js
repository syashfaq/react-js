const numbers = [2,3,4,5];
const [a,b,c,d] = numbers;
console.log(b);
//Rest Operator and Spread Operator
const [...restNumbers] = numbers;
// console.log("first Number:", first);
console.log("rest number:",restNumbers);

//spread operator
const obj = {
    temp1 : "34",
    temp2 : "546",
    fName : "Sayyed",
    lName : "Ashfaq"
}
const {temp1,temp2,...person} = obj;
console.log(temp1,temp2);
console.log("person: ",person);