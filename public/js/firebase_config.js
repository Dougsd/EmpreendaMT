var firebaseConfig = {
    apiKey: "AIzaSyDEJ1bWe81zUGkvRKQdv8399db-jaat1ns",
    authDomain: "empreendamt-f1f1d.firebaseapp.com",
    projectId: "empreendamt-f1f1d",
    databaseURL: "https://empreendamt-f1f1d-default-rtdb.firebaseio.com/",
    storageBucket: "empreendamt-f1f1d.appspot.com",
    messagingSenderId: "83203876389",
    appId: "1:83203876389:web:965f046f56e6ce85ae41cc"
  };      
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();