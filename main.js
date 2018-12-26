
// opens and closes the settings input form
function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings);


// stores usersname in localStorage
var userName = localStorage.getItem('receivedName');


// if no user name is set it will print out 'friend'
if(username === null) {
  userName = 'friend!';
}

// save received name into localStorage
function saveName() {
  localStorage.setItem("receivedName", userName);
}

// gets the value of input and saves it
function changeName() {

  userName = document.getElementById('name-input').value;

  saveName();
}

// sets the saved username to the greeting
document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();

   getGreeting()
});

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting()
