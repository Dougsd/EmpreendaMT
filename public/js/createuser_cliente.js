const signupForm = document.querySelector("#register-form");
signupForm.addEventListener("submit", (evento) => {
  evento.preventDefault(); 

  const emails = signupForm['email'].value;
  const passwords = signupForm['password'].value;

  //Cadastra o usuario no firebase
  auth.createUserWithEmailAndPassword(emails, passwords)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode+errorMessage);
    });

  const user = auth.currentUser;
  if(user != null){
    console.log(user)
    var uid = user.uid;
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('lastname').value;
    var email = user.email;
    var cpf = document.getElementById('cpf').value;
    console.log("uid="+uid+" nome="+nome+" sobrenome="+sobrenome+" email="+email+" cpf="+cpf);
  }else{
    console.log('Não pegou usuário');
  }
  writeUserData(uid, nome, sobrenome, email, cpf);
//---------------------------------------------------------------------
  var actionCodeSettings = {
    url: 'http://localhost:8080/public/html/app_triagem.html',
    handleCodeInApp: true,
  };  
  user.sendEmailVerification(actionCodeSettings)
    .then(function() {
      //send...
      console.log("OK");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
//enviar email de verificacao
})

function writeUserData(user_uid,user_nome,user_sobrenome,user_email,user_cpf) {
  database.ref('users/'+user_uid).set({
    nome: user_nome,
    sobrenome: user_sobrenome,
    email: user_email,
    cpf: user_cpf
  });
}
