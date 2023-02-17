document.getElementById('btn').addEventListener('click', fun);
// async function fun() {
//     console.log("Button Clicked");
//     const res = await fetch('txt.txt');
//     console.log(res);
//     const data = await res.text();
//     console.log(data);
//     document.getElementById("divdata").innerHTML = data;
// }

// Error Handling
async function fun() {
    try {
        
        console.log("Button Clicked");
        const res = await fetch('txt1.txt');
        if(!res.ok){
            throw new Error(res.statusText)
        }
        console.log(res);
        const data = await res.text();
        console.log(data);
        document.getElementById("divdata").innerHTML = data;
    } catch (error) {
        console.log(error);
    }

}