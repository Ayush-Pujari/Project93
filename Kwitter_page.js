
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

   var Name=localStorage.getItem("Name");
   document.getElementById("user_name").innerHTML="Welcome"+Name+"!";

   function addRoom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"Adding room name"
         });
         localStorage.setItem("Room_name",room_name);
         window.location="kwitter_page.html";
   }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(names){
     console.log(names);
     localStorage.setItem("Room_name",names);
     window.location="kwitter_page.html";
}

function Logout(){
     localStorage.removeItem("Name");
     localStorage.removeItem("Room_name");
     window.location="index.html";
}
