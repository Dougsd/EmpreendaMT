var profile_img = document.getElementById('img_perfil1');
var profile_name = document.getElementById('name');
// var profile_email = document.getElementById('profile_email');

auth.onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
  } else {
    window.location.href="login_triagem.html"
  }
});