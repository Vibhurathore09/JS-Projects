const promiseObj = new Promise((resolve ,reject)=>{
    let num = 10;
    resolve(num);
}).then((value)=>{
    console.log(value);
    return value+10;
}).then((value)=>{
    console.log(value);
    return value;
}).then(()=>{
    throw new Error("Error found")
}).catch((error)=>{
    console.log(error);
})