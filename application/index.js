
var firebaseConfig = {
    apiKey: "AIzaSyDEJ1bWe81zUGkvRKQdv8399db-jaat1ns",
    authDomain: "empreendamt-f1f1d.firebaseapp.com",
    projectId: "empreendamt-f1f1d",
    storageBucket: "empreendamt-f1f1d.appspot.com",
    messagingSenderId: "83203876389",
    appId: "1:83203876389:web:7f7a49eb8e2abd8eae41cc"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots:true});
  db.settings({merge: true});