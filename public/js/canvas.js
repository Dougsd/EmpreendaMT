var pop_up = document.getElementById('add');
pop_up.addEventListener("click", (e) => {
    var d = document.getElementById('pop_up').style.display = 'block';    
    e.preventDefault();
})

var pop_up = document.getElementById('close');
pop_up.addEventListener("click", (e) => {
    var d = document.getElementById('pop_up').style.display = 'none';    
    e.preventDefault();
})

const canvas = document.getElementById('button');
canvas.addEventListener("click", (e) => {

  var d = document.getElementById('pop_up').style.display = 'none';

  if(texto !=  null){
    div();
    titulo();
    br();
    texto1(); 
    limpar(); 
  }else{
    console.log("Error");
  }
  e.preventDefault;
})

let id = 0;
  function getNextId() {
    return ++id;
  }
  function div(){
      let id = getNextId();

      let divElement = document.createElement("div");
      divElement.setAttribute('id', 'box' + id.toString());
      divElement.style.backgroundColor = "blue";
      divElement.style.color = "black";
      divElement.style.width = "75%";
      divElement.style.height = "20%";
      divElement.style.margin = "15px";
      divElement.style.borderRadius = "10px";

      let divMae = document.getElementById("main_canvas");
      divMae.appendChild(divElement);
  }
  function titulo(){

    var titulo_var = document.getElementById('titulo').value;
    let labelElement = document.createElement("label");
    labelElement.setAttribute('id', 'tittle' + id.toString());
    labelElement.style.backgroundColor = "white";
    labelElement.style.fontFamily = "sans-serif";
    labelElement.style.margin = "20px";
    labelElement.style.width = "30%";
    labelElement.style.height = "15%";
    labelElement.style.fontSize = "25px";
    labelElement.innerHTML = titulo_var;
    
    let divBox = document.getElementById('box'+id.toString());
    divBox.appendChild(labelElement);
  }
  function br(){
    let brElement = document.createElement("br");
    let divBox = document.getElementById('box'+id.toString());
    divBox.appendChild(brElement);
  }
  function texto1(){

    var texto_var = document.getElementById('texto').value;
    let labelElement = document.createElement("label");
    labelElement.setAttribute('id', 'texto_corpo' + id.toString());
    labelElement.style.backgroundColor = "white";
    labelElement.style.fontFamily = "sans-serif";
    labelElement.style.margin = "20px";
    labelElement.style.width = "30%";
    labelElement.style.height = "15%";
    labelElement.style.fontSize = "25px";
    labelElement.innerHTML = texto_var;

    let divBox = document.getElementById('box'+id.toString());
    divBox.appendChild(labelElement);
  }
  function limpar(){
    var titulo_var = document.getElementById('titulo').value = '';
    var texto_var = document.getElementById('texto').value = '';
  }