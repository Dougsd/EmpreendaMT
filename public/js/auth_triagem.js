const loginForm = document.querySelector("#form_triagem");//Nao esquecer de arrumar o link antes do deploy.
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emails = loginForm['mail'].value;
    const passwords = loginForm['pass'].value;
   //---------------------------------------------------
    auth.signInWithEmailAndPassword(emails, passwords)
    .then((userCredential) => {
      console.log("logou")
      var user = auth.currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        window.location.href = "file://desktop-1odija9/EmpreendaMT/public/html/app_triagem.html";
        // console.log("DisplayName="+displayName)
        // console.log("Email="+email)
        // console.log("photoURL="+photoURL)
        // console.log("emailVerified="+emailVerified)
        // console.log("UID="+uid)
    }else{
      console.log("Error");
    }
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    })
});  

var lg_google= document.getElementById('lg_google2');
lg_google.addEventListener("click",(e)=>{
    console.log("evento funfou!!")

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    if(user!==null){
      window.location.href ="app_triagem.html";
    }
  }).catch((error) => {

    // var errorCode = error.code;
    // var errorMessage = error.message;
    // var email = error.email;
    // var credential = error.credential;
    window.alert("Erro encontrado:"+error)
  });
    e.preventDefault();
})

