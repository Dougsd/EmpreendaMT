//Contadores que são utilizados para especificação de id dinâmicos para que cada div seja única 
let id_c1 = 0;
let id_c2 = 0;
let id_c3 = 0;
let id_c4 = 0;
//Contadores que são utilizados para especificação de id dinâmicos para que cada div seja única
var array = [] ;
array.push({titulo:'', texto:'asasa'})
//Gera as divs do primeiro canvas, utiliza mudança do valor da variáveis a cada clique
async function newdiv1(){
  
  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação
  document.getElementById('pop_up1').style.display = "none";
  var id_fonte = "choises_fon1";
  var id_fundo = "choises_fun1"; 
  var id_canvas = "col1";
  var id_titulo = "tittle1";
  var id_textarea = "areatexto1";
  var id_cabecalho = "cabecalho1"; 
  var areatexto = await document.getElementById('areatexto1').value;
  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação

  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
  await div(id_fundo,id_cabecalho,id_canvas,id_c1.toString());
  await trash(id_canvas,id_cabecalho, id_c1.toString());
  await titulo(id_fonte, id_fundo, id_titulo,id_canvas, id_cabecalho, id_c1.toString());
  await br(id_canvas, id_c1.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c1.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  //await upload(id_canvas,  id_c1.toString());
  //await preview(id_canvas, id_c1.toString());
  id_c1= somaID(id_c1);
  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
}
//Gera as divs do primeiro canvas, utiliza mudança do valor da variáveis a cada clique

//Gera as divs da segunda canvas, utiliza mudança do valor da variáveis a cada clique
async function newdiv2(){

  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação
  document.getElementById('pop_up2').style.display = "none";
  var id_fonte = "choises_fon2";
  var id_fundo = "choises_fun2"; 
  var id_canvas = "col2";
  var id_titulo = "tittle2";
  var id_textarea = "areatexto2";
  var id_cabecalho = "cabecalho2"; 
  var areatexto = await document.getElementById('areatexto2').value;
  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação

  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
  await div(id_fundo,id_cabecalho, id_canvas, id_c2.toString());
  await trash(id_canvas,id_cabecalho, id_c2.toString());
  await titulo(id_fonte, id_fundo, id_titulo,id_canvas, id_cabecalho, id_c2.toString());
  await br(id_canvas, id_c2.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c2.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  //await upload(id_canvas,  id_c2.toString());
  //await preview(id_canvas, id_c2.toString());
  id_c2= somaID(id_c2);
  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
}
//Gera as divs da segunda canvas, utiliza mudança do valor da variáveis a cada clique

//Gera as divs da tereira canvas, utiliza mudança do valor da variáveis a cada clique
async function newdiv3(){

  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação
  document.getElementById('pop_up3').style.display = "none";
  var id_fonte = "choises_fon3";
  var id_fundo = "choises_fun3"; 
  var id_canvas = "col3";
  var id_titulo = "tittle3";
  var id_textarea = "areatexto3";
  var id_cabecalho = "cabecalho3";  
  var areatexto = await document.getElementById('areatexto3').value;
  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição  e abre a pop up para digitação

  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
  await div(id_fundo,id_cabecalho, id_canvas, id_c3.toString());
  await trash(id_canvas,id_cabecalho, id_c3.toString());
  await titulo(id_fonte, id_fundo, id_titulo,id_canvas, id_cabecalho, id_c3.toString());
  await br(id_canvas, id_c3.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c3.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  //await upload(id_canvas,  id_c3.toString());
  //await preview(id_canvas, id_c3.toString());
  id_c3= somaID(id_c3);
  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
}
//Gera as divs da terceira canvas, utiliza mudança do valor da variáveis a cada clique

//Gera as divs da quarta canvas, utiliza mudança do valor da variáveis a cada clique
async function newdiv4(){

  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação
  document.getElementById('pop_up4').style.display = "none";
  var id_fonte = "choises_fon4";
  var id_fundo = "choises_fun4";
  var id_canvas = "col4";
  var id_titulo = "tittle4";
  var id_textarea = "areatexto4";
  var id_cabecalho = "cabecalho4";  
  var areatexto = await document.getElementById('areatexto4').value;
  //Define qual serão os ids conforme o elemento clicado, captura o que foi digitado no campo descrição e abre a pop up para digitação
  
  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
  await div(id_fundo,id_cabecalho, id_canvas, id_c4.toString());
  await trash(id_canvas,id_cabecalho, id_c4.toString());
  await titulo(id_fonte, id_fundo, id_titulo,id_canvas, id_cabecalho, id_c4.toString());
  await br(id_canvas, id_c4.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c4.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  //await upload(id_canvas,  id_c4.toString());
  //await preview(id_canvas, id_c4.toString());
  id_c4= somaID(id_c4);
  //Realiza a comunição com as variáveis definidas após o click com as funções de criação das divs, e manter contadores para cada um dos canvas
}
//Gera as divs da quarta canvas, utiliza mudança do valor da variáveis a cada clique