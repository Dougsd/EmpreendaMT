    const loginForm = document.querySelector("#form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const emails = loginForm['mail'].value;
        const passwords = loginForm['pass'].value;
       //---------------------------------------------------
        auth.signInWithEmailAndPassword(emails, passwords)
        .then((userCredential) => {
          // Signed in
          //var user = userCredential.user;
          console.log("foi")
          // ...   
          var user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
        
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            console.log("DisplayName="+displayName)
            console.log("Email="+email)
            console.log("photoURL="+photoURL)
            console.log("emailVerified="+emailVerified)
            console.log("UID="+uid)
        }
        user.sendEmailVerification()
        .then(() => {
          // Email verification sent!
          // ...
        });
          if (emailVerified = true && user != null){
          window.location.href = "http://localhost:8080/application/app_cliente.html"
        }else {
          window.alert("Seu email não foi verificado!!!")
        }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("N foi")
        });
        //----------------------------------------------------

        //-------------------------------------------------------
    
    });
    
    