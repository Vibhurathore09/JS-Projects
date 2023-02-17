document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | Single Data
// function makerequest() {
//     console.log("Button Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             // console.log("Res", res)
//             // console.log("Dt", dt);
//             return res.json();;
//         }).then((data) => {
//             console.log("Data", data);
//             console.log("ID", data.id);
//             console.log("Title", data.title);
//             console.log("Body", data.body);
//         }).catch((error) => {
//             console.log(error);
//         })
// }

// Promise then | Single Data | Div
// function makerequest() {
//     console.log("Button Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             // console.log("Res", res)
//             // console.log("Dt", dt);
//             return res.json();;
//         }).then((data) => {
//             console.log("Data", data);
//             // console.log("ID", data.id);
//             // console.log("Title", data.title);
//             // console.log("Body", data.body);
//             document.getElementById("divdata1").innerHTML = data.id;
//             document.getElementById("divdata2").innerHTML = data.title;
//             document.getElementById("divdata3").innerHTML = data.body;

//         }).catch((error) => {
//             console.log(error);
//         })
// }

// Promise then | Multiple Data
// function makerequest() {
//     console.log("Button Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             // console.log("Res", res)
//             // console.log("Dt", dt);
//             return res.json();;
//         }).then((data) => {
//             data.forEach(e => {
//                 // console.log(e);
//                 console.log("ID", e.id);
//                 console.log("Title", e.title);
//                 console.log("Body", e.body);
//             });
//         }).catch((error) => {
//             console.log(error);
//         })
// }

// Promise then | Mutile data | Showing Data
// function makerequest() {
//     console.log("Button Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             // console.log("Res", res)
//             // console.log("Dt", dt);
//             return res.json();;
//         }).then((data) => {
//             let output = document.getElementById("allpost")
//             data.forEach(element => {
//                 output.innerHTML += `
//                 <div> ID : ${element.id}</div>
//                 <div> Title :  ${element.title} </div>
//                 <div>Body :  ${element.body} </div>
//                 <hr>`
//             });
//         }).catch((error) => {
//             console.log(error);
//         })
// }

// Async and Await | Single Data
// async  function makerequest(){
//     try {
//        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//        if(!res.ok){
//         throw Error(res.statusText);

//        }
//        const data = await res.json();
//        console.log(data);
//        console.log(data.id);
//        console.log(data.body);
//        console.log(data.title);

//     } catch (error) {
//         console.log(error);
//     }
// }

// Async and Await | Single Data| Show data
// async  function makerequest(){
//     try {
//        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//        if(!res.ok){
//         throw Error(res.statusText);

//        }
//        const data = await res.json();
//     //    console.log(data);
//     //    console.log(data.id);
//     //    console.log(data.body);
//     //    console.log(data.title);
//     document.getElementById("divdata1").innerHTML = data.id;
//     document.getElementById("divdata2").innerHTML = data.title;
//     document.getElementById("divdata3").innerHTML = data.body;

//     } catch (error) {
//         console.log(error);
//     }
// }

// Async and await | Multipe Data
// async  function makerequest(){
//     try {
//        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//        if(!res.ok){
//         throw Error(res.statusText);

//        }
//        const data = await res.json();
//        console.log(data);
//        data.forEach(element => {
//          console.log(element.id);
//          console.log(element.title);
//          console.log(element.body);
//        });

//     } catch (error) {
//         console.log(error);
//     }
// }

// Async and Await | Multipe Data | Show Data
async  function makerequest(){
    try {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       if(!res.ok){
        throw Error(res.statusText);

       }
       const data = await res.json();
       console.log(data);
       const output = document.getElementById("allpost")
       data.forEach(element => {
            output.innerHTML += `
            <div>ID : ${element.id}</div>
            <div>Title : ${element.title}</div>
            <div>Body : ${element.body}</div>
            <hr>`
       })   ;

    } catch (error) {
        console.log(error);
    }
}