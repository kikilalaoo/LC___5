var firebaseConfig = { apiKey: "AIzaSyC0FfV281BhRbrXE_ihkgsO-K7O_uwUOf0", 
authDomain: "kwitter-294d1.firebaseapp.com", 
databaseURL: "https://kwitter-294d1-default-rtdb.firebaseio.com",
 projectId: "kwitter-294d1", 
 storageBucket: "kwitter-294d1.appspot.com",
  messagingSenderId: "767524309701", 
  appId: "1:767524309701:web:9056f07c7c03371c557eac" }; 
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
 function addRoom()
 {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name" 
       });
       
       localStorage.setItem("room_name" , room_name);
 window.location = "LC_page.html";
      }
         
            function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "LC_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}