function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings);

var userName = localStorage.getItem('receivedName');

if(username === null) {
  userName = 'friend!';
}

function saveName() {
  localStorage.setItem("receivedName", userName);
}

function changeName() {

  userName = document.getElementById('name-input').value;

  saveName();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();

   getGreeting()
});

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting()
