document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest(){
//     console.log("Button Clicked");
//     fetch('data.json').then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText);
//         }
//         console.log(res);
//         const dt = res.json();
//         console.log("Dt" , dt);
//         return dt;
//     }).then((data)=>{
//         console.log("data" , data);
//         console.log(data.name);
//         console.log(data.roll);
//     }).catch((error) =>{
//         console.log(error);
//     })
// }


function makerequest(){
    console.log("Button Clicked");
    fetch('data.json').then((res)=>{
        if(!res.ok){
            throw Error(res.statusText);
        }
        console.log(res);
        const dt = res.json();
        console.log("Dt" , dt);
        return dt;
    }).then((data)=>{
        console.log("data" , data);
        document.getElementById("divdata1").innerHTML = data.name;
        document.getElementById("divdata2").innerHTML = data.roll;
        // console.log(data.name);
        // console.log(data.roll);
    }).catch((error) =>{
        console.log(error);
    })
}