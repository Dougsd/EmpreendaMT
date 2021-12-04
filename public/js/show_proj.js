//PESQUISAR-----------------------------------------------------------------------------------------
var pesquisar = document.querySelector('#img_search')
pesquisar.addEventListener('click',(event)=>{
    event.preventDefault();
    var entrada = document.querySelector('#barra_pesquisa');
    
    document.getElementById('projetos').innerHTML='';
    async function searchDB(text){
        var req = new XMLHttpRequest()
        req.overrideMimeType("application/json")
        req.open('POST', '/search', true)
        var aux = {
            texto:text
        }
        req.onload  = function() {
            console.log('reqresponse=',req.response)
            var jsonResponse = req.response
            
            
            if(jsonResponse!=null){
                project=JSON.parse(jsonResponse)
                // console.log(typeof project)
                project = Object.values(project)
                // console.log()
                for (var a=0; a<project.length;a++){
                    console.log('==>',project[a])
                    div_main(project[a])
                }
            }else{
                console.error("Error response",null)
            }
             // do something with jsonResponse
            
        }
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        var temp = JSON.stringify(aux)
        req.send(temp)
        
    //    var ref = await firebase.database().ref("triagem/projetos/");
    //         ref.orderByChild("Nome").equalTo(text).on("child_added", function(snapshot) {
    //            //limpar as divs do conteiner .projetos
    //             div_main(snapshot.val())
    //         }); 
    }

    searchDB(entrada.value);
})
var inputSearch = document.querySelector('#barra_pesquisa')
inputSearch.addEventListener('keyup',(e)=>{
    if (e.keyCode === 13) {
        e.preventDefault();
            var entrada = document.querySelector('#barra_pesquisa')
            document.getElementById('projetos').innerHTML=''
            searchDB(entrada.value)
       }

    async function searchDB(text){
        var req = new XMLHttpRequest()
        req.overrideMimeType("application/json")
        req.open('POST', '/search', true)
        var aux = {
            texto:text
        }
        req.onload  = function() {
            console.log('reqresponse=',req.response)
            var jsonResponse = req.response
            
            
            if(jsonResponse!=null){
                project=JSON.parse(jsonResponse)
                // console.log(typeof project)
                project = Object.values(project)
                // console.log()
                for (var a=0; a<project.length;a++){
                    console.log('==>',project[a])
                    div_main(project[a])
                }
            }else{
                console.error("Error response",null)
            }
             // do something with jsonResponse
            
        }
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        var temp = JSON.stringify(aux)
        req.send(temp)
        
    //    var ref = await firebase.database().ref("triagem/projetos/");
    //         ref.orderByChild("Nome").equalTo(text).on("child_added", function(snapshot) {
    //            //limpar as divs do conteiner .projetos
    //             div_main(snapshot.val())
    //         }); 
    }
})
//--------------------PESQUISAR---------------------------------------------------------------------

const show_proj = document.getElementById('button_cliente2');
show_proj.addEventListener("click", (e) =>{
    e.preventDefault();
})
var projectsList =[]
//CRIA OBJETOS EM FORMAS DE DIVS PARA REPRESENTAR OS PROJETOS
function div_main(project){
    var projetos = document.getElementById('projetos');
    let div_projects = document.createElement('div');
    div_projects.setAttribute('class','project');
    let div_info = document.createElement('div');
    let Pnome = document.createElement('p');
    let Pid = document.createElement('p');
    Pnome.innerHTML = project.Nome;
    Pid.innerHTML = project.ID;
    div_info.appendChild(Pnome);
    div_info.appendChild(Pid);
    let div_reunioes = document.createElement('div');
    let Pdescricao = document.createElement('p');
    Pdescricao.innerHTML = project.Descricao;
    div_reunioes.appendChild(Pdescricao);
    let div_equipe = document.createElement('div');
    for(var i=0; i<project.Equipe.length; i++){
        let Ptemp = document.createElement('p');
        Ptemp.innerHTML = project.Equipe[i];
        div_equipe.appendChild(Ptemp);
    }
    let img_editar = document.createElement('img');
    img_editar.setAttribute('src', '../img/lapis.png');
    for(var x=0; x<=projectsList.length; x++){
         img_editar.setAttribute('id', 'img_editar'+x)
         
    }
   img_editar.addEventListener('click',(e)=>{
            document.getElementById('profile').style.display = 'none'
            document.getElementById('box').style.display= 'none'
            criar_edicao(project)
            
            e.preventDefault()
    })
    div_info.setAttribute('class','info');
    div_reunioes.setAttribute('class','reunioes');
    div_equipe.setAttribute('class','equipe');
    img_editar.setAttribute('class', 'editar');
    div_projects.appendChild(div_info);
    div_projects.appendChild(div_reunioes);
    div_projects.appendChild(div_equipe);
    div_projects.appendChild(img_editar);
    div_projects.setAttribute('id',project.ID);
    projetos.appendChild(div_projects); 
}


//Essa Função abaixo espera um Objeto em JavaScript, onde cria um view  editalvel de um objeto.
//Cria um view no CLIENTE-SIDE
// function criar_edicao(project){
    // var equipe_array = project.Equipe;
    // var formato = project.Formato;
    // var classif_array = project.Classificacao;
    // var mentoria_array = project.Mentorias; 

    // let div_to_edit = document.createElement('div');
    // let button_canvas = document.createElement('button')
    // let button_add_reuniao = document.createElement('button')
    // let button_build_fap = document.createElement('button')
    // let button_anexar = document.createElement('button')
    // let img_close = document.createElement('img');
    // let div_tittle = document.createElement('div');
    // let div_tittle_separar = document.createElement('div');
    // let div_descr = document.createElement('div');
    // let div_descr_separar = document.createElement('div');
    // let div_cidade = document.createElement('div');
    // let div_cidade_separar = document.createElement('div');
    // let div_equipe_to_edit = document.createElement('div');
    // let div_equipe_separar = document.createElement('div');
    // let button_add_member = document.createElement('button');
    // let label_tittle = document.createElement('label');
    // let label_descr = document.createElement('label');
    // let label_cidade = document.createElement('label');
    // let label_equipe = document.createElement('label');
    // let pTittle = document.createElement('p');
    // let pDescr = document.createElement('p');
    // let pCidade = document.createElement('p');
    // //Criando elementos da área Formato
    // let div_formato = document.createElement('div');
    // let div_formato_separar = document.createElement('div');
    // let label_formato = document.createElement('label');
    // let label_tradicional = document.createElement('label');
    // let input_tradicional = document.createElement('input');
    // let label_inovador = document.createElement('label');
    // let input_inovador = document.createElement('input');
    // //Criando elementos da área classificação
    // let div_classif_to_edit = document.createElement('div');
    // let div_classif_separar = document.createElement('div');
    // let label_classif = document.createElement('label');
    // let label_lucrativos = document.createElement('label');
    // let input_lucrativos = document.createElement('input');
    // let label_ambiental = document.createElement('label');
    // let input_ambiental = document.createElement('input');
    // let label_social = document.createElement('label');
    // let input_social = document.createElement('input');
    // let label_solidaria = document.createElement('label');
    // let input_solidaria = document.createElement('input');
    // let label_publico = document.createElement('label');
    // let input_publico = document.createElement('input');
    // let label_cooperativa = document.createElement('label');
    // let input_cooperativa = document.createElement('input');
    // let label_associacao = document.createElement('label');
    // let input_associacao  = document.createElement('input');
    // let label_educacional = document.createElement('label');
    // let input_educacional = document.createElement('input');
    // //Criando elementos da área mentorias
    // let div_mentoria_to_edit = document.createElement('div');
    // let div_mentoria_separar = document.createElement('div');
    // let label_mentoria = document.createElement('label');
    // let label_Ideacao = document.createElement('label');
    // let input_Ideacao = document.createElement('input');
    // let label_Impulso = document.createElement('label');
    // let input_Impulso = document.createElement('input');
    // let label_Especial = document.createElement('label');
    // let input_Especial = document.createElement('input');
    // let label_Editais = document.createElement('label');
    // let input_Editais = document.createElement('input');
    // //Botão enviar
    // let div_button_enviar = document.createElement('div');
    // let button_proj_editado = document.createElement('button');
    // button_canvas.innerHTML = "CRIAR CANVAS";
    // button_add_reuniao.innerHTML = 'ADD REUNIÃO'
    // button_build_fap.innerHTML = 'GERAR FAP'
    // button_anexar.innerHTML= 'ANEXAR'
    // label_tittle.innerHTML = "Título:";
    // label_descr.innerHTML = "Descrição:";
    // label_cidade.innerHTML = "Cidade:";
    // label_equipe.innerHTML = "Equipe:";
    // button_add_member.innerHTML = "ADD";
    // label_classif.innerHTML = "Classificação:"
    // label_mentoria.innerHTML = "Mentorias:";
    // pTittle.innerHTML = project.Nome;
    // pDescr.innerHTML = project.Descricao;
    // pCidade.innerHTML = project.Cidade;
    // //Definição do que será mostrado na tela em Formato
    // label_formato.innerHTML = "Formato:";
    // label_tradicional.innerHTML = "Negócio Tradicional.";
    // label_inovador.innerHTML = "Negócio Inovador.";
    // //Definição do que será mostrado na tela em Classificação
    // label_lucrativos.innerHTML = "Projeto com fins lucrativos.";
    // label_ambiental.innerHTML = "Projeto com apelo ambiental.";
    // label_social.innerHTML = "Projeto com apelo social.";
    // label_solidaria.innerHTML = "Projeto com economia solidária.";
    // label_publico.innerHTML = "Projeto com apoio do Poder Público.";
    // label_cooperativa.innerHTML = "Projeto interno com alguma Cooperativa.";
    // label_associacao.innerHTML = "Projeto interno a alguma Associação.";
    // label_educacional.innerHTML = "Projeto com Apelo Educacional.";
    // //Definição do que será mostrado na tela em Mentorias
    // label_Ideacao.innerHTML = "Mentoria Ideação.";
    // label_Impulso.innerHTML = "Mentoria Impulso.";
    // label_Especial.innerHTML = "Mentoria Especial.";
    // label_Editais.innerHTML = "Mentoria Editais.";
    // //Botão enviar
    // button_proj_editado.innerHTML = "ENVIAR";
    // div_to_edit.setAttribute('id', 'div_to_edit');
    // button_canvas.setAttribute('class', 'buttons');
    // button_canvas.setAttribute('id', 'criar_canvas')
    // button_add_reuniao.setAttribute('class', 'buttons')
    // button_build_fap.setAttribute('class', 'buttons')
    // button_anexar.setAttribute('class', 'buttons')
    // button_add_reuniao.setAttribute('id', "button_add_reuniao")
    // button_build_fap.setAttribute('id',"button_build_fap")
    // button_anexar.setAttribute('id','button_anexar')
    // img_close.setAttribute('src', '../img/close.png');
    // img_close.setAttribute('id', 'img_close');
    // div_tittle.setAttribute('class', 'divs');
    // div_tittle_separar.setAttribute('class', 'div_separar');
    // div_descr.setAttribute('class', 'divs');
    // div_descr_separar.setAttribute('class', 'div_separar')
    // div_cidade.setAttribute('class', 'divs');
    // div_cidade_separar.setAttribute('class', 'div_separar')
    // div_equipe_to_edit.setAttribute('class', 'divs');
    // div_equipe_to_edit.setAttribute('id', 'div_equipe_to_edit');
    // div_equipe_separar.setAttribute('class', 'div_separar');
    // button_add_member.setAttribute('id', 'button_add_member');
    // label_tittle.setAttribute('class', 'labels');
    // label_descr.setAttribute('class', 'labels');
    // label_cidade.setAttribute('class', 'labels');
    // label_equipe.setAttribute('class', 'labels');
    // pTittle.setAttribute('contenteditable', 'true');
    // pTittle.setAttribute('class', 'labels_checkbox');
    // pDescr.setAttribute('contenteditable', 'true');
    // pDescr.setAttribute('class', 'labels_checkbox');
    // pCidade.setAttribute('contenteditable', 'true');
    // pCidade.setAttribute('class', 'labels_checkbox');
    // //Definição de atributos sobre a área Formato
    // div_formato.setAttribute('class', 'divs');
    // div_formato_separar.setAttribute('class', 'separando_escolhas');
    // label_formato.setAttribute('class', 'labels');
    // input_tradicional.setAttribute('id', 'input_tradicional');
    // input_tradicional.setAttribute('class', 'inputs_radio');
    // input_tradicional.setAttribute('type', 'radio');
    // input_tradicional.setAttribute('name', 'formato');
    // label_tradicional.setAttribute('for', 'input_tradicional');
    // label_tradicional.setAttribute('class', 'labels_checkbox');
    // input_inovador.setAttribute('id', 'input_inovador');
    // input_inovador.setAttribute('class', 'inputs_radio');
    // input_inovador.setAttribute('type', 'radio');
    // input_inovador.setAttribute('name', 'formato');
    // label_inovador.setAttribute('for', 'input_inovador');
    // label_inovador.setAttribute('class', 'labels_checkbox');
    // //Definição de atributos sobre a área Classificação
    // div_classif_to_edit.setAttribute('class', 'divs');
    // div_classif_separar.setAttribute('class', 'separando_escolhas')
    // label_classif.setAttribute('class', 'labels');
    // input_lucrativos.setAttribute('id', 'input_lucrativos');
    // input_lucrativos.setAttribute('class', 'inputs_radio');
    // input_lucrativos.setAttribute('type', 'checkbox');
    // label_lucrativos.setAttribute('for', 'input_lucrativos');
    // label_lucrativos.setAttribute('class', 'labels_checkbox');
    // input_ambiental.setAttribute('id', 'input_ambiental');
    // input_ambiental.setAttribute('class', 'inputs_radio');
    // input_ambiental.setAttribute('type', 'checkbox');
    // label_ambiental.setAttribute('for', 'input_ambiental');
    // label_ambiental.setAttribute('class', 'labels_checkbox');
    // input_social.setAttribute('id', 'input_social');
    // input_social.setAttribute('class', 'inputs_radio');
    // input_social.setAttribute('type', 'checkbox');
    // label_social.setAttribute('for', 'input_social')
    // label_social.setAttribute('class', 'labels_checkbox');
    // input_solidaria.setAttribute('id', 'input_solidaria');
    // input_solidaria.setAttribute('class', 'inputs_radio');
    // input_solidaria.setAttribute('type', 'checkbox');
    // label_solidaria.setAttribute('for', 'input_solidaria');
    // label_solidaria.setAttribute('class', 'labels_checkbox');
    // input_publico.setAttribute('id', 'input_publico');
    // input_publico.setAttribute('class', 'inputs_radio');
    // input_publico.setAttribute('type', 'checkbox');
    // label_publico.setAttribute('for', 'input_publico');
    // label_publico.setAttribute('class', 'labels_checkbox');
    // input_cooperativa.setAttribute('id', 'input_cooperativa');
    // input_cooperativa.setAttribute('class', 'inputs_radio');
    // input_cooperativa.setAttribute('type', 'checkbox');
    // label_cooperativa.setAttribute('for', 'input_cooperativa');
    // label_cooperativa.setAttribute('class', 'labels_checkbox');
    // input_associacao.setAttribute('id', 'input_associacao');
    // input_associacao.setAttribute('class', 'inputs_radio');
    // input_associacao.setAttribute('type', 'checkbox');
    // label_associacao.setAttribute('for', 'input_associacao');
    // label_associacao.setAttribute('class', 'labels_checkbox');
    // input_educacional.setAttribute('id', 'input_educacional');
    // input_educacional.setAttribute('class', 'inputs_radio');
    // input_educacional.setAttribute('type', 'checkbox');
    // label_educacional.setAttribute('for', 'input_educacional');
    // label_educacional.setAttribute('class', 'labels_checkbox');
    // //Definição de atributos sobre a área Mentorias
    // div_mentoria_to_edit.setAttribute('class', 'divs');
    // div_mentoria_separar.setAttribute('class', 'separando_escolhas');
    // label_mentoria.setAttribute('class', 'labels');
    // input_Ideacao.setAttribute('id', 'input_ideacao');
    // input_Ideacao.setAttribute('class', 'inputs_radio');
    // input_Ideacao.setAttribute('type', 'checkbox');
    // label_Ideacao.setAttribute('for', 'input_ideacao');
    // label_Ideacao.setAttribute('class', 'labels_checkbox');
    // input_Impulso.setAttribute('id', 'input_impulso');
    // input_Impulso.setAttribute('class', 'inputs_radio');
    // input_Impulso.setAttribute('type', 'checkbox');
    // label_Impulso.setAttribute('for', 'input_impulso');
    // label_Impulso.setAttribute('class', 'labels_checkbox');
    // input_Especial.setAttribute('id', 'input_especial');
    // input_Especial.setAttribute('class', 'inputs_radio');
    // input_Especial.setAttribute('type', 'checkbox');
    // label_Especial.setAttribute('for', 'input_especial');
    // label_Especial.setAttribute('class', 'labels_checkbox');
    // input_Editais.setAttribute('id', 'input_editais');
    // input_Editais.setAttribute('class', 'inputs_radio');
    // input_Editais.setAttribute('type', 'checkbox');
    // label_Editais.setAttribute('for', 'input_editais');
    // label_Editais.setAttribute('class', 'labels_checkbox');
    // //Botão enviar
    // div_button_enviar.setAttribute('id', 'div_button_enviar');
    // button_proj_editado.setAttribute('class', 'buttons');
    // button_proj_editado.setAttribute('id', 'button_proj_editado');
    // document.body.appendChild(div_to_edit)
    // // projetos.appendChild(div_to_edit);
    // div_to_edit.appendChild(button_canvas);
    // div_to_edit.appendChild(button_add_reuniao)
    // div_to_edit.appendChild(button_anexar)
    // div_to_edit.appendChild(button_build_fap)
    // div_to_edit.appendChild(img_close);
    // div_to_edit.appendChild(div_tittle);
    // div_to_edit.appendChild(div_descr);
    // div_to_edit.appendChild(div_cidade);
    // div_to_edit.appendChild(div_equipe_to_edit);
    // div_to_edit.appendChild(div_formato);
    // div_to_edit.appendChild(div_classif_to_edit);
    // div_to_edit.appendChild(div_mentoria_to_edit);
    // div_tittle.appendChild(label_tittle);
    // div_tittle.appendChild(div_tittle_separar);
    // div_tittle_separar.appendChild(pTittle);
    // div_descr.appendChild(label_descr);
    // div_descr.appendChild(div_descr_separar);
    // div_descr_separar.appendChild(pDescr);
    // div_cidade.appendChild(label_cidade);
    // div_cidade.appendChild(div_cidade_separar);
    // div_cidade_separar.appendChild(pCidade);
    // div_equipe_to_edit.appendChild(label_equipe);
    // div_equipe_to_edit.appendChild(div_equipe_separar)
    // //Definição dos pais sobre a área de Formato
    // div_formato.appendChild(label_formato);
    // div_formato.appendChild(div_formato_separar);
    // div_formato_separar.appendChild(label_tradicional);
    // div_formato_separar.appendChild(input_tradicional);
    // div_formato_separar.appendChild(label_inovador);
    // div_formato_separar.appendChild(input_inovador);
    // //Definição dos pais sobre a área de Classificação
    // div_classif_to_edit.appendChild(label_classif);
    // div_classif_to_edit.appendChild(div_classif_separar);
    // div_classif_separar.appendChild(label_lucrativos);
    // div_classif_separar.appendChild(input_lucrativos);
    // div_classif_separar.appendChild(label_ambiental);
    // div_classif_separar.appendChild(input_ambiental);
    // div_classif_separar.appendChild(label_social);
    // div_classif_separar.appendChild(input_social);
    // div_classif_separar.appendChild(label_solidaria);
    // div_classif_separar.appendChild(input_solidaria);
    // div_classif_separar.appendChild(label_publico);
    // div_classif_separar.appendChild(input_publico);
    // div_classif_separar.appendChild(label_cooperativa);
    // div_classif_separar.appendChild(input_cooperativa);
    // div_classif_separar.appendChild(label_associacao);
    // div_classif_separar.appendChild(input_associacao);
    // div_classif_separar.appendChild(label_educacional);
    // div_classif_separar.appendChild(input_educacional);
    // //Definição dos pais sobre a área de Mentorias
    // div_mentoria_to_edit.appendChild(label_mentoria);
    // div_mentoria_to_edit.appendChild(div_mentoria_separar);
    // div_mentoria_separar.appendChild(label_Ideacao);
    // div_mentoria_separar.appendChild(input_Ideacao);
    // div_mentoria_separar.appendChild(label_Impulso);
    // div_mentoria_separar.appendChild(input_Impulso);
    // div_mentoria_separar.appendChild(label_Especial);
    // div_mentoria_separar.appendChild(input_Especial);
    // div_mentoria_separar.appendChild(label_Editais);
    // div_mentoria_separar.appendChild(input_Editais);
    // //Botão enviar
    // div_to_edit.appendChild(div_button_enviar);
    // div_button_enviar.appendChild(button_proj_editado);
    // for(var i=0; i<equipe_array.length; i++){
    //     let pEquipe = document.createElement('p');
    //     pEquipe.setAttribute('contenteditable', 'true');
    //     pEquipe.innerHTML = equipe_array[i];    
    //     div_equipe_separar.appendChild(pEquipe);
    // } 
    // //Define o formato selecionado no momento de criação do projeto -- TIPO DE NEGOCIO
    // for(y=0;y<formato.length;y++){
    //     if(formato[y] === "Negócio Tradicional"){
    //         document.getElementById('input_tradicional').checked = "true";
    //     }
    //     if(formato[y] === "Negócio Inovador"){
    //         document.getElementById('input_inovador').checked = "true";
    //     }
    // }
    // //Determina quais serão as caixas marcadas conforme o que foi salvo no BD na área Classificação --CLASSIFICACAO
    // for(var o=0;o<classif_array.length;o++){
    //     if(classif_array[o] === "Projeto com fins lucrativos"){
    //         document.getElementById('input_lucrativos').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto com apelo ambiental"){
    //         document.getElementById('input_ambiental').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto com apelo social"){
    //         document.getElementById('input_social').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto com economia solidária"){
    //         document.getElementById('input_solidaria').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto com apoio do Poder Público"){
    //         document.getElementById('input_publico').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto interno com alguma Cooperativa"){
    //         document.getElementById('input_cooperativa').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto interno a alguma Associação"){
    //         document.getElementById('input_associacao').checked = "true";
    //     }
    //     if(classif_array[o] === "Projeto com Apelo Educacional"){
    //         document.getElementById('input_associacao').checked = "true";
    //     }
    // }

    // //Determina quais serão as caixas marcadas conforme o que foi salvo no BD na área Mentoria --MENTORIA
    // for(var p=0;p<mentoria_array.length;p++){
    //     if(mentoria_array[p] === "Mentoria Ideação"){
    //         document.getElementById('input_ideacao').checked = "true";
    //     }
    //     if(mentoria_array[p] === "Mentoria Impulso"){
    //         document.getElementById('input_impulso').checked = "true";
    //     }
    //     if(mentoria_array[p] === "Mentoria Especial"){
    //         document.getElementById('input_especial').checked = "true";
    //     }
    //     if(mentoria_array[p] === "Mentoria Editais"){
    //         document.getElementById('input_editais').checked = "true";
    //     }
    // }

    // const criando_canvas = document.getElementById('criar_canvas');
    // criando_canvas.addEventListener('click', (e) =>{
    //     document.getElementById('div_to_edit').style.display='none'
    //     document.getElementById('canvas').style.display = "flex";
    //     e.preventDefault();
    // })

    // const add_reuniao = document.getElementById('button_add_reuniao');

    // function view_reuniao(){
    //     document.getElementById('div_to_edit').style.display='none';
    //     var view = document.createElement('div')
    //     view.setAttribute('id','add_reuniao')
    //     var input = document.createElement('input')
    //     input.type='date'
    //     var add = document.createElement('button')
    //     add.innerHTML = 'add'
    //     var close = document.createElement('img')
    //     close.setAttribute('src', '../img/close.png')
    //     close.addEventListener('click', (e) => {
    //         view.parentNode.removeChild(view)
    //         document.getElementById('div_to_edit').style.display='block'
    //         e.preventDefault()
    //     })
    //     view.appendChild(input)
    //     view.appendChild(add)
    //     view.appendChild(close)
    //     document.body.appendChild(view)
    
    // }

    // add_reuniao.addEventListener('click', (e) =>{
    //     document.getElementById('div_to_edit').style.display = "none";
    //     //ADD FUNCAO DE GERAR VIEW AND EDIT PARA CRIAR REUNIAO
    //     view_reuniao()
    //     e.preventDefault();
    // })
    // const build_fap = document.getElementById('button_build_fap');
    // build_fap.addEventListener('click', (e) =>{
    //     document.getElementById('div_to_edit').style.display = "none";
    //     //ADD FUNCAO DE GERAR VIEW AND EDIT PARA CRIAR REUNIAO
        
    //     e.preventDefault();
    // })
    // // let button_add_reuniao = document.createElement('button')
    // // let button_build_fap
    // const fechar_edit = document.getElementById('img_close');
    // fechar_edit.addEventListener('click', (e) =>{
    //     var el = document.getElementById('div_to_edit')
    //     el.parentElement.removeChild(el)
    //     document.getElementById('profile').style.display = 'flex'
    //     document.getElementById('box').style.display= 'block'
    //     e.preventDefault()
    // })
    
    
// }


function build_fap(){

}