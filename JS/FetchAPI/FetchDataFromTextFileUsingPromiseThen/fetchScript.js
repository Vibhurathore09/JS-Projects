// Fetching a text document using fetch

document.getElementById("btn").addEventListener('click' , markerequest);

function markerequest(){
    // console.log("Button Clicked");
    // const promiseObj = fetch('txt.txt');
    // console.log(promiseObj)
    // promiseObj.then((res)=>{
    //     console.log(res);
    //     return res.text();
    // }).then((data)=>{
    //     console.log(data);
    // })
    
    
    
    // With Error Handling 

    fetch('txt.txt').then((res)=>{
        if(res.ok == false){
            throw new Error(res.statusText)
        }
        console.log(res);
        return res.text();
    }).then((data)=>{
        console.log(data);
        document.getElementById("divdata").innerHTML = data;
    }).catch((error)=>{
        console.log(error);
    })

}