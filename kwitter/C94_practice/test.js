const firebaseConfig = {
    apiKey: "AIzaSyDza0zNmZncauU_lHTLIfpSXpvP9usbCy0",
    authDomain: "register-form-2c74a.firebaseapp.com",
    projectId: "register-form-2c74a",
    storageBucket: "register-form-2c74a.appspot.com",
    messagingSenderId: "275113902494",
    appId: "1:275113902494:web:4423fff12189d79f44968f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function create(){
    var idd = document.getElementById("email").value;
    var pass = document.getElementById("psw-repeat").value;
    console.log("id = " + idd);
    firebase.database().ref("/").child(idd).update({
        Email : idd
    });
    alert("Data Registered");
}