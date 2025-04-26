const heading = document.querySelector(".animation-heading");
const message = ["I am a Coder !","I am a Student !","I am a Learner !"];
let idx = 0;


function typeMessage(message){
   let i = 0;  
   heading.innerHTML = "";
   const addText = setInterval(()=>{
    heading.innerHTML = heading.innerHTML + message[i]; // i=I then i=a then i=m  and so more
    i++;
    if(i === message.length){
        clearInterval(addText);
        setTimeout(earseMessage,1000);// call earseMessage function after 1sec
    }
   },50) //set time 0.05sec for typing spped of text appear 
  
}

function earseMessage(){
   const eraseMsg = setInterval(()=>{
    heading.innerHTML = heading.innerHTML.slice(0,-1); // continuoulsy deleted last i 
    if(heading.innerHTML.length === 0){
        clearInterval(eraseMsg);
       idx = (idx + 1) % message.length; // run cycle for idx = 0 then idx = 1 then idx = 2 and again idx = 0
       setTimeout(typeMessage(message[idx]),1000)
    }
   },50)
}

typeMessage(message[idx]);



