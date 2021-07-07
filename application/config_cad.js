const new_mentor = document.getElementById('email_mentor');
var actionCodeSettings = {
    url: 'http://localhost:8080/application/cadastrar_cliente.html',
    handleCodeInApp: true
};
new_mentor.addEventListener("click", (even) => {
    
    const cad = document.getElementById('email_env').value;

    auth.sendSignInLinkToEmail(cad, actionCodeSettings)
    .then((newuser) => { 
    console.log("ok.");
    window.localStorage.setItem('emailForSignIn', cad);
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    });
    even.preventDefault();
});

const new_cliente = document.getElementById('email_cliente');
var actionCodeSettings = {
    url: 'http://localhost:8080/application/cadastrar_cliente.html',
    handleCodeInApp: true
};
new_cliente.addEventListener("click", (even) => {
    
    const cad = document.getElementById('email_env').value;

    auth.sendSignInLinkToEmail(cad, actionCodeSettings)
    .then((newuser) => { 
    console.log("ok.");
    window.localStorage.setItem('emailForSignIn', cad);
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    });
    even.preventDefault();
});

const new_triagem = document.getElementById('email_triagem');
var actionCodeSettings = {
    url: 'http://localhost:8080/application/cadastrar_cliente.html',
    handleCodeInApp: true
};
new_triagem.addEventListener("click", (even) => {
    
    const cad = document.getElementById('email_env').value;

    auth.sendSignInLinkToEmail(cad, actionCodeSettings)
    .then((newuser) => { 
    console.log("ok.");
    window.localStorage.setItem('emailForSignIn', cad);
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    });
    even.preventDefault();
});

