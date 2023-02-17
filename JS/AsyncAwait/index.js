console.log("start");
function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside name settimeout");
            resolve(name);

        }, 2000)
    })
}
function getHobbies(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside hobbies settimeout");
            resolve(["Cricket", "Photography", "Football", "Reading"]);
        }, 1000)
    })
}

async function showHobby() {
    try {
        const nm = await getName('Vibhu');
        const hobby = await getHobbies(nm);
        console.log(hobby);
    } catch (error) {
        console.log("Could not fecth Hobbies");
    }
}
showHobby();
console.log("END");