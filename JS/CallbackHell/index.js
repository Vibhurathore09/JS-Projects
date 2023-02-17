console.log("Start");

function getName(name , callback){
    setTimeout(() =>{
        console.log("Inside Name SetTimeout");
        callback(name);
    }, 2000)
}
function getHobbies(name , callback){
    setTimeout(()=>{
        console.log("Inside Hobbies SetTimeout");
        callback(["Football" , "Reading" , "Chess"]);
    } , 2000);
}
const nm = getName('Vibhu' , (nm) =>{
    console.log(nm);
    getHobbies(nm , (hobbie)=>{
        console.log(hobbie);
    })
})
console.log("end");