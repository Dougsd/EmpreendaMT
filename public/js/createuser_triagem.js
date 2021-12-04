const signupForm = document.querySelector("#register-form");
signupForm.addEventListener("submit", (evento) => {
  evento.preventDefault(); 
  const user_email = signupForm['email'].value;
  const user_senha = signupForm['password'].value;
  const user_nome = signupForm['nome'].value;
  const user_sobrenome = signupForm['lastname'].value;
  const user_cpf = signupForm['cpf'].value;

  //Cadastra o usuario no firebase
  auth.createUserWithEmailAndPassword(user_email, user_senha)
    .then((userCredential) => {
      var user_cre = userCredential.user;
      //Captura do uid definido quando usuário é criado
      auth.onAuthStateChanged((user)=>{
        var user_uid = user.uid;
        new_user(user_nome,user_sobrenome,user_cpf, user_email, user_uid);
        update_user(user_uid);
      })
      //Email de verificação
      auth.currentUser.sendEmailVerification()
        .then(() =>{
          //Email enviado...
      });
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode+errorMessage);
      }); 
        
  //Determina a estrutura de organização em que as informações capturadas foram salvas
  function new_user(user_nome,user_sobrenome,user_cpf, user_email, user_uid){
    database.ref('/users/'+user_uid).set({
      Nome: user_nome,
      Sobrenome: user_sobrenome,
      CPF: user_cpf,
      Email: user_email
    })     
  }
  function update_user(user_uid){
    return database.ref('/users/'+user_uid).on('value', (snapshot) =>{
      const user_DB_name = snapshot.val().Nome;
      const user_DB_lastname = snapshot.val().Sobrenome;
      var nome = user_DB_name+" "+user_DB_lastname;
      function update_new_user(nome){
        var user = auth.currentUser;
        user.updateProfile({
          displayName: nome
        }).then(function(){
          console.log("Valor capturado e nome atribuido")
        },function(error){
          console.log("Error")
        })
      }
      update_new_user(nome)
    })
  }
})