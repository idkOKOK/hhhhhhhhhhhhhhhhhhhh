
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyDTYgv2GH0VWO0SKiEbE_X1wCikJvxtb2E",
  authDomain: "idk-test-aa8cb.firebaseapp.com",
  databaseURL: "https://idk-test-aa8cb-default-rtdb.firebaseio.com",
  projectId: "idk-test-aa8cb",
  storageBucket: "idk-test-aa8cb.appspot.com",
  messagingSenderId: "154690598142",
  appId: "1:154690598142:web:999c5a6e690afabcffa1af",
  measurementId: "G-33FSRD6L7V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.databse().ref("/").child(room_name).update({
      purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html"


}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location = "index.html";



}