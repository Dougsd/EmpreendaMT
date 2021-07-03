const newuser = document.querySelector('enviar');
var actionCodeSettings = {
    url: 'http://localhost:8080/application/cadastrar.html',
    handleCodeInApp: true
};
newuser.addEventListener("click", (even) => {
    even.preventDefault();
    const cad = document.querySelector('enviar');

    auth().sendSignInLinkToEmail(cad, actionCodeSettings)
    .then((newuser) => {
    window.localStorage.setItem('emailForSignIn', cad);
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    });
});
function lista() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.bot_drop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 