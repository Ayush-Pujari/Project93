
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyClH_HQB_WpGhu_WWk0E7LL9JXVlj33CpM",
      authDomain: "kwitterapp-1230e.firebaseapp.com",
      databaseURL: "https://kwitterapp-1230e-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-1230e",
      storageBucket: "kwitterapp-1230e.appspot.com",
      messagingSenderId: "1094461874010",
      appId: "1:1094461874010:web:920c9cf2ec645644fc9d63"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
