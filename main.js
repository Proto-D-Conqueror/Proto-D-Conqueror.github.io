const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mozilla-firefox.jpeg"){
        myImage.setAttribute("src", "images/african-students.jpeg");
    } 
    else{
        myImage.setAttribute("src", "images/mozilla-firefox.jpeg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername(){
    const myName = prompt("Please enter your name");
    if(!myName){
        setUsername();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUsername();
} 
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUsername();
};