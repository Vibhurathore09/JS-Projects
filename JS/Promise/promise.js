//  Refactor CallbackHell Using Promise 

console.log("start");
function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside name settimeout");
            resolve(name);

        },2000)
    })
}
function getHobbies(name){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Inside hobbies settimeout");
            resolve(["Cricket" , "Photography" ,"Football" , "Reading"]);
        },1000)
    })
}

getName('Vibhu')
.then(nm => getHobbies(nm))
.then(hobbies => console.log(hobbies))