let houers = document.getElementById("houes");
let mint = document.getElementById("min");
let secd = document.getElementById("sec");
setInterval( () =>{
    let newTime = new Date();
 houers.innerHTML= newTime.getHours();
 mint.innerHTML = newTime.getMinutes();
 secd.innerHTML = (newTime.getSeconds() <10? "0" : " " ) + newTime.getSeconds();


},1000)

