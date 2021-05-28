let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Hello, " + myName;
    }    
}

myButton.onclick = function() {
    setUserName();
};