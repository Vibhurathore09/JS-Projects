// Producing Code
const promiseObj = new Promise((resolve , reject)=>{
    let req = false;
    if(req == true){
        resolve("request sucess");
    }
    else{
        reject("Request Rejected");
    }
});

// Consuming Code
promiseObj.then((value)=>{
    console.log(value);
} ,(error)=>{
    console.log(error);
})