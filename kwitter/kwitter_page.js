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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            likes : 0 
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         likes = message_data['likes'];

         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         
         likes_button = "<button onclick='updateLike(this.id)' class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + ">";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: " + likes + "</span></button><hr>";

         row = name_with_tag + message_with_tag + likes_button + span_with_tag;

         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Clicked on like button: " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updatedLike = Number(like) + 1;
      console.log(updatedLike);
      firebase.database().ref(room_name).child(message_id).update({
            likes : updatedLike
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
