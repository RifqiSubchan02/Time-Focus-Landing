// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('Focus');

// Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;


    setTimeout(showTime,1000);
}

// Add Zeroes
function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '')+n;
}

// Set Background and Greeting
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('../Time_Focus_Landing/img/Morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('../Time_Focus_Landing/img/Afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else{
        // Evening
        document.body.style.backgroundImage = "url('../Time_Focus_Landing/img/Night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('name', e.target.innerText)
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Name]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('isfocus', e.target.innerText)
            isfocus.blur();
        }
    }else{
        localStorage.setItem('isfocus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('bluer', setName);
isfocus.addEventListener('keypress', setFocus);
isfocus.addEventListener('bluer', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();