/*Imagem para abrir a parte de cliente*/
const open_form = document.getElementById('img_open_form');
open_form.addEventListener('click', (event) =>{
    document.getElementById('div_to_opt1').style.display = "block";
    document.getElementById('client_info').style.display = "block";
    event.preventDefault();
});
/*Imagem para abrir a parte de cliente*/

/*Imagem para fechar a parte de cliente*/
const close_clien = document.getElementById('img_close_form1');
close_clien.addEventListener('click', (event) =>{
    document.getElementById('div_to_opt1').style.display = "none";
    event.preventDefault();
});
/*Imagem para fechar a parte de cliente*/

/*Imagem para fechar a parte de projeto*/
const close_proj = document.getElementById('img_close_form2');
close_proj.addEventListener('click', (event) =>{
    document.getElementById('div_to_opt2').style.display = "none";
    document.getElementById('div_to_opt1').style.display = "none";
    event.preventDefault();
});
/*Imagem para fechar a parte de projeto*/

/*Abre a parte de projeto e fecha a de cliente*/
const cliente1 = document.getElementById('button_cliente1');
cliente1.addEventListener('click', (event) =>{
    document.getElementById('div_to_opt2').style.display = "block";
    document.getElementById('div_to_opt1').style.display = "none";
    event.preventDefault();
});
/*Abre a parte de projeto e fecha a de cliente*/


const enviar_form = document.getElementById('button_cliente2');
enviar_form.addEventListener('click', (event) =>{
    document.getElementById('div_to_opt2').style.display = "none";
    document.getElementById('div_to_opt1').style.display = "none";
    event.preventDefault();
});

//Menu= item para logout
var singout = document.getElementById('logout');
singout.addEventListener('click',(e)=>{
  console.log('God bey!')
  auth.signOut().then(() => {
    // Sign-out successful.
    window.location.href = 'app_triagem.html';
  }).catch((error) => {
    // An error happened.

  });
  e.preventDefault();
})
