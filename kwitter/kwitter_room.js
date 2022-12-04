
const firebaseConfig = {
      apiKey: "AIzaSyBheWNrgFY5xt6Rfq5_0ksW6pOetGlRkHI",
      authDomain: "kwitter-9352d.firebaseapp.com",
      databaseURL: "https://kwitter-9352d-default-rtdb.firebaseio.com",
      projectId: "kwitter-9352d",
      storageBucket: "kwitter-9352d.appspot.com",
      messagingSenderId: "901466628002",
      appId: "1:901466628002:web:22b40b900cb4cf08245cfb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name" + Room_names);
      row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}