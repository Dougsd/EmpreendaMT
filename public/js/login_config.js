    const loginForm = document.querySelector("#form");
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
            console.log("DisplayName="+displayName)
            console.log("Email="+email)
            console.log("photoURL="+photoURL)
            console.log("emailVerified="+emailVerified)
            console.log("UID="+uid)
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
    