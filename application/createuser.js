
//Carrega um objeto no formato do elemento html
const signupForm = document.querySelector("#register-form");
//Reconhece um evento de click sobre a tag informada
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();//Essa funcao cancela o evento 
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  
//Cadastra o usuario no firebase
  auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    console.log(cred.user)
    var user = cred.user;
    //Envia um email de verificação
    user.sendEmailVerification().then(function() {
      // Email sent.
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage,errorCode)
      });



  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage,errorCode)
  });
  //---------------------------------------------------------------------
  //enviar email de verificacao
})
