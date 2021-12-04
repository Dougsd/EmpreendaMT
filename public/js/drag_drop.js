var dragged;//Utilizada para armazenar os elementos clicados que serão arrastados

//Usado quando o elemento está sendo arrastado
document.addEventListener("drag", function dragstart(event){
}, false);
//Usado quando o elemento está sendo arrastado

//Acionado quando um usuário tenta arrastar um elemento inválido
document.addEventListener("dragstart", function(event){
  dragged = event.target;
}, false);
//Acionado quando um usuário tenta arrastar um elemento inválido

//Utilizada quando a operação de drag está sendo finalizada
document.addEventListener("dragend", function(event){
}, false);
//Utilizada quando a operação de drag está sendo finalizada

//Acionado quando o elemento arrastável está em cima de um ponto de soltura válido
document.addEventListener("dragover", function(event){
  event.preventDefault();
}, false);
//Acionado quando o elemento arrastável está em cima de um ponto de soltura válido

//Funciona quando o elemento arrastável entra em um ponto de soltura
document.addEventListener("dragenter", function(event){
  if(event.target.className == "mid"){
  }
}, false);
//Funciona quando o elemento arrastável entra em um ponto de soltura

//Aciona quando o elemento abandona o ponto de soltura
document.addEventListener("dragleave", function(event){
  if(event.target.className == "mid"){
  }
}, false);
//Aciona quando o elemento abandona o ponto de soltura

//Determina de onde o elemento será removido e onde será adicionado
document.addEventListener("drop", function(event){
  event.preventDefault();
  if(event.target.className == "mid"){
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}, false);
//Determina de onde o elemento será removido e onde será adicionado