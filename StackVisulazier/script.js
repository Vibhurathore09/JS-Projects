const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const input = document.querySelector(".text");
const bucket = document.querySelector(".main-stack-bucket");
const message = document.querySelector(".message");
const messageBox = document.querySelector(".message-box");
const stack = [];
// for disable all buttons
const buttonDisable = () => {
    push.disabled = true;
    push.classList.add("disable-button");
    pop.disabled = true;
    pop.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};

// for enable all buttons

const buttonEnable = () => {
    push.disabled = false;
    push.classList.remove("disable-button");
    pop.disabled = false;
    pop.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    push.disabled = false;
};

// when the push button is clicked
push.addEventListener("click", () => {
    if (input.value == "") {
        message.innerHTML = "Please Enter a value";
        messageBox.classList.add("error-message");
        setTimeout(()=>{
            messageBox.classList.remove("error-message");
        },1200);
        return;
    }

    if(stack.length == 5){
        input.value = "";
        message.innerHTML = "Stack Overflow";
        messageBox.classList.add("error-message");
        setTimeout(()=>{
            messageBox.classList.remove("error-message");
        },1200);
        return;
    }
    const itemValue = input.value; //for store the input value
    stack.push(itemValue); // push the value into the stack

    // creating a new element 
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length-1];
    bucket.appendChild(element);

    // upadte the top
    box[0].innerHTML = stack[stack.length-1];

    // clear the input box
    input.value = "";

    // adding the animation for a new push element
    element.classList.add("ele-add");

    // disable all buttons
    buttonDisable();

    // after pushing the element
    setTimeout(()=>{
        // remove the animation
        element.classList.remove("ele-add");
        // update the Last Pushed Item Value
        box[1].innerHTML = itemValuel

        // Dispalye the message 
        message.innerHTML = `Item ${stack[stack.length-1]} is Pushed.`;
        // Enable all buttons
        buttonEnable();
    }, 1500);
})