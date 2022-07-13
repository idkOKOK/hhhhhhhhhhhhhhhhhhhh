// ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDTYgv2GH0VWO0SKiEbE_X1wCikJvxtb2E",
    authDomain: "idk-test-aa8cb.firebaseapp.com",
    databaseURL: "https://idk-test-aa8cb-default-rtdb.firebaseio.com",
    projectId: "idk-test-aa8cb",
    storageBucket: "idk-test-aa8cb.appspot.com",
    messagingSenderId: "154690598142",
    appId: "1:154690598142:web:999c5a6e690afabcffa1af",
    measurementId: "G-33FSRD6L7V"

    firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
