function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings);

var userName = localStorage.getItem('receivedName');

function saveName() {
  localStorage.setItem("receivedName", userName);
}

function changeName() {

  userName = document.getElementById('name-input').value;

  saveName();
}

if (userName == null) {
   userName = "friend";
}

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();

   getGreeting()
});

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting();
