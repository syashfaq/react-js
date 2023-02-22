
function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("Fetching Data please wait...");
        setTimeout(() => {
            if (complete) {
                resolve("Here is a Success.");
            }else{
                reject("Here is a Failure");
        
            }
        }, 5000);
        
    });
}


prom(true).then((result) => {console.log(result)}
).catch((error) =>{
    console.log(error);
});


