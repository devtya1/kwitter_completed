
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

  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding User"
    });

  }