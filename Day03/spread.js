const obj = {
    temp1 : "34",
    temp2 : "546",
    fName : "Sayyed",
    lName : "Ashfaq",
}
const obj1 = {...obj};
obj1.color = "Fair";
console.log("new property: ",obj1.color);