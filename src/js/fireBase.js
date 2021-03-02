var fireBase = fireBase || firebase;
var hasInit = false;
  var config = {
    apiKey: "AIzaSyALirPWsZfhk6KZTF80Byr7RQ80746pWuQ",
    authDomain: "codeist-b3536.firebaseapp.com",
    databaseURL:'https://codeist-b3536-default-rtdb.firebaseio.com/',
    projectId: "codeist-b3536",
    storageBucket: "codeist-b3536.appspot.com",
    messagingSenderId: "543446975258",
  };
   if(!hasInit){
            firebase.initializeApp(config);
            hasInit = true;
        }