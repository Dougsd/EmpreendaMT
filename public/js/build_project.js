var push_value = database.ref('/triagem/projetos/').push()
var pj1= pj

const step1 = document.getElementById('button_cliente1')
step1.addEventListener('click', (e) =>{
    var nome_cliente = document.getElementById('name_input').value
    var cpf_cliente = document.getElementById('cpf_input').value
    var email_cliente = document.getElementById('email_input').value
    var numero_cliente = document.getElementById('numero_input').value
    
    var resp = {
        Nome:nome_cliente,
        Email:email_cliente,
        CPF:cpf_cliente,
        Numero:numero_cliente
    }
    
    function writeUserData(nome_cliente, cpf_cliente, email_cliente, numero_cliente){
        database.ref('triagem/projetos/'+push_value.key+"/reponsável").set({
            Email: email_cliente,
            Nome: nome_cliente,
            CPF: cpf_cliente,
            Número: numero_cliente
        });
    }
    //Especifica que os campos de nome do cliente, cpf, email e número não podem estar vazios,
    //para que as informações sejam salvas no banco de dados, caso estiverem, 
    if(nome_cliente != "" && cpf_cliente != "" && email_cliente != "" && numero_cliente != ""){
            // writeUserData(nome_cliente, cpf_cliente, email_cliente, numero_cliente);
            pj1.Responsavel=resp
    }else{
        window.alert("Preencha todos os campos!");
        document.getElementById('client_info').style.display = "none"
        document.getElementById('projeto_info').style.display = "none"
        document.getElementById('name_input').value = ""
        document.getElementById('cpf_input').value = ""
        document.getElementById('email_input').value = ""
        document.getElementById('numero_input').value = ""
        document.getElementById('div_to_opt2').style.display = "none"
    }
    e.preventDefault()
})
const step2 = document.getElementById('button_cliente2');
step2.addEventListener("click", (e) =>{
    var nome_proj = document.getElementById('proj_name_input').value;
    var cidad_proj = document.getElementById('cidade_input').value;
    var email_cliente = document.getElementById('email_input').value;
    var descr = document.getElementById('descricao_textarea').value;

    /*Captura os valores na caixa de classificaçao do projeto e os salva em array*/
    // var classificacao = [];
    // if(document.getElementById('classifi_input1').checked){
    //     var class1 = document.getElementById('classifi_input1').value = "Projeto com fins lucrativos";
    //     classificacao.push(class1);
    // }
    // if(document.getElementById('classifi_input2').checked){
    //     var class2 = document.getElementById('classifi_input2').value = "Projeto com apelo ambiental";
    //     classificacao.push(class2);
    // }
    // if(document.getElementById('classifi_input3').checked){
    //     var class3 = document.getElementById('classifi_input3').value = "Projeto com apelo social";
    //     classificacao.push(class3);
    // }
    // if(document.getElementById('classifi_input4').checked){
    //     var class4 = document.getElementById('classifi_input4').value = "Projeto com economia solidária";
    //     classificacao.push(class4);
    // }
    // if(document.getElementById('classifi_input5').checked){
    //     var class5 = document.getElementById('classifi_input5').value = "Projeto com apoio do Poder Público";
    //     classificacao.push(class5);
    // }
    // if(document.getElementById('classifi_input6').checked){
    //     var class6 = document.getElementById('classifi_input6').value = "Projeto interno com alguma Cooperativa";
    //     classificacao.push(class6);
    // }
    // if(document.getElementById('classifi_input7').checked){
    //     var class7 = document.getElementById('classifi_input7').value = "Projeto interno a alguma Associação";
    //     classificacao.push(class7);
    // }
    // if(document.getElementById('classifi_input8').checked){
    //     var class8 = document.getElementById('classifi_input8').value = "Projeto com Apelo Educacional";
    //     classificacao.push(class8);
    // }
    /*Captura os valores na caixa de classificaçao do projeto e os salva em array*/

    /*Captura o valor de qual é o formato do projeto*/
    var formato = [];
    if(document.getElementById('formato_espace1').checked){
        var form1 = document.getElementById('formato_espace1').value = "Negócio Tradicional";
        formato.push(form1);
    }
    if(document.getElementById('formato_espace2').checked){
        var form2 = document.getElementById('formato_espace2').value = "Negócio Inovador";
        formato.push(form2);
    }
    /*Captura o valor de qual é o formato do projeto*/

    /*Captura quais serão as mentorias que o cliente deseja*/
    var mentorias = [];
    if(document.getElementById('mentorias_input1').checked){
        var ment1 = document.getElementById('mentorias_input1').value = "Mentoria Ideação";
        mentorias.push(ment1);
    }
    if(document.getElementById('mentorias_input2').checked){
        var ment2 = document.getElementById('mentorias_input2').value = "Mentoria Impulso";
        mentorias.push(ment2);
    }
    if(document.getElementById('mentorias_input3').checked){
        var ment3 = document.getElementById('mentorias_input3').value = "Mentoria Especial";
        mentorias.push(ment3);
    }
    if(document.getElementById('mentorias_input4').checked){
        var ment4 = document.getElementById('mentorias_input4').value = "Mentoria Editais";
        mentorias.push(ment4);
    }
    /*Captura quais serão as mentorias que o cliente deseja*/

    /*Captura quais são os períodos de disponibilidade do cliente e salva no BD*/
    var dispo = [];
    if(document.getElementById('seg-diurno').checked){
        var seg1 = document.getElementById('seg-diurno').value = "Segunda Matutino";
        dispo.push(seg1);
    }
    if(document.getElementById('seg-vespertino').checked){
        var seg2 = document.getElementById('seg-vespertino').value = "Segunda Vespertino";
        dispo.push(seg2);
    }
    if(document.getElementById('seg-noturno').checked){
        var seg3 = document.getElementById('seg-noturno').value = "Segunda Noturno";
        dispo.push(seg3);
    }
    if(document.getElementById('terc-diurno').checked){
        var terc1 = document.getElementById('terc-diurno').value = "Terça Matutino";
        dispo.push(terc1);
    }
    if(document.getElementById('terc-vespertino').checked){
        var terc2 = document.getElementById('terc-vespertino').value = "Terça Vespertino";
        dispo.push(terc2);
    }
    if(document.getElementById('terc-noturno').checked){
        var terc3 = document.getElementById('terc-noturno').value = "Terça Notunro";
        dispo.push(terc3);
    }
    if(document.getElementById('quar-diurno').checked){
        var quar1 = document.getElementById('quar-diurno').value = "Quarta Matutino";
        dispo.push(quar1);
    }
    if(document.getElementById('quar-vespertino').checked){
        var quar2 = document.getElementById('quar-vespertino').value = "Quarta Vespertino";
        dispo.push(quar2);
    }
    if(document.getElementById('quar-noturno').checked){
        var quar3 = document.getElementById('quar-noturno').value = "Quarta Noturno";
        dispo.push(quar3);
    }
    if(document.getElementById('quin-diurno').checked){
        var quin1 = document.getElementById('quin-diurno').value = "Quinta Matutino";
        dispo.push(quin1);
    }
    if(document.getElementById('quin-vespertino').checked){
        var quin2 = document.getElementById('quin-vespertino').value = "Quinta vespertino";
        dispo.push(quin2);
    }
    if(document.getElementById('quin-noturno').checked){
        var quin3 = document.getElementById('quin-noturno').value = "Quinta Noturno";
        dispo.push(quin3);
    }
    if(document.getElementById('sex-diurno').checked){
        var sex1 = document.getElementById('sex-diurno').value = "Sexta Matutino";
        dispo.push(sex1);
    }
    if(document.getElementById('sex-vespertino').checked){
        var sex2 = document.getElementById('sex-vespertino').value = "Sexta Vespertino";
        dispo.push(sex2);
    }
    if(document.getElementById('sex-noturno').checked){
        var sex3 = document.getElementById('sex-noturno').value = "Sexta Noturno";
        dispo.push(sex3);
    }

    if(nome_proj != "" && cidad_proj != "" && descr != ""){
        //Preenche objeto modelo
        pj1.Nome=nome_proj
        pj1.Cidade=cidad_proj
        pj1.Descricao=descr
        // pj1.Classificacao=classificacao
        pj1.Formato=formato
        pj1.Mentorias=mentorias
        pj1.Disponibilidade=dispo
        pj1.Canvas=[]
        var req = new XMLHttpRequest();
        req.overrideMimeType("application/json");
        req.open('POST', '/save_project', true);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(pj1))
    }else{
        window.alert("Preencha todos os campos!");
        
    }
    var projetos_user = database.ref("/users/");
    projetos_user.orderByChild("Email").equalTo(email_cliente).on("child_added", function(snapshot) {
        var user = snapshot.key;
        add_projs_to_user(user)
    });
    e.preventDefault();
})
function add_projs_to_user(user){
    database.ref('/users/'+user+'/projetos').set({
        projeto: push_value
    });
};

//EQUIPE
//Constante responsável pela criação da div contentando todos os elementos necessários
//para digitar, salvar e enviar os emails referente a quantidade de membros presente na equipe
//para o banco de dados, onde os valores são salvos
const pop_membros = document.getElementById('confir_mem');
pop_membros.addEventListener('click', (e) =>{

    //variável responsável por capturar a quantidade de membros presentes em uma equipe,
    //para que o usuário poss digitar o email de todos
    var quant_mem = document.getElementById('membros_equipe');
    membros = quant_mem.options[quant_mem.selectedIndex].value;

    //as funções estão sendo chamadas aqui para que sejam criadas, apó o click do botão "Ok"
    div_mem();
    div_img_close();
    div_tittle();

    //estrutura de repetição para a criação de campos de digitação de email condizente
    //com a quantidade de membros do equipe
    for(var mem_num = 1; mem_num <= membros; mem_num++){

        //cria a quantidade de campos necessária
        input_labels(mem_num)
    }
    button_enviar();
    
    e.preventDefault();
})

//Função responsável pela criação da div principal 
//Configura juntamente os seus atributos e estilização CSS, asism como define seu pai no momento em que for gerado
function div_mem(){
    let div_mem_elem = document.createElement("div");
    div_mem_elem.setAttribute('id', 'div_mem');
    div_mem_elem.style.backgroundColor = "#0ff271";
    div_mem_elem.style.position = "absolute";
    div_mem_elem.style.border = "2px solid black";
    div_mem_elem.style.borderRadius = "5px";
    div_mem_elem.style.width = "50%";
    div_mem_elem.style.height = "auto";
    div_mem_elem.style.marginLeft = "25%";
    let divPai = document.getElementById('projeto_info');
    divPai.appendChild(div_mem_elem);
}

//Função responsável pela criação do icone (imagem) para fechamento da div principal
//Define seus atributos e sua estilização CSS, além de definir que quando um click for efetuado neste elemento
//a div fecha e limpa os campos de digitação
function div_img_close(){
    var div_mem_pai = document.getElementById('div_mem');//Captura o ID do elemento que será pai
    let img_close = document.createElement('img');
    img_close.setAttribute('id', 'img_close');
    img_close.setAttribute('src', '../img/close.png');
    img_close.style.backgroundColor = "#0ff271";
    img_close.style.width = "10px";
    img_close.style.height = "10px";
    img_close.style.float = "right";
    img_close.style.margin = "5px"
    div_mem_pai.appendChild(img_close);

    //constante responsável pelo fechamento da div
    const close_div_mem = document.getElementById('img_close');
    close_div_mem.addEventListener('click', (e) =>{
        document.getElementById('div_mem').style.display = "none";
        e.preventDefault();
    });
}

//Função responsável pela criação da div para titulo
//Determina a criação de dois elementos (div, label),
//define quem será pai de qaul elemento e ja realaiza a estilização CSS
function div_tittle(){
    //cria uma div que conterá o label com o titulo
    var div_mem_pai = document.getElementById('div_mem');//Captura o ID do elemento que será pai
    let div_tittle_elem = document.createElement('div');
    div_tittle_elem.setAttribute('id', 'div_tittle');
    div_tittle_elem.style.backgroundColor = "#0ff271";
    div_tittle_elem.style.width = "97%";
    div_tittle_elem.style.padding = "0px 5px 5px 5px";
    div_tittle_elem.style.display = "flex";
    div_tittle_elem.style.justifyContent = "center";
    div_mem_pai.appendChild(div_tittle_elem);

    //cria um label onde o tiutlo será mostrado
    let label_tittle = document.createElement('label');
    label_tittle.style.backgroundColor = "#0ff271";
    label_tittle.style.fontFamily = "Lato";
    label_tittle.style.fontWeight = "bold";
    label_tittle.innerHTML = "Membros da equipe:";
    label_tittle.style.textAlign = "center";
    div_tittle_elem.appendChild(label_tittle);
}

//Função responsável pela criação de 3 elemetos (div, label, input)
//estilização CSS ja definida na geração dos elementos
function input_labels(mem_num){
    //cria a div que conterá os elementos labels e input para melhor orientação do usuário
    var divisionID = 'division'+mem_num;
    var div_mem_pai = document.getElementById('div_mem');
    let div_fullEspace = document.createElement("div");
    div_fullEspace.setAttribute('class', 'full_espace');
    div_fullEspace.setAttribute('id', divisionID);
    div_fullEspace.style.margin = "5px";
    div_fullEspace.style.padding = "5px";
    div_mem_pai.appendChild(div_fullEspace);

    //cria o label onde será a indicação visual de cada membro da equipe para inserção dos emails
    let label_membros = document.createElement("label");
    label_membros.setAttribute('class', 'labble_tittle');
    label_membros.style.fontFamily = 'Lato';
    label_membros.style.margin = "5px";
    label_membros.style.backgroundColor = "#0ff271";
    label_membros.innerHTML = "Membro "+mem_num;
    div_fullEspace.appendChild(label_membros);

    //elemento input quando criado é responsável pela digitação dos emails
    var input_to_emailID = 'email'+mem_num;
    let input_to_email = document.createElement("input");
    input_to_email.setAttribute('class', 'input_to_email');
    input_to_email.setAttribute('id', input_to_emailID)
    input_to_email.setAttribute('type', 'text');
    input_to_email.setAttribute('placeholder', 'E-mail');
    input_to_email.style.border = "none";
    input_to_email.style.outline = "0";
    input_to_email.style.borderBottom = "2px solid black";
    input_to_email.style.backgroundColor = "#0ff271";
    input_to_email.style.width = "70%";
    div_fullEspace.appendChild(input_to_email)
}
//Função responsável pela criação da div que conterá o prócimo elemento a ser criado botão "Enviar"
//Ambos elementos tem sua estização CSS defina pela função
function button_enviar(){
    //cria a div que conterá o botão "Enviar"
    var div_mem_pai = document.getElementById('div_mem');//Captura o ID do elemento que será pai
    let div_button = document.createElement('div');
    div_button.setAttribute('id', 'div_button');
    div_button.style.backgroundColor = "#0ff271";
    div_button.style.padding = "5px";
    div_button.style.width = "97%";
    div_button.style.height = "auto";
    div_button.style.display = "grid";
    div_mem_pai.appendChild(div_button);

    //cria o elemento button, o qual é responsável por
    //enviar os emails ja capturados para o banco de dados
    let button_send_emails = document.createElement("button");
    button_send_emails.setAttribute('id', 'button_send_emails')
    button_send_emails.style.border = "2px solid black";
    button_send_emails.style.borderRadius = "5px";
    button_send_emails.style.width = "97%";
    button_send_emails.style.margin = "5px";
    button_send_emails.style.padding = "5px";
    button_send_emails.style.backgroundColor = "#0ff271";
    button_send_emails.style.position = "relative";
    button_send_emails.style.float = "inline-start";
    button_send_emails.style.cursor = "pointer";
    button_send_emails.innerHTML = "Enviar";
    div_button.appendChild(button_send_emails);

    //constante responsável por capturar os valores digitados em cada campo pelo usuário
    //e salvar os mesmo dentro de um arry
    const salvar_emails = document.getElementById('button_send_emails');
    salvar_emails.addEventListener('click', (e) =>{

        var emails_value = document.querySelectorAll('.input_to_email');
        emails = [];

        //estrutura de repetição para salvar todos os emails no array
        for(i = 0; i<emails_value.length; i++){
            emails.push(emails_value[i].value)
        }
        save_emails(emails)
        document.getElementById('div_mem').style.display = "none";
        e.preventDefault();
    })
}
//Salva o array que contém os emails no banco de dados
function save_emails(emails){
    pj1.Equipe=emails
}