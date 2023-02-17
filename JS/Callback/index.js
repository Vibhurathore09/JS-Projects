// console.log("start");
// function getName(name) {
//     setTimeout(() => {
//         console.log("Inside Timeout");
//         return name; // returns undefined 
//     }, 2000);
// }
// const nm = getName("Vibhu");
// console.log(nm); // Undefined -> reason is getName will run after 2sec and return name after its execution so , it returns undefined
// console.log("End");



// Solving above problem using Callback
console.log("start");
function getName(name, Callback) {
    setTimeout(() => {
        console.log("Inside Timeout");
        Callback(name); // returns undefined 
    }, 2000);
}
const nm = getName("Vibhu", (nm) => {
    console.log(nm);
});
console.log("End");