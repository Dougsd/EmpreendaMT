/*Contadores de soma e subtração*/
function somaID(id) {
  return ++id;
}
function subtraiID(id) {
return --id;
}
/*Contadores de soma e subtração*/

//Como será as especificações das div geradas
function div(id_fundo,id_cabecalho, id_canvas, id){
  var id_divBox = id_canvas+'box'+id;

  //Responsável pela captura do valor da cor de fundo
  var var_fundo = document.getElementById(id_fundo);
  fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;
  //Responsável pela captura do valor da cor de fundo

  let divElement1 = document.createElement("div");//Cria o elemento determinado

  //Definição dos atributos id, e draggable
  divElement1.setAttribute('id',id_divBox);
  divElement1.setAttribute('draggable', 'true');
  //Definição dos atributos id, e draggable

  //Define a cor da fonte e fundo(variável externa), o tamanho do elemento, justifica o texto, aplica espaçamento interno e arredonda as bordas
  divElement1.style.backgroundColor = fundo_valor;
  divElement1.style.color = "white";
  divElement1.style.width = "95%";
  divElement1.style.height = "auto";
  divElement1.style.padding = "2.5%";
  divElement1.style.margin = "5px 0px 5px 0px";
  divElement1.style.borderRadius = "5px";
  divElement1.style.textAlign = "justify";
  //Define a cor da fonte e fundo(variável externa), o tamanho do elemento, justifica o texto, aplica espaçamento interno e arredonda as bordas

  //Definição de qual será o elemento pai do elemento a ser gerado
  let divMae = document.getElementById(id_canvas);
  divMae.appendChild(divElement1);
  //Definição de qual será o elemento pai do elemento a ser gerado

  let divElement2 = document.createElement("div");//Cria o elemento determinado

  divElement2.setAttribute('id', id_cabecalho+id);//Definição do atributo id

  //Define a cor de fundo baseado em uma variável externa e o seu tamanho
  divElement2.style.backgroundColor= fundo_valor;
  divElement2.style.height= "20px";
  divElement2.style.width="100%";
  //Define a cor de fundo baseado em uma variável externa e o seu tamanho

  //Definição de qual será o elemento pai do elemento a ser gerado
  let divBox = document.getElementById(id_divBox);
  divBox.appendChild(divElement2);
  //Definição de qual será o elemento pai do elemento a ser gerado
}
//Como será as especificações das div geradas

//Como será as especificações da imagem do X geradas
function trash(id_canvas,id_cabecalho, id){

  let imgElement = document.createElement("img");//Cria o elemento determinado

  //Definições dos atributos id, e src
  imgElement.setAttribute('id',id_cabecalho+'bin'+id);
  imgElement.setAttribute('src', '../img/cancel.png');
  //Definições dos atributos id, e src

  //Define o tamanho, a posição, a cor de fundo, e a mudança do visual do mouse em sobreposição com o elemento
  imgElement.style.width = "20px";
  imgElement.style.height = "20px";
  imgElement.style.backgroundColor = fundo_valor;
  imgElement.style.float = "right";
  imgElement.style.cursor = "pointer";
  //Define o tamanho, a posição, a cor de fundo, e a mudança do visual do mouse em sobreposição com o elemento

  //Definição de qual será o elemento pai do elemento a ser gerado
  var id_divBox = id_cabecalho+id;
  let divBox = document.getElementById(id_divBox);
  divBox.appendChild(imgElement);
  //Definição de qual será o elemento pai do elemento a ser gerado

  //Configuração do comportamento de como será excluidas as divs geradas
  const excluir_div = document.getElementById(id_cabecalho+'bin'+id);
  excluir_div.addEventListener("click", (event) => {
    document.getElementById(id_canvas+'box'+id).remove();
    event.preventDefault();
  });
//Configuração do comportamento de como será excluidas as divs geradas
}
//Como será as especificações da imagem do X geradas

//Como será as especificações do elemento label para o título geradas
function titulo(id_fonte, id_fundo, id_titulo, id_canvas,id_cabecalho, id){

//Responsável pela captura do valor da cor de fundo, da fonte, e o que foi digitado pelo usuário
  var var_fundo = document.getElementById(id_fundo);
  fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;

  var var_fonte = document.getElementById(id_fonte);
  fonte_valor = var_fonte.options[var_fonte.selectedIndex].value;

  var titulo_var = document.getElementById(id_titulo).value;
//Responsável pela captura do valor da cor de fundo, da fonte, e o que foi digitado pelo usuário

  let labelElement = document.createElement("label");//Cria o elemento determinado

  labelElement.setAttribute('id',id_canvas+'tittle'+id);//Definição do atributo id

//Define a cor da fonte e fundo basedo em variáveis externas, a fonte, e o tamanho da fonte 
  labelElement.style.backgroundColor = fundo_valor;
  labelElement.style.color = fonte_valor;
  labelElement.style.fontFamily = "sans-serif";
  labelElement.style.fontSize = "20px";
//Define a cor da fonte e fundo basedo em variáveis externas, a fonte, e o tamanho da fonte 

  labelElement.innerHTML = titulo_var;//Determina que a variável do titulo coletada através do usuário deverá ser apresentada

//Definição de qual será o elemento pai do elemento a ser gerado
  var id_divBox = (id_cabecalho +id);
  let divBox = document.getElementById(id_divBox);
  divBox.appendChild(labelElement);
//Definição de qual será o elemento pai do elemento a ser gerado
}
//Como será as especificações do elemento label para o título geradas

//Definição do elemento br a ser gerado e qual será seu elemento pai
function br(id_canvas, id){
  let brtag = document.createElement('br');
  var id_divBox = id_canvas+'box'+id.toString();
  let divBox = document.getElementById(id_divBox);
  divBox.appendChild(brtag);
}
//Definição do elemento br a ser gerado e qual será seu elemento pai

//Reponsável pela criação da área em que a descrição fica
function texto1(id_fonte, id_fundo, id_canvas, areatexto, id){
  
//Responsável pela captura do valor da cor de fundo, da fonte
  var var_fundo = document.getElementById(id_fundo);
  fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;

  var var_fonte = document.getElementById(id_fonte);
  fonte_valor = var_fonte.options[var_fonte.selectedIndex].value;
//Responsável pela captura do valor da cor de fundo, da fonte

  let labelElement = document.createElement("p");//Cria o elemento determinado

  labelElement.setAttribute('id',id_canvas+'text'+id);//Definição do atributo id

//Define a cor de fonte e fundo(com variável externa), a fonte, o tamanho da mesma, e o tamanho do elemento
  labelElement.style.backgroundColor = fundo_valor;
  labelElement.style.color = fonte_valor;
  labelElement.style.fontFamily = "sans-serif";
  labelElement.style.width = "95%";
  labelElement.style.height = "auto";
  labelElement.style.fontSize = "18px";
//Define a cor de fonte e fundo(com variável externa), a fonte, o tamanho da mesma, e o tamnho do elemento

  labelElement.innerHTML = areatexto;//Determina que a variável da descrição coletada através do usuário deverá ser apresentada

//Definição de qual será o elemento pai do elemento a ser gerado
  var id_divBox = id_canvas+'box'+id.toString();
  let divBox = document.getElementById(id_divBox);
  divBox.appendChild(labelElement);
//Definição de qual será o elemento pai do elemento a ser gerado
}
//Reponsável pela criação da área em que a descrição fica

//Mantem limpas e padronizadas as áreas manipuladas pelo usuário
function limpar(id_titulo, id_textarea, id_fonte, id_fundo){
  var limpando_titulo = document.getElementById(id_titulo).value = '';
  var limpando_texto = document.getElementById(id_textarea).value = '';
  var limpando_fonte = document.getElementById(id_fonte).selectedIndex = "black";
  var limpando_fundo = document.getElementById(id_fundo).selectedIndex = "black";
}
//Mantem limpas e padronizadas as áreas manipuladas pelo usuário
