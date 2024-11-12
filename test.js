

  

// Your web app's Firebase configuration
// https://www.survivingwithandroid.com/esp8266-firebase-realtime-database-iot-controlled-rgb-leds/

const firebaseConfig = {

  apiKey: "AIzaSyB7rnd0tgbE74aGMUzr0DWSylE1rBwKSPk",

  authDomain: "the-real-temperatur-matare.firebaseapp.com",

  databaseURL: "https://the-real-temperatur-matare-default-rtdb.firebaseio.com",

  projectId: "the-real-temperatur-matare",

  storageBucket: "the-real-temperatur-matare.firebasestorage.app",

  messagingSenderId: "527370185821",

  appId: "1:527370185821:web:b79d4ebe11b5c3657d71b4",

  measurementId: "G-CS82BE42VM"

};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var ledRef = db.ref("led");

var counterRef = db.ref("counter");

var personRef = db.ref("person");

ledRef.once("value").then((snapshot) => {
  if (snapshot.val()) {
    let myCheckBox = document.getElementById("checkbox");
    myCheckBox.checked = snapshot.val().led;
    if (myCheckBox.checked) {
      document.getElementById("myImage").src = "light-bulb-on.png";
    } else {
      document.getElementById("myImage").src = "light-bulb-off.png";
    }
  }
});

ledRef.on("value", (snapshot) => {
  const data = snapshot.val();
});

personRef.on("value", (nalle) => {
  const data = nalle.val();
  console.log(data);
});

function turnOnOffLight() {
  let myCheckBox = document.getElementById("checkbox");

  if (myCheckBox.checked) {
    document.getElementById("myImage").src = "light-bulb-on.png";
    ledRef.update({ led: true });
    // personRef.update({ superkrafter: "Dansa Tango" });
  } else {
    document.getElementById("myImage").src = "light-bulb-off.png";
    // database.ref("/led").update({ led: true });
    ledRef.update({ led: false });
  }
}

function changeCounter() {
  var counter = document.querySelector("#counter");
  counterRef.update({ counter: counter.value });
}
