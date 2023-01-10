// Q:1
const element = document.getElementById("Btn1");
element.addEventListener("click",Btn1Function);

function Btn1Function() {
    document.getElementById("heading1").innerHTML ="MERN stack"
}

// Q:2
document.getElementById("heading2").innerHTML="Hello World";
// document.getElementsByTagName("h1")[0].innerHTML="Hello";
// // Q:3
function timer(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();
    console.log(hr,min,secs);
    document.getElementById("clock").innerHTML = hr+ ":" +min+ ":" +secs;
}
setInterval(timer,1000)

// Q:4
const element2 = document.getElementById("Btn2");
element2.addEventListener("click",Btn2Function);

function Btn2Function() {
    document.getElementById("para1").innerHTML ="Welcome to Elevation Academy"
}

// Q:5
const element3 = document.getElementById("Btn3");
element3.addEventListener("click",Btn3Function);

function Btn3Function() {
    document.getElementById("para2").style.display="none";
}