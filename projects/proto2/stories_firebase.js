var config = {
  apiKey: "AIzaSyBU-4i6aqE_eNY3IosjA7ycNm33FXCF7eM",
  authDomain: "unspoken-37e98.firebaseapp.com",
  databaseURL: "https://unspoken-37e98.firebaseio.com",
  projectId: "unspoken-37e98",
  storageBucket: "",
  messagingSenderId: "161766093627"
};
firebase.initializeApp(config);

var values;

//reference messages collection
// var messagesRef = firebase.database().ref('messages');
// messagesRef.on('value', function(snapshot){
//   //updateMessages(postElement, snapshot.val());
//   console.log(snapshot.val());
//   values = snapshot.val();
// });

// function updateMessages (){

// }
//how to tie in with 3D --> add event listeners on the particles and let them retrieve 
// a random post from the database

//testing
console.log('about to bind on value');
var newMessageRef = firebase.database().ref('messages');
newMessageRef.on('value', function (snapshot) {

  // stores the value of the ref as a js Object
  console.log('val:');
  values = snapshot.val();
  console.log(values);

  // iterates through children of the ref
  console.log('forEach:');
  snapshot.forEach(function (childSnapshot) {
    console.log(childSnapshot.key);
    console.log(childSnapshot.val());
  });

  //test
  // var value = values[Math.random()];
});
