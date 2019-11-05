//<button onclick = "myFunction()">

// console.log("Hi!!!");

let theBody = document.querySelector("body");
console.log(theBody.style);


//Make the button do something
const theButton = document.querySelector("#button1");
theButton.addEventListener('click', clickButton);


const theOtherButton = document.querySelector("#button2");
theOtherButton.addEventListener('click',clickButton2);


function clickButton() {
  console.log("clicked");
  theBody.style.backgroundColor = "yellow";
  theBody.style.color = "blue";
}

function clickButton2() {
  console.log("YAY")
  theBody.style.color = "slategray";
  theBody.style.backgroundColor = "pink";
}

const theText = document.querySelector("p"); document.addEventListener('keydown', changeSize => {
  if(changeSize.keyCode === 71){
    theText.style.fontSize = "10px";
  }
  else if(changeSize.keyCode === 72 ){
    theText.style.fontSize = "25px";
  }
})
