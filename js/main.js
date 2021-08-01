import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDEDXojVb3PClQH62RyvRMGYujryZyVLAQ",
  authDomain: "madhurireddy-fa326.firebaseapp.com",
  projectId: "madhurireddy-fa326",
  storageBucket: "madhurireddy-fa326.appspot.com",
  messagingSenderId: "330178702456",
  appId: "1:330178702456:web:4543191de75e5f07bf518d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.collection("cricketers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
});
var xhr = new XMLHttpRequest();
	   xhr.onload = success;
	   xhr.onerror = error;
	   xhr.open('GET', 'https://reqres.in/api/users?page=2');
	   xhr.send();

	     function error(err){
	       console.log('Error occurred: ' + err);
	   } 

	   function success(){
	       var response = JSON.parse(this.responseText);
	       var size = response.data.length;
	       var data = response.data;
	       var list = document.getElementById('mylist');
	       for(let i = 0; i< size; i++){
                const listitem = document.createElement('li');
                listitem.classList.add('list-group-item');
                listitem.innerHTML = data[i].first_name + ' ' + data[i].last_name;
                list.appendChild(listitem);
                var but1 = document.createElement('button');
                but1.innerHTML="edit";
                listitem.appendChild(but1);
                but1.addEventListener("click",function(){
                    var fname=prompt("Enter your firstname:","");
                    var lname=prompt("Enter your lastname:","");
                    listitem.innerHTML=fname+" "+lname;
	              });
                var but2 = document.createElement('button');
                but2.innerHTML="delete";
                listitem.appendChild(but2);
                but2.addEventListener("click",function(){
                    data[i].first_name=" ";
                    data[i].last_name=" ";
                    listitem.innerHTML=data[i].first_name+data[i].last_name;
	              });  
        }
    
    }  