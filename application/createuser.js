
//Carrega um objeto no formato do elemento html
const signupForm = document.querySelector("#register-form");
//Reconhece um evento de click sobre a tag informada

signupForm.addEventListener("submit", (evento) => {
  evento.preventDefault();//Essa funcao cancela o evento 

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
    console.log("Aqui =>");

  //---------------------------------------------------------------------
  //enviar email de verificacao

 //Encerra o evento
})