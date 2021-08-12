var pop_up = document.getElementById('parc_chav');
pop_up.addEventListener("click", (e) => {
    var d = document.getElementById('pop_up').style.display = 'block';    
    e.preventDefault();
})
var pop_up = document.getElementById('close');
pop_up.addEventListener("click", (e) => {
    var d = document.getElementById('pop_up').style.display = 'none';    
    e.preventDefault();
}) 
var text = document.getElementById('pop_up');
text.addEventListener("click", (e) => {
    console.log("ok")
    /*Salvar o texto em string*/    
    e.preventDefault;
})
/*escrenvendo no canvas*/
/*function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillText("olá",25, 25);

    }else {
        console.log("Error");
    }
  }*/